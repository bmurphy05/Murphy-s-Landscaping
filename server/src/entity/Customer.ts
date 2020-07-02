import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from './User';

@Entity('customers')
@ObjectType()
export class Customer extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @ManyToOne(() => User, user => user.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'user' })
    @Field(() => User)
    @Column('uuid')
    user!: string;

}
