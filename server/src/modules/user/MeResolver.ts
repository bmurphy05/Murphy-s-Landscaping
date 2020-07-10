import { Resolver, Query, Ctx } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { User } from '../../entity/User';
import { MyContext } from '../../shared/MyContext';


@Resolver()
export class MeResolver {
    @Query(() => User, { nullable: true })
    async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
        const authorization = ctx.req.headers['authorization'];

        if (!authorization) {
            return undefined;
        }

        try {
            const token = authorization.split(" ")[1];
            const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
            return User.findOne({
                relations: [
                    'address'
                ],
                where: {
                    id: payload.userId
                }
            });
        } catch (err) {
            return undefined;
        }
    }
}