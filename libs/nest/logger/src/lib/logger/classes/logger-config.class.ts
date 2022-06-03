import {cyan, blue, white, yellow, green, red} from "chalk";
import {ILoggerConfig, ILoggerOptions} from "../interfaces";
import {setObjectValues} from "../utils";
import {LoggerTypeEnum} from "../enums";

export class LoggerConfig implements ILoggerConfig {
  debug = false;
  disableArguments = false;
  disable = false;
  disableLog = false;
  disableDebug = false;
  disableWarn = false;
  disableError = false;
  disableInfo = false;

  constructor(private readonly _loggerConfig: Partial<ILoggerConfig> = {}) {
    setObjectValues(this, _loggerConfig);
  }
}
