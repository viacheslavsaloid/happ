import {Injectable} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from './user.entity';
import {DisableArguments, Logger} from "@happ/nest-logger";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly _usersRepository: Repository<UserEntity>) {}

  @DisableArguments
  getMany() {
    return this._usersRepository.find();
  }

  createOne(body: unknown) {
    return this._usersRepository.save(body);
  }
}
