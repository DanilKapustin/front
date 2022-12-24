import React, { Component } from 'react'
import miniImg from './img/Vector.svg';
import searchImg from './img/info.svg';
import updateImg from './img/pen.svg';
import removeImg from './img/garbage.svg';

const CardStudent = () => {
    return (
      <table className="CardStudent">
        <thead className="THCardStudent">
          <tr className="TRCardStudent">
            <th className="HCardStudent">
              <div>Карточка студента</div>
              <div><img className="MiniPhoto" src={miniImg}></img></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="TRCardStudent hidden">
            <td className="InfoCardStudent">
              <img src={searchImg}></img>
              <div>Выберите студента для получения более подробной информации о нем</div>
            </td>
          </tr>


          <tr className="TRCardStudent ">
            <td className="MainCardStudent">
              <div className="row">
                <div className="nameRow">Фамилия</div>
                <div className="valueRow">Абакумов</div>
              </div>
              <div className="row">
                <div className="nameRow">Имя</div>
                <div className="valueRow">Петр</div>
              </div>
              <div className="row">
                <div className="nameRow">Отчество</div>
                <div className="valueRow">Степанович</div>
              </div>
              <div className="row">
                <div className="nameRow">Дата рождения</div>
                <div className="valueRow">14.08.98</div>
              </div>
              <div className="row">
                <div className="nameRow">№ студ. билета</div>
                <div className="valueRow">1022745</div>
              </div>
              <div className="row">
                <div className="nameRow">Факультет</div>
                <div className="valueRow">математический</div>
              </div>
              <div className="row">
                <div className="nameRow">Ступень обучения</div>
                <div className="valueRow">бакалавриат</div>
              </div>
              <div className="row">
                <div className="nameRow">Кафедра</div>
                <div className="valueRow">дифференциальных уравнений</div>
              </div>
              <div className="row">
                <div className="nameRow ai-start" >Работы</div>
                <div>
                  <div className="valueRow">
                    <div className="nameDiplom">диплом “Применение ИИ во время ЧП”</div>
                    <div className="mark">оценка:5</div>
                  </div>
                  <div className="valueRow">
                    <div className="nameDiplom">курсовая “Применение ИИ”</div>
                    <div className="mark">оценка:5</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="nameRow">Годы обучения</div>
                <div className="valueRow">2019 - 2023</div>
              </div>
              <div className="row">
                <div className="nameRow">Прогресс обучения</div>
                <div className="progressRow">
                  <div className="Square red"></div>
                  <div className="Square green"></div>
                  <div className="Square green"></div>
                  <div className="Square green"></div>
                </div>
              </div>
              <div className="rowBut">
                <button className="but bUpdate">
                  <img src={updateImg}></img>
                  Редактировать
                </button>
                <button className="but bRemove">
                  <img src={removeImg}></img>
                  Удалить
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    )
}

export default CardStudent