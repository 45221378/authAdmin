import { getToken } from './services/credit'


export default {
  namespace: "credit",

  state: {
    token:'',
  },
  reducers: {
    save (state, { payload}) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *getToken (payload, {put,call}){
      const response = yield call(getToken,payload)
      yield put({
        type:'save',
        token:response,
      })
    },
  },
  subscriptions: {

  },
}
