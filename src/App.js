import './App.css';
import Table from './Table'
import CardStudent from './CardStudent';
import Modal from './Modal';
import imgAdd from './img/Group-add.svg';
import imgSort from './img/Group-sort.svg';
import imgSerch from './img/Search.svg';
import pngSort from './img/Ascending Sorting.png';
import addImg from './img/add.svg';
import { useState } from 'react';

function App() {

  const [isModal, setModal] = useState(false);
  const [isSort, setSort] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-header">Реестр студентов</h1>
        <div className="icons-header">
          <div className="icon-header"><img src={imgAdd} onClick={() => setModal(true)}></img></div>
          <div className="icon-header"><img src={imgSort} onClick={() => setSort(false)}></img></div>
          <div className={isSort ? "field-sort hidden" : "field-sort"}>
            <div className="head-sort">
              <div className="left-head-sort">
                <img className="img-head-sort" src={pngSort}></img>
                <span>Сортировка</span>
              </div>
              <img className="closeButt" src={addImg} onClick={() => setSort(true)}></img>
            </div>
              <div className="list-filters">
                <span className="filter">по ФИО</span>
                <span className="filter">по дате поступления</span>
                <span className="filter">по дате окончания</span>
                <span className="filter">по номеру студенческого</span>
              </div>
            </div>  
        </div>
        <div className="search-header">
          <img src={imgSerch}></img>
          <input placeholder="Поиск" className="input-header"></input>
        </div>
      </header>
      <div className="container">
        <Table />
        <CardStudent />
        <Modal isVisible={isModal} onClose={() => setModal(false)}/>
      </div>
    </div>
  );
}

export default App;
