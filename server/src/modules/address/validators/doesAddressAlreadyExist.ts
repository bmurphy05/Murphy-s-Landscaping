import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from "class-validator";
import { Address } from "../../../entity/Address";

@ValidatorConstraint({ async: true })
export class DoesAddressAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate({ 
      street, 
      city, 
      state, 
      zip 
    }: any ) {
    return Address.findOne({
      where: {
        street,
        city,
        state,
        zip
      }
    }).then(address => {
      if (address) return false;
      return true;
    });
  }
}

export function doesAddressAlreadyExist(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: DoesAddressAlreadyExistConstraint
    });
  };
}
