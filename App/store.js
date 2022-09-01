//redux store 전체 전역변수를 모아서 관리한다.
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducer/userSlice';
import postingReducer from './reducer/postingSlice';
import modalReducer from './reducer/modalSlice';

export default configureStore({
  reducer: {
    posting: postingReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
