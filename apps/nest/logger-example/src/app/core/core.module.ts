import { Module } from '@nestjs/common';
import { OrdersModule } from '../orders/orders.module';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../../environments/environment';
import {UserEntity} from "../users/user.entity";
import {OrderEntity} from "../orders/order.entity";
import {LoggerModule} from "@happ/nest-logger";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: environment.databaseHost,
      port: environment.databasePort,
      username: environment.databaseUsername,
      password: environment.databasePassword,
      database: environment.databaseName,
      entities: [UserEntity, OrderEntity],
      synchronize: true,
    }),
    UsersModule,
    OrdersModule,
    LoggerModule.register()
  ]
})
export class CoreModule {}
