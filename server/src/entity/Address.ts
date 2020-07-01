import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from './User';

@Entity('addresses')
@ObjectType()
export class Address extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    userId!: string;

    @Field()
    @Column('text')
    address!: string;

    @Field()
    @Column('text')
    city!: string;

    @Field()
    @Column('text')
    state!: string;

    @OneToOne(() => User, user => user.userType)
    @Field(() => [User], { nullable: true })
    users: User[];

}
