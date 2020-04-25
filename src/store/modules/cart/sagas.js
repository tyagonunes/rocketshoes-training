import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions'

// O '*' representa um generator. Functiona como um async/await com mais funcionalidades.
// O 'yield' é como se fosse o await do generator. Ele agarda a execução do metodo a seguir.
// O 'call' é responsavel por chamar metodos que sao assincronos e retornam promisses. call(metodo, parametros).
// O 'put' dispara um action do redux.
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data))
};

// O 'all' cadastra listeners para ouvir actions que foram disparadas.
// O 'takeLatest' paga a ultima chamada de uma action e executa uma funcao
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);