import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './shared/task.entity';
import { TaskService } from './shared/task.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TaskService){}

    @Get()
    async getAll(): Promise<Task[]>{
        return this.taskService.getAll();
    }

    //Quando eu der um get numa URL que tem um parâmetro de id eu pego esse número e armazeno na  variável id do tipo number
    //e chamo a função corresponde nos services para fazer isso
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Task> {
        return this.taskService.getById(id);
    }

    @Post()
    async create(@Body() task: Task): Promise<Task>{
        return this.taskService.create(task)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: Task): Promise<Task>{
        return this.taskService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.taskService.delete(id);
    }
}
