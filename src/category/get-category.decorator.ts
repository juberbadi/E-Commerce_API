import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Category } from './category.entity';

export const GetCategory = createParamDecorator(
  (_data, ctx: ExecutionContext): Category => {
    const req = ctx.switchToHttp().getRequest();
    return req.category;
  }
);
