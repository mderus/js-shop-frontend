import {useState, useEffect} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {getUserDetails, updateUserProfile} from '../actions/userActions';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const {loading, error, user} = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {success} = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!user || !user.name || success) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    // if (!name | !email | !password | !confirmPassword) {
    //   setMessage('All fields are requiered');
    // }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
    } else {
      dispatch(updateUserProfile({id: user._id, name, email, password}));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h1>User Profile</h1>
        {/* errors */}
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          {/* NAME */}
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              className='mb-3'
              type='text'
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          {/* EMAIL */}
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              value={email}
              className='mb-3'
              type='email'
              placeholder='Enter your email address'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {/* PASSWORD */}
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              className='mb-3'
              type='password'
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {/* CONFIRM PASSWORD */}
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              value={confirmPassword}
              className='mb-3'
              type='password'
              placeholder='Confirm your password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
