import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Expense } from '../../entity/Expense';
import { ExpenseInput } from './input/ExpenseInput';

@Resolver()
export class ExpenseResolver {
  @Query(() => [Expense])
  async expenses() {
    return Expense.find({
      relations: ['job']
    });
  }

  @Query(() => Expense)
  async expense(@Arg('id') id: string) {
    return Expense.findOne({
      relations: ['job'],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createExpense(@Arg('input')
  {
    cost,
    job,
    expenseType
  }: ExpenseInput): Promise<Boolean> {
    await Expense.create({
      cost,
      job,
      expenseType
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteExpense(@Arg('id') id: string): Promise<Boolean> {
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
