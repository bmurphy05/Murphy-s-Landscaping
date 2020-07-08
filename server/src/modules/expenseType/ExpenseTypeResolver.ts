import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { ExpenseType } from "../../entity/ExpenseType";
import { ExpenseTypeInput } from "./input/ExpenseTypeInput";

@Resolver()
export class ExpenseResolver {
  @Query(() => [ExpenseType])
  async expenseTypes() {
    return ExpenseType.find();
  }

  @Query(() => ExpenseType)
  async expenseType(@Arg("id") id: string) {
    return ExpenseType.findOne({
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createExpenseType(@Arg("input")
  {
    title,
    description
  }: ExpenseTypeInput): Promise<Boolean> {
    await ExpenseType.create({
      title,
      description
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteExpenseType(@Arg("id") id: string): Promise<Boolean> {
    const expenseType = await ExpenseType.findOne({
      where: {
        id
      }
    });

    if (!expenseType) {
      return false;
    }

    await ExpenseType.delete({ id });

    return true;
  }
}
