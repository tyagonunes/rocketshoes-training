import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions'

// O '*' representa um generator. Functiona como um async/await com mais funcionalidades.
// O 'yield' é como se fosse o await do generator. Ele agarda a execução do metodo a seguir.
// O 'call' é responsavel por chamar metodos que sao assincronos e retornam promisses. call(metodo, parametros).
// O 'put' dispara um action do redux.
// O 'select' busca informações dentro da store.
function* addToCart({ id }) {
  const productExists = yield select(
    state => state.cart.find(p => p.id === id)
  );
  
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if(amount > stockAmount) {
    toast.error('Quantidade solicitade fora de estoque');    
    return;
  }

  if(productExists) {
    yield put(updateAmountSuccess(id, amount))  
  } else {
    const response = yield call(api.get, `/products/${id}`);
    
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };    
    yield put(addToCartSuccess(data));

    history.push('/cart');
  };

};

function* updateAmount({ id, amount }) {
  if(amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if(amount > stockAmount) {
    toast.error('Quantidade solicitade fora de estoque');    
    return;
  };

  yield put(updateAmountSuccess(id, amount))
}

// O 'all' cadastra listeners para ouvir actions que foram disparadas.
// O 'takeLatest' paga a ultima chamada de uma action e executa uma funcao
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);