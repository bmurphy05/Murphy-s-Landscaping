import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@Entity('jobtypes')
@ObjectType()
export class JobType extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    title!: string;

    @Field()
    @Column('text')
    description!: string;

}
