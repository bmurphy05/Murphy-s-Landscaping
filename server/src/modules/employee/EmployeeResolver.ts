import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Employee } from "../../entity/Employee";
import { EmployeeInput } from "./input/EmployeeInput";

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  async employeees() {
    return Employee.find({
      relations: ["user"]
    });
  }

  @Query(() => Employee)
  async employee(@Arg("id") id: string) {
    return Employee.findOne({
      relations: ["user"],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createEmployee(@Arg("input")
  {
    user,
    role
  }: EmployeeInput): Promise<Boolean> {
    await Employee.create({
      user,
      role
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg("id") id: string): Promise<Boolean> {
    const employee = await Employee.findOne({
      where: {
        id
      }
    });

    if (!employee) {
      return false;
    }

    await Employee.delete({ id });

    return true;
  }
}
