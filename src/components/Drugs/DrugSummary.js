import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Card, Button, CarouselItem } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
// import Drugs from './Contain/Contain';
import './Drug.css';
// import './DrugList.js';
// import './DrugList'
import './DrugList.js'
import DrugList from './DrugList.js';

const DrugSummary = (props) => {
    return (
        <div className ="">
            <div className="">
                <h4 className="text-justify">Summary</h4>
                <DrugList 
                    drugListArray={props.drugListArray} 
                    setDrugListArray={props.setDrugListArray}
                />
                <p>Total: {props.total} BDT</p>
            </div>
        </div>
    );
};

export default DrugSummary;