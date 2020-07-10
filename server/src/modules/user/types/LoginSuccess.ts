import { ObjectType, Field } from "type-graphql";
import { User } from "../../../entity/User";

@ObjectType()
export class LoginSuccess {
    @Field(() => User, { nullable: true })
    user?: User;

    @Field()
    accessToken: string;

    @Field()
    expiresIn: number;
}
