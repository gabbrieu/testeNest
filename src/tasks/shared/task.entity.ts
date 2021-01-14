import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//Transformando Task em tabela com @Entity
@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({ default: false })
    completed: boolean;
}