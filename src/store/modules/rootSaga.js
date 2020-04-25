import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

// Une todos os sagas criados
export default function* rootSaga() {
  return yield all([
    cart
  ]);
};