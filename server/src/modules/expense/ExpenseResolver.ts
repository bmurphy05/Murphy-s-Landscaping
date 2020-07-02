import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Expense } from "../../entity/Expense";
import { ExpenseInput } from "./input/ExpenseInput";

@Resolver()
export class ExpenseResolver {
  @Query(() => [Expense])
  async expensees() {
    return Expense.find({
      relations: ["user"]
    });
  }

  @Query(() => Expense)
  async axpense(@Arg("id") id: string) {
    return Expense.findOne({
      relations: ["user"],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createExpense(@Arg("input")
  {
    jobId,
    cost,
    job,
    expensetype
  }: ExpenseInput): Promise<Boolean> {
    await Expense.create({
      jobId,
      cost,
      job,
      expensetype
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteExpense(@Arg("id") id: string): Promise<Boolean> {
    const expense = await Expense.findOne({
      where: {
        id
      }
    });

    if (!expense) {
      return false;
    }

    await Expense.delete({ id });

    return true;
  }
}
