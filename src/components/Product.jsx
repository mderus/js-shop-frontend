import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';

const Product = ({product}) => {
  return (
    <Link to={`/product/${product._id}`}>
      <Card className='my-3 p-3 rounded'>
        <Card.Img src={product.image} variant='top' />
        <Card.Body>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Product;
