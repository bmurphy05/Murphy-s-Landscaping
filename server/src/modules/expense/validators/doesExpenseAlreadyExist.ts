import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
  } from "class-validator";
  import { Expense } from "../../../entity/Expense";
  
  @ValidatorConstraint({ async: true })
  export class DoesExpenseAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    async validate({ 
        jobId,
        cost,
        job,
        expensetype
      }: any ) {
      return Expense.findOne({
        where: {
          jobId,
          cost,
          job,
          expensetype
        }
      }).then(expense => {
        if (expense) return false;
        return true;
      });
    }
  }
  
  export function doesExpenseAlreadyExist(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: DoesExpenseAlreadyExistConstraint
      });
    };
  }
  