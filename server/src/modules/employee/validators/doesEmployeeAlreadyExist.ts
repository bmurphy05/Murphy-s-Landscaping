import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
  } from "class-validator";
  import { Employee } from "../../../entity/Employee";
  
  @ValidatorConstraint({ async: true })
  export class DoesEmployeeAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    async validate({ 
        user,
        role
      }: any ) {
      return Employee.findOne({
        where: {
          user,
          role
        }
      }).then(employee => {
        if (employee) return false;
        return true;
      });
    }
  }
  
  export function doesEmployeeAlreadyExist(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: DoesEmployeeAlreadyExistConstraint
      });
    };
  }
  