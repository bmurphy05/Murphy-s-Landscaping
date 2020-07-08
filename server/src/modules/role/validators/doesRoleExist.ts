import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Role } from '../../../entity/Role';

@ValidatorConstraint({ async: true })
export class DoesRoleExistConstraint implements ValidatorConstraintInterface {

    async validate(title: string) {
        return Role.findOne({
            where: {
                title
            }
        }).then(role => {
            if (role) return false;
            return true;
        });
    }

}

export function doesRoleExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: DoesRoleExistConstraint
        });
    };
}