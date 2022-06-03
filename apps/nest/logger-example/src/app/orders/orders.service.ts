import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {OrderEntity} from "./order.entity";
import {Logger} from "@happ/nest-logger";

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(OrderEntity) private readonly _ordersRepository: Repository<OrderEntity>) {}

  getMany() {
    return this._ordersRepository.find();
  }

  createOne(body: unknown) {
    return this._ordersRepository.save(body);
  }
}
