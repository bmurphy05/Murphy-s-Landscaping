import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Job } from "../../entity/Job";
import { JobInput } from "./input/JobInput";

@Resolver()
export class JobResolver {
  @Query(() => [Job])
  async jobs() {
    return Job.find({
      relations: ["user", "user", "jobtype"]
    });
  }

  @Query(() => Job)
  async job(@Arg("id") id: string) {
    return Job.findOne({
      relations: ["user", "user", "jobtype"],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createJob(@Arg("input")
  {
    customer,
    employee,
    cost,
    jobType
  }: JobInput): Promise<Boolean> {
    await Job.create({
        customer,
        employee,
        cost,
        jobType
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteJob(@Arg("id") id: string): Promise<Boolean> {
    const job = await Job.findOne({
      where: {
        id
      }
    });

    if (!job) {
      return false;
    }

    await Job.delete({ id });

    return true;
  }
}
