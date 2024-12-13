import store, { AppDispatch } from 'redux-store/store';
import { API } from '../../../api';
import slice from './slice';

const {} = slice.actions;

const initalize = () => async (dispatch: AppDispatch) => {
  console.log('Core initalization invoked');
  store.getState();
  await API.history.getVideoProjectHistory({
    params: { projectId: '123', page: 0 },
  });
  dispatch;
};

export default { initalize };
