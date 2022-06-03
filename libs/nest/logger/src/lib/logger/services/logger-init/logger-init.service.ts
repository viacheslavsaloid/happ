import type { OnModuleInit } from "@nestjs/common";
import {Inject, Injectable, Optional} from "@nestjs/common";
import {LoggerService} from "../../classes/logger-service.class";
import {Logger} from "../../decorators";
import {LOGGER_CONFIG} from "../../injection-tokens";
import {ModulesContainer} from "@nestjs/core";
import {ILoggerConfig} from "../../interfaces";
import {LOGGER_SERVICE} from "../../constants";

@Injectable()
export class LoggerInitService implements OnModuleInit {
	constructor(
    @Optional() @Inject(LOGGER_CONFIG) private readonly _loggerConfig: Partial<ILoggerConfig> = {},
    private readonly _modulesContainer: ModulesContainer
  ) {}

  onModuleInit() {
    for (const module of this._modulesContainer.values()) {
      for (const provider of [...module.providers.values(), ...module.controllers.values()]) {
        try {
          Object.defineProperty(provider.metatype.prototype, LOGGER_SERVICE, {
            value: new LoggerService(module.metatype.name, provider.metatype.name, this._loggerConfig),
            configurable: true,
            writable: true,
            enumerable: true
          });

          Logger(this._loggerConfig)(provider.metatype);
        } catch {
          // console.warn(`Cannot setup logger for ${provider.name}`)
        }
      }
    }
  }
}
