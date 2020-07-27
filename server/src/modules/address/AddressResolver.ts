import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Address } from "../../entity/Address";
import { AddressInput } from "./input/AddressInput";
import { Result } from "../../shared/Result";

@Resolver()
export class AddressResolver {
  @Query(() => [Address])
  async addresses() {
    return Address.find({
      relations: [
        'user'
      ]
    });
  }

  @Query(() => Address)
  async address(@Arg("id") id: string) {
    return Address.findOne({
      relations: [
        'user'
      ],
      where: {
        id
      }
    });
  }

  @Mutation(() => Result)
  async createAddress(@Arg("input")
  {
    user,
    street,
    city,
    state,
    zip
  }: AddressInput): Promise<Result> {
    await Address.create({
      user,
      street,
      city,
      state,
      zip
    }).save();

    
    return {
      success: [
        {
          path: 'create address',
          message: `Address added for User ${user}`
        }
      ]
    }
  }

  @Mutation(() => Result)
  async deleteAddress(@Arg("id") id: string): Promise<Result> {
    const address = await Address.findOne({
      where: {
        id
      }
    });

    if (!address) {
      return {
        errors: [
          {
            path: 'address',
            message: 'Delete failed'
          }
        ]
      }
    }

    await Address.delete({ id });

    
    return {
      success: [
        {
          path: 'delete address',
          message: `Address for deleted`
        }
      ]
    }
  }
}
