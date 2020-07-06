import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { JobType } from "../../entity/JobType";
import { JobTypeInput } from "./input/JobTypeInput";

@Resolver()
export class JobTypeResolver {
  @Query(() => [JobType])
  async jobTypees() {
    return JobType.find({
    });
  }

  @Query(() => JobType)
  async jobType(@Arg("id") id: string) {
    return JobType.findOne({
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createJobType(@Arg("input")
  {
    title,
    description
  }: JobTypeInput): Promise<Boolean> {
    await JobType.create({
      title,
      description
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteAobType(@Arg("id") id: string): Promise<Boolean> {
    const jobType = await JobType.findOne({
      where: {
        id
      }
    });

    if (!jobType) {
      return false;
    }

    await JobType.delete({ id });

    return true;
  }
}
