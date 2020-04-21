import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.svg';

function Header({cartSize}) {
  return (
    <Container>
      <Link to="/">
      <img src={Logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket  size={36} color="#fff"/>
      </Cart>
    </Container>
  );
}
const mapStateToProps = state => ({
  cartSize: state.cart.length
});

export default connect(mapStateToProps)(Header)