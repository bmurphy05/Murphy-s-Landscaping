import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
  } from "class-validator";
  import { JobType } from "../../../entity/JobType";
  
  @ValidatorConstraint({ async: true })
  export class DoesJobTypeAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    async validate({ 
        user
      }: any ) {
      return JobType.findOne({
        where: {
          user
        }
      }).then(jobType => {
        if (jobType) return false;
        return true;
      });
    }
  }
  
  export function doesJobTypeAlreadyExist(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: DoesJobTypeAlreadyExistConstraint
      });
    };
  }
  