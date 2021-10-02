import React from 'react';
import './Drug.css'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Drug = (props) => {
    const { name, dose, img, price } = props.drug;
    // eslint-disable-next-line no-unused-vars
    const { drugListArray, setDrugListArray, total, setTotal } = props;
    const handleDrugClickButton = (name, price) => {
        setDrugListArray(drugListArray => [...drugListArray, {'title': name, 'price': price, 'quantity': 1}]);
        setTotal(total => parseFloat(total) + parseFloat(price));

    }
    return (
        <div className="col-4 p-2">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} height="250" />
                <Card.Body style = {{backgroundColor: '#e4e7ed', fontWeight: 'bold'}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Dose: {dose}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Button variant="success" onClick={() => handleDrugClickButton(name, price)}><FontAwesomeIcon icon={faShoppingCart} /> Purchase</Button>
                </Card.Body>
             </Card>
        </div>
    );
};

export default Drug;