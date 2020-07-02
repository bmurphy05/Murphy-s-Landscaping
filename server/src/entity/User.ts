import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne
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
    @Column('int')
    phone!: number;
    
    @Field()
    @Column('text')
    userType!: number;

    @Field(() => Address, { nullable: true })
    @OneToOne(() => Address, address => address.user, {
        onDelete: 'CASCADE'
    })
    @Column('text', { nullable: true })
    address: Address;
    
    @Field(() => Date)
    @Column('timestamp')
    creationTime!: string;
}
