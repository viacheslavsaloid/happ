import {LOGGER, LOGGER_SERVICE} from "../constants";
import {ILoggerConfig} from "../interfaces";

export function MethodLogger(loggerConfig: Partial<ILoggerConfig> = {}) {
  return (target, propertyKey, propertyDescriptor) => {

    if (Reflect.getMetadataKeys(propertyDescriptor.value).includes(LOGGER)) {
      return;
    }

    const oldMethod = propertyDescriptor.value;

    propertyDescriptor.value = function (...arguments_) {
      const loggerService = this[LOGGER_SERVICE];

      loggerService.showInput(propertyKey, arguments_, loggerConfig);

      const response = oldMethod.apply(this, arguments_);

      if (response?.then) {
        return response.then((data) => {
          loggerService.showOutput(propertyKey, data, loggerConfig);

          return data;
        });
      }

      loggerService.showOutput(propertyKey, response, loggerConfig);

      return response;
    }
  }
}
