import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from './User';

@Entity('employees')
@ObjectType()
export class Employee extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field(() => User)
    @ManyToOne(() => User, user => user.id)
    @Column('text')
    user!: string;
    
    @Field()
    @Column('text')
    role!: string;
}