import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
  } from "class-validator";
  import { ExpenseType } from "../../../entity/ExpenseType";
  
  @ValidatorConstraint({ async: true })
  export class DoesExpenseTypeAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    async validate({ 
        user
      }: any ) {
      return ExpenseType.findOne({
        where: {
          user
        }
      }).then(expenseType => {
        if (expenseType) return false;
        return true;
      });
    }
  }
  
  export function doesExpenseTypeAlreadyExist(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: DoesExpenseTypeAlreadyExistConstraint
      });
    };
  }
  