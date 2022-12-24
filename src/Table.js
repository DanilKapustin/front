import React, { Component } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Table = () =>  {
  function trBackground (newchtoto) {
    let block = document.getElementsByClassName('Field');
    for (let i = 0; i<block.length; i++){
      block[i].style.backgroundColor='white';
    }
    newchtoto.parentNode.style.backgroundColor = "lightblue";
    console.log(newchtoto.parentNode.children[0].innerHTML);
  }

    return (
      <table >
        <thead>
          <tr>
            <th className="Wfio">ФИО</th>
            <th className="WFaculty">Факультет, ступень обучения</th>
            <th className="WStudTicket">№ студ. билета</th>
            <th className="WKafedra">Кафедра</th>
            <th className="WTheme">Тема работы</th>
          </tr>
        </thead>
        <tbody>
          <tr className="emptyField">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="Field" onClick={(event)=>trBackground(event.target)}>
            <td>Абакумов Петр Степанович</td>
            <td>математический, бакалавриат</td>
            <td>№ 1022745</td>
            <td>дифференц. уравнений</td>
            <td>диплом “Решение экономического уравнения”</td>
          </tr>
          <tr className="Field" onClick={(event)=>trBackground(event.target)}>
            <td>Болоев Иван Дмитриевич</td>
            <td>математический, магистратура</td>
            <td>№ 1033457</td>
            <td>мат. моделирования</td>
            <td>диплом “Применение ИИ во время ЧП”</td>
          </tr>
          <tr className="Field" onClick={(event)=>trBackground(event.target)}>
            <td>Бритов Алексей Иванович</td>
            <td>психологии, бакалавриат</td>
            <td>№ 1047811</td>
            <td>соц. психологии</td>
            <td>курсовая “Эффект толпы”</td>
          </tr>
          <tr className="Field" onClick={(event)=>trBackground(event.target)}>
            <td>Вишневская Ирина Ивановна</td>
            <td>биологии, бакалавриат</td>
            <td>№ 1122845</td>
            <td>биологии</td>
            <td>курсовая “Дикая природа”</td>
          </tr>
          
        </tbody>
      </table>
    )
}

export default Table