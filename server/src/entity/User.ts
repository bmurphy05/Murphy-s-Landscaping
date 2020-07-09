import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Address } from './Address';


@Entity('users')
@ObjectType()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('varchar', { length: 255 })
    email!: string;

    @Field()
    @Column('text')
    password!: string;

    @Field()
    @Column('text')
    firstName!: string;

    @Field()
    @Column('text')
    lastName!: string;

    @Field()
    @Column('text')
    phone!: string;

    @Field(() => [Address], { nullable: true })
    @OneToMany(() => Address, address => address.user, {
        eager: true
    })
    @Column('text', { nullable: true })
    address: Address;

    @Field(() => String)
    @Column('text')
    role: string;

    @Field(() => Date)
    @Column('timestamp')
    creationTime!: string;
}
