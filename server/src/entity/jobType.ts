import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Job } from './Job';

@Entity('jobtypes')
@ObjectType()
export class jobType extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    title!: string;

    @Field()
    @Column('text')
    description!: string;

    @OneToOne(() => Job, job => job.jobType)
    @Field(() => [Job], { nullable: true })
    jobs: Job[];


}
