import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    OneToMany
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Address } from './Address';
import { Role } from './Role';


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

    @Field(() => Address, { nullable: true })
    @OneToOne(() => Address, address => address.user, {
        onDelete: 'CASCADE'
    })
    @Column('text', { nullable: true })
    address: Address;
    
    @Field(() => Role)
    @OneToOne(() => Role)
    @Column('text')
    role: string;

    @Field(() => Date)
    @Column('timestamp')
    creationTime!: string;
}
