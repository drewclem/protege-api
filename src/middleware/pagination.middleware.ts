import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { limit = 20, offset = 0 } = req.query;

    let orderDirection = req.query.direction;
    if (orderDirection !== 'ASC') {
      orderDirection = 'DESC';
    }

    const orderBy = 'id';

    req.pagination = {
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: [
        [orderBy, orderDirection],
      ],
    };
    
    next();
  }
}
