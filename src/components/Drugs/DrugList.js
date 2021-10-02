import React from 'react';
import { Table } from 'react-bootstrap';

const DrugList = (props) => {
    const drugList = props.drugListArray;
    const listItems = drugList.map((item, index) => 
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>            
            <td>{item.quantity}</td>
            <td>{item.price}</td>
        </tr>
    );
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </Table>
    );
};

export default DrugList;