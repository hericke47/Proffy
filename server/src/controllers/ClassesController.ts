import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.subject || !filters.week_day || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        const timeInMunutes = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function() {
                // verificando se existe um horarios disponivel
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')// where raw é o where inteiro
                    .whereRaw('`class_schedule`. `week_day` = ??', [Number(week_day)])// que seja igual o dia da semana que quero buscar
                    .whereRaw('`class_schedule`. `from` <= ??', [timeInMunutes])
                    .whereRaw('`class_schedule`. `to` > ??', [timeInMunutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']); //seleciona todos os dados da tabela calsses e todos os dados da tabela users

        return response.json(classes);
    }

    async create (request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule,
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
        
            const user_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
        
            const class_id = insertedClassesIds[0];
        
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            })
        
            await trx('class_schedule').insert(classSchedule);
        
            await trx.commit();
        
            return response.status(201).send();
        } catch (error) {
            await trx.rollback(); // se ocorrer um erro ele volta as alterações do banco
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}