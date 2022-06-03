import {Body, Controller, Get, Post} from '@nestjs/common';

import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly _ordersService: OrdersService) {}

  @Get()
  getMany() {
    return this._ordersService.getMany();
  }

  @Post()
  createOne(@Body() body: unknown) {
    return this._ordersService.createOne(body);
  }
}
