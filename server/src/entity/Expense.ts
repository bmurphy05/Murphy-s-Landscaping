import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Job } from './Job';
import { ExpenseType } from './ExpenseType';

@Entity('expenses')
@ObjectType()
export class Expense extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    jobId!: string;

    @Field()
    @Column('float')
    cost!: number;

    @ManyToOne(() => Job, job => job.jobType, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'job' })
    @Field(() => Job)
    @Column('uuid')
    job!: string;

    @OneToOne(() => ExpenseType)
    @Field(() => ExpenseType)
    expensetype!: string;

}
