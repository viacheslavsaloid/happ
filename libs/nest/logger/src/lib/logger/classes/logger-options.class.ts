import {blue, cyan, green, red, white, yellow, whiteBright} from "chalk";
import {ILoggerOptions} from "../interfaces";
import {setObjectValues} from "../utils";
import {LoggerTypeEnum} from "../enums";

export class LoggerOptions implements ILoggerOptions {
  methodName = 'MethodName';
  message = 'MessageName';
  moduleNameColor = yellow;
  classNameColor = cyan;
  methodNameColor = blue;
  messageColor = white;
  type = LoggerTypeEnum.INFO;

  constructor(private readonly _loggerOptions: Partial<ILoggerOptions> = {}) {
    setObjectValues(this, _loggerOptions);

    this.messageColor = ({
      [LoggerTypeEnum.SUCCESS]: green,
      [LoggerTypeEnum.ERROR]: red,
      [LoggerTypeEnum.WARN]: yellow,
      [LoggerTypeEnum.INFO]: cyan,
      [LoggerTypeEnum.DEBUG]: whiteBright,
    })[this.type];

    if (this.type === LoggerTypeEnum.DEBUG) {
      this.moduleNameColor = whiteBright;
      this.methodNameColor = whiteBright;
      this.classNameColor = whiteBright;
    }
  }
}
