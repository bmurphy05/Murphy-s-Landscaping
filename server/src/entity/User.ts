import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    OneToMany
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Employee } from './Employee';
import { Customer } from './Customer';
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
    phone!: number;
    
    @Field()
    @Column('text')
    userType!: number;

    @Field(() => Address)
    @OneToOne(() => Address, address => address.user, {
        onDelete: 'CASCADE'
    })
    address: string;
    
}
