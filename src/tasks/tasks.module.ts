import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { Task } from './shared/task.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule {}
