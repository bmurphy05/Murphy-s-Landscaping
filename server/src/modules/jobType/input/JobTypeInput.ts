import { InputType, Field } from "type-graphql";

@InputType()
export class JobTypeInput {
  @Field()
  user: string;

  @Field()
  title: string;

  @Field()
  description: string;
  
}