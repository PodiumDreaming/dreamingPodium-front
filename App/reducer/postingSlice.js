import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; //
import AsyncStorage from '@react-native-community/async-storage';

import {_fetchNoteData} from '../utils/note';
import {ActionSheetIOS} from 'react-native';

import API from '../utils/note';

export const fetchNoteData = createAsyncThunk(
  // record 불러오기
  'record/get',
  async payload => {
    const response = await API.getRecord(
      payload.user_id,
      payload.date,
      payload.serverToken,
    );
    if (response.status !== 200) {
      throw Error(response.data);
    }
    return response.data;
  },
);

export const fetchObjective = createAsyncThunk(
  'objective/get',
  async payload => {
    const response = await API.getObjective(payload.user_id);
    if (response.status !== 200) {
      throw Error(response.data);
    }
    return response.data;
  },
);

export const postingSlice = createSlice({
  posting: null,
  name: 'posting',
  initialState: {
    todayDate: new Date().toDateString(),
    writtenNote: {
      // 쓰인 날짜
      date: '',
      // [트레이닝 파트 글 목록]
      noteContentGroup: {
        training: {
          train_detail: {content: null},
          routines: {},
          success: {content: null, image: []},
          failure: {content: null, image: []},
        },
        feedback: '',
        conditioning: {
          mind: [],
          physical: [],
          injury: [],
        },
      },
    },
    // 목표 달성
    ObjectNote: {
      objectives: [],
      requirements: [],
      efforts: [],
      routines: [],
    },
  },

  reducers: {
    // 작성 제출
    submitNote: (state, action) => {
      if (action.payload.noteIdx === 'feedback') {
        state.writtenNote.noteContentGroup[action.payload.noteIdx] =
          action.payload.content;
      } else {
        state.writtenNote.noteContentGroup.training[
          action.payload.noteIdx
        ].content = action.payload.content;
      }

      if (action.payload.image.length > 0) {
        if (
          state.writtenNote.noteContentGroup.training[action.payload.noteIdx]
            .image === null
        ) {
          state.writtenNote.noteContentGroup.training[
            action.payload.noteIdx
          ].image = action.payload.image;
        } else {
          state.writtenNote.noteContentGroup.training[
            action.payload.noteIdx
          ].image.push(...action.payload.image);
        }
      }
    },

    // 심리, 신체 컨디션 및 부상 추가
    submitCondition: (state, action) => {
      const conditionGroup =
        state.writtenNote.noteContentGroup.conditioning[
          action.payload.conditionIdx
        ];

      if (conditionGroup.includes(action.payload.content)) {
        const index = conditionGroup.indexOf(action.payload.content);
        conditionGroup.splice(index, 1);
      } else {
        conditionGroup.push(action.payload.content);
      }

      // 신체상태 API
      if (action.payload.conditionIdx === 'injury') {
        API.postRecord(
          action.payload.userToken,
          state.todayDate,
          action.payload.conditionIdx,
          {
            content: [
              ...state.writtenNote.noteContentGroup.conditioning[
                action.payload.conditionIdx
              ],
            ],
          },
          action.payload.serverToken,
        );
      }
    },

    deleteInjury: (state, action) => {
      let deleteIndex = '';

      const injuryGroup =
        state.writtenNote.noteContentGroup.conditioning.injury;

      injuryGroup.map((element, index) => {
        if (
          element.injuryMemo === action.payload.injuryMemo &&
          element.interruptData === action.payload.interruptData &&
          element.painData === action.payload.painData &&
          element.injuryDirection === action.payload.injuryDirection &&
          element.injurySection === action.payload.injurySection &&
          element.injuryForm === action.payload.injuryForm
        ) {
          deleteIndex = index;
        }

        if (deleteIndex !== '') {
          state.writtenNote.noteContentGroup.conditioning.injury.splice(
            deleteIndex,
            1,
          );

          // 신체상태 삭제 API
          API.postRecord(
            action.payload.userToken,
            state.todayDate,
            'injury',
            {
              content: [
                ...state.writtenNote.noteContentGroup.conditioning.injury,
              ],
            },
            action.payload.serverToken,
          );
        }
      });
    },

    deleteImage: (state, action) => {
      let deleteIndex = '';

      const imageGroup =
        state.writtenNote.noteContentGroup.training[action.payload.noteIdx]
          .image;

      imageGroup.map((element, index) => {
        if (element === action.payload.imageURI) {
          deleteIndex = index;
        }

        if (deleteIndex !== '') {
          state.writtenNote.noteContentGroup.training[
            action.payload.noteIdx
          ].image.splice(deleteIndex, 1);

          // image Delete API
          API.deleteImage(
            action.payload.userToken,
            action.payload.noteIdx,
            state.todayDate,
            action.payload.serverToken,
            state.writtenNote.noteContentGroup.training[action.payload.noteIdx]
              .image,
          );
        }
      });
    },

    // 날짜 선택
    selectDate: (state, action) => {
      state.todayDate = action.payload.date;
    },
    // 루틴 체크
    checkRoutine: (state, action) => {
      state.writtenNote.noteContentGroup.training.routines[
        action.payload.routineName
      ] =
        !state.writtenNote.noteContentGroup.training.routines[
          action.payload.routineName
        ];

      // 루틴 체크 API
      API.postRecord(
        action.payload.userToken,
        state.todayDate,
        'routines',
        {content: state.writtenNote.noteContentGroup.training.routines},
        action.payload.serverToken,
      );
    },

    // 목표달성 추가
    submitObject: (state, action) => {
      state.ObjectNote[action.payload.ObjectType].push(action.payload.content);
    },
    // 목표달성 삭제
    deleteObject: (state, action) => {
      state.ObjectNote[action.payload.ObjectType] = state.ObjectNote[
        action.payload.ObjectType
      ].filter(item => item !== action.payload.content);
    },
  },
  extraReducers: {
    [fetchNoteData.fulfilled](state, action) {
      state.writtenNote = action.payload;

      console.log('record api 요청 후 데이터 => ', state.writtenNote);
    },
    [fetchNoteData.rejected](state, action) {
      console.log('fail record api', action.payload);
    },

    [fetchObjective.fulfilled](state, action) {
      state.ObjectNote.objectives = action.payload['objectives'];
      state.ObjectNote.requirements = action.payload['requirements'];
      state.ObjectNote.efforts = action.payload['efforts'];
      state.ObjectNote.routines = action.payload['routines'];
      console.log('objective api 요청 후 데이터 =>', state.ObjectNote);
    },
    [fetchObjective.rejected](state, action) {
      console.log('fail objective api', action.payload);
    },
  },
});

export const {
  submitNote,
  selectDate,
  checkRoutine,
  submitCondition,
  submitInjury,
  deleteInjury,
  submitObject,
  deleteObject,
  getObjective,
  deleteImage,
} = postingSlice.actions;

export const selectLogin = state => state.posting.loggedIn;
export const selectToken = state => state.posting.token;
export const selectWrittenNote = state => state.posting.writtenNote;
export const selectTodayDate = state => state.posting.todayDate;
export const setObjectNote = state => state.posting.ObjectNote;

export default postingSlice.reducer;
