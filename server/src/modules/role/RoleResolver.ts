import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Role } from '../../entity/Role';

/* Notes:
 * User must have a role
 * Role can be manager, admin, landscaper, or customer
 * */

@Resolver()
export class RoleResolver {
  @Query(() => [Role])
  async roles() {
    return Role.find({
      relations: ['user']
    });
  }

  @Query(() => Role)
  async role(@Arg('id') id: string) {
    return Role.findOne({
      relations: ['user'],
      where: {
        id
      }
    });
  }

  @Mutation(() => Boolean)
  async createrole(@Arg('title') title: string): Promise<Boolean> {
    await Role.create({
      title
    }).save();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteRole(@Arg('id') id: string): Promise<Boolean> {
    const role = await Role.findOne({
      where: {
        id
      }
    });

    if (!role) {
      return false;
    }

    await Role.delete({ id });

    return true;
  }
}