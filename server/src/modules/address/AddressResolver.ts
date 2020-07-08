import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Address } from "../../entity/Address";
import { AddressInput } from "./input/AddressInput";

@Resolver()
export class AddressResolver {
  @Query(() => [Address])
  async addresses() {
    return Address.find({
      relations: ["user", "customer"]
    });
  }

  @Query(() => Address)
  async address(@Arg("id") id: string) {
    return Address.findOne({
      relations: ["user", "customer"],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createAddress(@Arg("input")
  {
    user,
    street,
    city,
    state,
    zip
  }: AddressInput): Promise<Boolean> {
    await Address.create({
      user,
      street,
      city,
      state,
      zip
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteAddress(@Arg("id") id: string): Promise<Boolean> {
    const address = await Address.findOne({
      where: {
        id
      }
    });

    if (!address) {
      return false;
    }

    await Address.delete({ id });

    return true;
  }
}
