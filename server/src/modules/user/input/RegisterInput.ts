import { InputType, Field } from 'type-graphql';
import { MinLength, IsEmail } from 'class-validator';
import { IsEmailAlreadyExist } from '../validators/isEmailAlreadyExist';
import { duplicateEmail, passwordNotLongEnough } from '../messages/messages';
@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: duplicateEmail })
  email: string;

  @Field()
  @MinLength(8, {
    message: passwordNotLongEnough
  })
  password: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phone: number;

  @Field()
  role: string;
}
