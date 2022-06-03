import {DynamicModule, Module} from "@nestjs/common";
import {LOGGER_SERVICES} from "./services";
import {LOGGER_CONFIG} from "./injection-tokens";
import {ILoggerConfig} from "./interfaces";

@Module({
  providers: [...LOGGER_SERVICES],
  exports: [...LOGGER_SERVICES],
})
export class LoggerModule {
  static register(loggerConfig: Partial<ILoggerConfig> = {}): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        ...LOGGER_SERVICES,
        {
          provide: LOGGER_CONFIG,
          useValue: loggerConfig,
        },
      ],
      exports: [...LOGGER_SERVICES],
    }
  }
}
