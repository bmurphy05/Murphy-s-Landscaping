import { MiddlewareFn } from "type-graphql";
import { verify } from 'jsonwebtoken';
import { MyContext } from "../shared/MyContext";
import { User } from "../entity/User";

export const isEmployee: MiddlewareFn<MyContext> = async ({ context }, next) => {
    const authorization = context.req.headers['authorization'];

    if (!authorization) {
      throw new Error('not authenticated');
    }
  
    try {
      const token = authorization!.split(' ')[1];
      const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      context.payload = payload as any;
    } catch(err) {
      console.log(err);
    }

    const user = await User.findOne({
        where: {
            id: context.payload!.userId
        }
    });

    if (!user) {
        throw new Error("Not an Employee!");
    }
    
    if (user!.role !== 'Customer') {
        throw new Error("Not an Employee!");
    }

    return next();
};