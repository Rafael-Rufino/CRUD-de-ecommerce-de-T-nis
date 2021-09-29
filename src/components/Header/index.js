/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/image/logo.svg';
// eslint-disable-next-line react/prop-types
function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
