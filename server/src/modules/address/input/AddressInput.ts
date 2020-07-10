import { InputType, Field } from "type-graphql";

@InputType()
export class AddressInput {
  @Field()
  user: string;

  @Field()
  street: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zip: number;
}
