import { InputType, Field } from "type-graphql";

@InputType()
export class EmployeeInput {
  @Field()
  user: string;

  @Field()
  role: string;
  
}