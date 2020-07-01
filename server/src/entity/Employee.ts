import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToOne,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Role } from './Role';
import { User } from './User';

@Entity('employees')
@ObjectType()
export class Employee extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @Column('text')
    userid!: string;
    
    @Field()
    @Column('text')
    role!: string;

    @ManyToOne(() => User, user => user.userType, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'user' })
    @Field(() => User)
    @Column('uuid')
    user!: string;

    @OneToOne(() => Role, role => role.title)
    @Field(() => [Role], { nullable: true })
    roles: Role[];

}