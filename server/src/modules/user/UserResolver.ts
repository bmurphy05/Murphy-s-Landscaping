import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { RegisterInput } from "./input/RegisterInput";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return User.find({
      relations: [
        'address'
      ]
    });
  }

  @Query(() => User)
  async user(@Arg("id") id: string) {
    return User.findOne({
      relations: [
        'address'
      ],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async register(@Arg("input")
  {
    email,
    password,
    firstName,
    lastName,
    phone,
    role
  }: RegisterInput): Promise<Boolean> {
    const creationTime = new Date().toISOString();

    await User.create({
      email,
      password,
      firstName,
      lastName,
      phone,
      role,
      creationTime
    }).save();

    // await sendEmail(email, await createConfirmationUrl(user.id), 'Confirm');

    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string): Promise<Boolean> {
    const user = await User.findOne({
      where: {
        id
      }
    });

    if (!user) {
      return false;
    }

    await User.delete({ id });

    return true;
  }
}
