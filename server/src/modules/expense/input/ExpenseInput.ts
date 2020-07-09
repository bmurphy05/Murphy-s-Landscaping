import { InputType, Field } from "type-graphql";

@InputType()
export class ExpenseInput {
  @Field()
  cost: number;
  
  @Field()
  job: string;
  
  @Field()
  expenseType: string;
}