import {useEffect} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap';
import {addToCart} from '../actions/cartActions';

const CartScreen = () => {
  const {id: productId} = useParams();

  const {search} = useLocation();

  const qty = search ? Number(search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <Row></Row>;
};

export default CartScreen;
