import { MethodLogger } from "./method-logger.decorator";
import { ClassLogger } from "./class-logger.decorator";
import { ILoggerConfig } from "../interfaces";
import {applyDecorators, SetMetadata} from "@nestjs/common";
import {LOGGER} from "../constants";

export function Logger(loggerConfig: Partial<ILoggerConfig> = {}) {
  return applyDecorators(
    (target, propertyKey = undefined, propertyDescriptor = undefined) => {
      if (propertyKey && propertyDescriptor) {
        return MethodLogger(loggerConfig)(target, propertyKey, propertyDescriptor)
      } else {
        return ClassLogger(loggerConfig)(target)
      }
    },
    SetMetadata(LOGGER, loggerConfig),
  )
}
