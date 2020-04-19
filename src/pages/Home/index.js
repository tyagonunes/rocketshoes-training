import React from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-2/02/D22-3195-002/D22-3195-002_zoom2.jpg?ts=1571247200&ims=326x" alt=""/>
        <strong>Tenis</strong>
        <span>R$ 1209,90</span>
        <button>
          <div>
            <MdShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
