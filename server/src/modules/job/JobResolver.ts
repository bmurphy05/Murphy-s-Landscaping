import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Job } from '../../entity/Job';
import { JobInput } from './input/JobInput';

@Resolver()
export class JobResolver {
  @Query(() => [Job])
  async jobs() {
    return Job.find({
      relations: ['customer', 'employee', 'expenses']
    });
  }

  @Query(() => Job)
  async job(@Arg('id') id: string) {
    return Job.findOne({
      relations: ['customer', 'employee', 'expenses'],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createJob(@Arg('input')
  {
    customer,
    employee,
    cost,
    jobType
  }: JobInput): Promise<Boolean> {
    const dateRequested = new Date().toISOString();

    await Job.create({
        customer,
        employee,
        cost,
        jobType,
        dateRequested
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteJob(@Arg('id') id: string): Promise<Boolean> {
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
