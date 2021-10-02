/* eslint-disable react/jsx-no-undef */
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import DrugsContainer from './components/Drugs/Contain/Contain';
import DrugSummary from './components/Drugs/DrugSummary';

function App() {
  const [total, setTotal] = useState(0);
  const [drugListArray, setDrugListArray] = useState([]);

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <DrugsContainer
              drugListArray = {drugListArray}
              setDrugListArray = {setDrugListArray}
              total = {total}
              setTotal = {setTotal}
            />
          </div>
          <div className="col-2">
            <DrugSummary 
              total = {total}
              drugListArray = {drugListArray}              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
