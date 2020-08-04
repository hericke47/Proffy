import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="Container">
           <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">Matéria</label>
                       <input type="text" id="subject"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week-day">Dia da semana</label>
                       <input type="text" id="week-day"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">Hora</label>
                       <input type="text" id="time"/>
                   </div>
               </form>
           </PageHeader>

           <main>
               <article className="teacher-item">
                   <header>
                       <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
                       <div>
                           <strong>Diego Fernandes</strong>
                           <span>Química</span>
                       </div>
                   </header>

                   <p>
                       Entusiasta das melhores tecnologias de química avançada
                       <br />
                       <br />
                       Apaixonado por explodir coisas em laboratório e por mudar a vida
                       das pessoas através de experiências. Mais de 200.000 pessoas já passaram por
                       uma de suas exposões.
                   </p>

                   <footer>
                       <p>
                           Preço/Hora
                           <strong>R$ 80,00</strong>
                       </p>

                       <button type="button"> 
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em Contato
                       </button>
                   </footer>
               </article>
           </main>
        </div>
    )
}