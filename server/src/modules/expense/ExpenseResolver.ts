import { Resolver, Query, Mutation, Arg, UseMiddleware } from 'type-graphql';
import { Expense } from '../../entity/Expense';
import { ExpenseInput } from './input/ExpenseInput';
import { isEmployee } from '../../middleware/isEmployee';
import { isAuth } from '../../middleware/isAuth';
import { logger } from '../../middleware/logger';
import { Result } from '../../shared/Result';
import { registerSuccess } from '../user/messages/messages';

@Resolver()
export class ExpenseResolver {
  @UseMiddleware(isAuth, isEmployee, logger)
  @Query(() => [Expense])
  async expenses() {
    return Expense.find({
      relations: ['job']
    });
  }

  @UseMiddleware(isAuth, isEmployee, logger)
  @Query(() => Expense)
  async expense(@Arg('id') id: string) {
    return Expense.findOne({
      relations: ['job'],
      where: {
        id
      }
    });
  }

  @UseMiddleware(isAuth, isEmployee, logger)
  @Mutation(() => Result)
  async createExpense(@Arg('input')
  {
    cost,
    job,
    expenseType
  }: ExpenseInput): Promise<Result> {

    await Expense.create({
      cost,
      job,
      expenseType
    }).save();

    return {
      success: [
        {
          path: 'create expense',
          message: `${expenseType} expense for Job ${job} created successfully`
        }
      ]
    }
  }

  @UseMiddleware(isAuth, isEmployee, logger)
  @Mutation(() => Result)
  async deleteExpense(@Arg('id') id: string): Promise<Result> {
    const expense = await Expense.findOne({
      where: {
        id
      }
    });

    if (!expense) {
      return {
        errors: [
          {
            path: 'delete expense',
            message: `Expense could not be deleted`
          }
        ]
      }
    }

    await Expense.delete({ id });

    return {
      success: [
        {
          path: 'delete expense',
          message: `Expense deleted successfully`
        }
      ]
    }
  }
}
