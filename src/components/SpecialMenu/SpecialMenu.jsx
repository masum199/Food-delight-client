import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import pasta from '../../../public/pasta.jpg'
import chicken from '../../../public/chicken.jpg'
import fish from '../../../public/fish.jpg'
import './SpecialMenu.css'
import Marquee from 'react-fast-marquee';

const SpecialMenu = () => {
    return (
        <div>
            <div className='text-center'>
    <h1 className='display-1 fw-bold'>Our Special Menu</h1>
    <p className='my-4 fw-bold'>Welcome to our restaurant! We offer a variety of delicious and healthy dishes made with fresh, locally-sourced ingredients. Whether you're in the mood for a hearty meal or a light snack, we have something for everyone. Come dine with us and experience the best food in town!</p>
</div>
            <div className='fw-bold my-4'>
            <Marquee behavior="" direction="left" speed={100}>
            <Button className='ms-5 btn-m' variant="light">All</Button>
            <Button className='ms-5 btn-m' variant="light">Spacial Food</Button>
            <Button className='ms-5 btn-m' variant="light">Italian</Button>
            <Button className='ms-5 btn-m' variant="light">Japanese</Button>
            <Button className='ms-5 btn-m' variant="light">Korean</Button>
            <Button className='ms-5 btn-m' variant="light">Chaines</Button>
            <Button className='ms-5 btn-m' variant="light">American</Button>
            <Button className='ms-5 btn-m' variant="light">French</Button>
            </Marquee>
            </div>
            <CardGroup className='container gap-4'>
  <Card className='card'>
    <div className='card-img-overlay'>
      <Card.Img variant="top" src={pasta} />
      <div className='overlay'>
        <h3>Classic Pasta</h3>
        <p>Our signature pasta dish made with homemade marinara sauce and fresh herbs.</p>
      </div>
    </div>
  </Card>
  <Card className='card'>
    <div className='card-img-overlay'>
      <Card.Img variant="top" src={chicken} />
      <div className='overlay'>
        <h3>Lemon Herb Chicken</h3>
        <p>Succulent chicken breasts seasoned with fresh herbs and lemon, served with roasted vegetables.</p>
      </div>
    </div>
  </Card>
  <Card className='card'>
    <div className='card-img-overlay'>
      <Card.Img className='fish' variant="top" src={fish} />
      <div className='overlay'>
        <h3>Spicy Fish Curry</h3>
        <p>A delicious blend of fresh fish, coconut milk, and spices, served with steaming rice.</p>
      </div>
    </div>
  </Card>
</CardGroup>
        </div>
    );
};

export default SpecialMenu;