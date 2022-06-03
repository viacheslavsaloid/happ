import { MethodLogger } from "./method-logger.decorator";
import { cloneDeep } from 'lodash';
import { copyMetadata } from "../utils";
import {ILoggerConfig} from "../interfaces";
import {LOGGER_SERVICE} from "../constants";

export function ClassLogger(loggerConfig: Partial<ILoggerConfig> = {}) {
  return (target) => {
    for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(target.prototype))) {
      if ([LOGGER_SERVICE, 'constructor'].includes(key)) {
        continue;
      }

      const oldDescriptor = cloneDeep(descriptor);

      MethodLogger(loggerConfig)(target, key, descriptor);

      copyMetadata(oldDescriptor.value, descriptor.value);

      Object.defineProperty(target.prototype, key, descriptor);
    }
  }
}
