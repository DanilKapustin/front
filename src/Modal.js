import React, { Component } from 'react'
import addImg from './img/add.svg';
import { useEffect } from 'react';

const Modal = ({ isVisible = false, onClose }) => {
   


    return !isVisible ? null : (
    <form className= 'modalMain' >
      <img className= 'closeButt' src={addImg}  onClick={onClose}></img>
      <input className="modalInput" placeholder='Фамилия'></input>
      <input className="modalInput" placeholder='Имя'></input>
      <input className="modalInput" placeholder='Отчество'></input>
      <input className="modalInput" placeholder='Дата рождения'></input>
      <input className="modalInput" placeholder='№ студенческого билета'></input>
      <select className="modalInput">
        <option value="" disabled selected hidden>Факультет</option>
      </select>
      <select className="modalInput" >
        <option value="" disabled selected hidden>Ступень обучения</option>
      </select>
      <select className="modalInput" placeholder='Кафедра'>
        <option value="" disabled selected hidden>Кафедра</option>
      </select>
      <div className="fieldsThemeWork">
        <div className="fieldThemeWork">
          <input className="modalInput" id='ThemeWork' placeholder='Тема работы'></input>
          <input className="modalInput" id='MarkWork' placeholder='Оценка работы'></input>
          <a className="addNewWork">Добавить работу</a>
        </div>
      </div>
      <div className="fieldDateStartEnd">
        <input className="modalInput" id='startEducation' placeholder='Год начала обучения'></input>
        <input className="modalInput" id='endEducation' placeholder='Год окончания обучения'></input>
      </div>
      <div className='fieldProgressEducation'>
        <div className="row">
          <div className="nameRow">Прогресс обучения</div>
          <div className="progressRow">
            <div className="Square grey"></div>
            <div className="Square grey"></div>
            <div className="Square grey"></div>
            <div className="Square grey"></div>
          </div>
        </div>
      </div>
      <div className="fieldButton">
        <button className="but bAdd">
          <img src={addImg}></img>
          Добавить
        </button>
      </div>
    </form>
    )
}

export default Modal