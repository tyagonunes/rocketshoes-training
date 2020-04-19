import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/02/D22-3195-002/D22-3195-002_zoom2.jpg?ts=1571247200&ims=326x" alt=""/>
            </td>
            <td>
              <strong>Tenis</strong>
              <span>R$ 20,90</span>
            </td>
            <td>
              <button>
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={1}/>
              <button>
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
            <td>
              <strong>R$ 202,00</strong>
            </td>
            <td>
              <button>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      
      <footer>
        <button>Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1900,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
