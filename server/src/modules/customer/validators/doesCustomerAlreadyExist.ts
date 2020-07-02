import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
  } from "class-validator";
  import { Customer } from "../../../entity/Customer";
  
  @ValidatorConstraint({ async: true })
  export class DoesCustomerAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    async validate({ 
        user
      }: any ) {
      return Customer.findOne({
        where: {
          user
        }
      }).then(customer => {
        if (customer) return false;
        return true;
      });
    }
  }
  
  export function doesCustomerAlreadyExist(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: DoesCustomerAlreadyExistConstraint
      });
    };
  }
  