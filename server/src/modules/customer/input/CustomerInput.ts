import { InputType, Field } from "type-graphql";

@InputType()
export class CustomerInput {
  @Field()
  user: string;
}