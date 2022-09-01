import {createSlice} from '@reduxjs/toolkit'; //

export const modalSlice = createSlice({
  modal: null,
  name: 'modal',

  initialState: {modalVisible: false, modalInner: '', disableYDrawer: true},

  reducers: {
    setModalHidden: (state, action) => {
      state.modalVisible = false;
    },
    setModalVisible: (state, action) => {
      state.disableYDrawer = action.payload.disableYDrawer;
      state.modalVisible = true;
    },
    setModalInner: (state, action) => {
      state.modalInner = action.payload.modalInner;
    },
  },
});

export const {setModalHidden, setModalVisible, setModalInner} =
  modalSlice.actions;

export const selectModalVisible = state => state.modal.modalVisible;

export const selectModalInner = state => state.modal.modalInner;

export const selectdisableYDrawer = state => state.modal.disableYDrawer;

export default modalSlice.reducer;
