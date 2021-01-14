import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ){}

    async getAll(): Promise<Task[]> {
        return await this.tasksRepository.find();
    }

    async getById(id: string): Promise<Task>{
        return await this.tasksRepository.findOneOrFail(id);
    }

    async create(task: Task){
        return await this.tasksRepository.save(task);
    }

    async update(id: string, task: Task){
        if(this.getById(id))
            await this.tasksRepository.update(id, task);
        return this.getById(id);
    }

    async delete(id: string): Promise<void>{
        if(this.getById(id))
            await this.tasksRepository.delete(id);
    }
}
