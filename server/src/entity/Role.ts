import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Employee } from './Employee';

@Entity('roles')
@ObjectType()
export class Role extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    title!: string;

    @OneToOne(() => Employee, employee => employee.role)
    @Field(() => [Employee], { nullable: true })
    employees: Employee[];

}
