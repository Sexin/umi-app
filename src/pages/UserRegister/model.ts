import { Effect, Reducer } from 'umi';

import { fakeRegister } from './service';

export interface StateType {
  status?: 'ok' | 'error' | 500;
  currentAuthority?: 'user' | 'guest' | 'admin';
  msg?: '注册成功' | '账号已存在';
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    submit: Effect;
  };
  reducers: {
    registerHandle: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'userRegister',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },

  reducers: {
    registerHandle(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        msg: payload.msg,
      };
    },
  },
};

export default Model;
