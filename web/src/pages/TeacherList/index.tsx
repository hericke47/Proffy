import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';
import Input from '../../components/Input';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="Container">
           <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da Semana" />
                    <Input type="time" name="time" label="Hora" />
               </form>
           </PageHeader>

           <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
           </main>
        </div>
    )
}