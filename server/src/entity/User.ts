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

    @Field(() => [Employee], { nullable: true })
    @OneToMany(() => Employee, Employee => Employee.userid, {
        onDelete: 'CASCADE'
    })
    employee: Employee[];

    @Field(() => [Customer], { nullable: true })
    @OneToMany(() => Customer, Customer => Customer.userid, {
        onDelete: 'CASCADE'
    })
    customer: Customer[];

    @Field(() => [Address], { nullable: true })
    @OneToOne(() => Address, Address => Address.userId, {
        onDelete: 'CASCADE'
    })
    address: Address[];
    
}
