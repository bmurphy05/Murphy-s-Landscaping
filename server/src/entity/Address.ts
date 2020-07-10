import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    JoinColumn,
    ManyToOne,
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
    @ManyToOne(() => User)
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
