import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    ManyToOne
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { JobType } from './JobType';
import { User } from './User';

@Entity('jobs')
@ObjectType()
export class Job extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field(() => User)
    @ManyToOne(() => User, customer => customer.id)
    @Column('text')
    customer!: string;

    @Field(() => User, { nullable: true })
    @ManyToOne(() => User, employee => employee.id)
    @Column('text', { nullable: true })
    employee: string;

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

    @Field(() => JobType)
    @OneToOne(() => JobType)
    @Column('text')
    jobType!: string;
}
