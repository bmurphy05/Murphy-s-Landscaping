import { InputType, Field } from "type-graphql";

@InputType()
export class ExpenseTypeInput {
  @Field()
  title: string;

  @Field()
  description: string;
  
}