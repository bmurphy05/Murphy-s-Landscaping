import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@Entity('roles')
@ObjectType()
export class Role extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    title!: string;
}
