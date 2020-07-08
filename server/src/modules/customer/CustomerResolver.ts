import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CustomerInput } from "./input/CustomerInput";
import { Customer } from "src/entity/Customer";

@Resolver()
export class CustomerResolver {
  @Query(() => [Customer])
  async customers() {
    return Customer.find({
      relations: ["user"]
    });
  }

  @Query(() => Customer)
  async customer(@Arg("id") id: string) {
    return Customer.findOne({
      relations: ["user"],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createCustomer(@Arg("input")
  {
    user
  }: CustomerInput): Promise<Boolean> {
    await Customer.create({
      user
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteCustomer(@Arg("id") id: string): Promise<Boolean> {
    const customer = await Customer.findOne({
      where: {
        id
      }
    });

    if (!customer) {
      return false;
    }

    await Customer.delete({ id });

    return true;
  }
}
