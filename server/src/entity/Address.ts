import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from './User';

@Entity('addresses')
@ObjectType()
export class Address extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field(() => User)
    @OneToOne(() => User, user => user.id)
    @JoinColumn({ name: 'user' })
    @Column('text')
    user!: string;

    @Field()
    @Column('text')
    street!: string;

    @Field()
    @Column('text')
    city!: string;

    @Field()
    @Column('text')
    state!: string;

    @Field()
    @Column('int')
    zip!: number;
}
