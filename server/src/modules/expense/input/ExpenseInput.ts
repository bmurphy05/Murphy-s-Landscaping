import { InputType, Field } from "type-graphql";

@InputType()
export class ExpenseInput {
  @Field()
  jobId: string;

  @Field()
  cost: number;
  
  @Field()
  job: string;
  
  @Field()
  expensetype: string;
}