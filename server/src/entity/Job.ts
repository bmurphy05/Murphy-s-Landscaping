import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    OneToMany
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { jobType } from './jobType';
import { Expense } from './Expense';

@Entity('jobs')
@ObjectType()
export class Job extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    customerid!: string;

    @Field()
    @Column('text')
    employeeid!: string;

    @Field()
    @Column('text')
    jobType: string;

    @Field()
    @Column('boolean', { default: false })
    isComplete!: boolean;
    
    @Field()
    @Column('boolean', { default: false })
    isPaid!: boolean;
    
    @Field(() => Date)
    @Column('timestamp')
    dateRequested!: string;

    @Field(() => Date)
    @Column('timestamp',  { nullable: true })
    dateCompleted!: string;
    
    @Field()
    @Column('float')
    cost!: number;
    
    @Field(() => Date)
    @Column('timestamp')
    datePaid!: string;

    @Field(() => [Expense], { nullable: true })
    @OneToMany(() => Expense, expense => expense.jobId, {
        eager: true,
        onDelete: 'CASCADE'
    })
    expenses: Expense[];

    @OneToOne(() => jobType, jobType => jobType.title)
    @Field(() => [jobType], { nullable: true })
    jobtypes: jobType[];


}
