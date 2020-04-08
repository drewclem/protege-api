import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { limit, offset } = req.query;

    let orderDirection = req.query.direction;
    if (orderDirection !== 'ASC') {
      orderDirection = 'DESC';
    }

    const orderBy = 'id';

    res.pagination = {
      limit: parseInt(limit, 10) || 20,
      offset: parseInt(offset, 10) || 0,
    };

    req.pagination = {
      ...res.pagination,
      order: [
        [orderBy, orderDirection],
      ],
    };
 
    next();
  }
}
