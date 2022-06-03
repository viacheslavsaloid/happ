import type { LoggerService as NestLoggerService } from "@nestjs/common";
import {Injectable, Optional} from "@nestjs/common";
import {ILoggerConfig, ILoggerOptions} from "../interfaces";
import {LoggerTypeEnum} from "../enums";
import {LoggerConfig, LoggerOptions} from "./index";

export class LoggerService implements NestLoggerService {
	constructor(
    @Optional() private readonly _moduleName: string = 'NestModule',
    @Optional() private readonly _className: string = 'NestClass',
    @Optional() private readonly _loggerConfig: Partial<ILoggerConfig> = {},
  ) {}

  log(message: string, detailedMessage: string, methodNames: string)
  log(message: string, methodName: string)
  log(...args) {
    const [message, methodName1, methodName2] = args;

    this._log({ message, methodName: methodName2 || methodName1, type: LoggerTypeEnum.SUCCESS })
  }

  error(message: string, detailedMessage: string, methodNames: string)
  error(message: string, methodName: string)
  error(...args) {
    const [message, methodName1, methodName2] = args;

    this._log({ message, methodName: methodName2 || methodName1, type: LoggerTypeEnum.ERROR })
  }

  warn(message: string, detailedMessage: string, methodNames: string)
  warn(message: string, methodName: string)
  warn(...args) {
    const [message, methodName1, methodName2] = args;

    this._log({ message, methodName: methodName2 || methodName1, type: LoggerTypeEnum.WARN })
  }

  debug(message: string, detailedMessage: string, methodNames: string)
  debug(message: string, methodName: string)
  debug(...args) {
    const [message, methodName1, methodName2] = args;

    this._log({ message, methodName: methodName2 || methodName1, type: LoggerTypeEnum.DEBUG })
  }

  info(message: string, detailedMessage: string, methodNames: string)
  info(message: string, methodName: string)
  info(...args) {
    const [message, methodName1, methodName2] = args;

    this._log({ message, methodName: methodName2 || methodName1, type: LoggerTypeEnum.INFO })
  }

  showInput(propertyKey: string | symbol, arguments_: unknown[], loggerConfig: Partial<ILoggerConfig> = {}) {
    const { disableArguments } = new LoggerConfig({ ...this._loggerConfig, ...loggerConfig });

    this._log({ message: `Input ${disableArguments ? "" : this.getArguments(arguments_)}`, methodName: propertyKey.toString(), type: LoggerTypeEnum.SUCCESS }, loggerConfig)
  }

  showOutput(propertyKey: string, arguments_: unknown[], loggerConfig: Partial<ILoggerConfig> = {}) {
    const { disableArguments } = new LoggerConfig({ ...this._loggerConfig, ...loggerConfig });

    this._log({ message: `Output ${disableArguments ? "" : this.getArguments(arguments_)}`, methodName: propertyKey.toString(), type: LoggerTypeEnum.SUCCESS }, loggerConfig)
  }

  private _log(loggerOptions: Partial<ILoggerOptions>, loggerConfig: Partial<ILoggerConfig> = {}) {
    const { disable, debug } = new LoggerConfig({ ...this._loggerConfig, ...loggerConfig });

    if (disable) {
      return;
    }

    const { methodName, message, moduleNameColor, classNameColor, methodNameColor, messageColor } = new LoggerOptions({
      ...loggerOptions,
      ...(debug ? { type: LoggerTypeEnum.DEBUG } : {})
    });

    console.log(`${moduleNameColor(this.getDecoratedText(this._moduleName))} -> ${classNameColor(this.getDecoratedText(this._className))} -> ${methodNameColor(this.getDecoratedText(methodName))} : ${messageColor(message)}`);
  }

  private getArguments(arguments_): string {
    if (!arguments_ || arguments_.length === 0) {
      return "";
    }

    try {
      return JSON.stringify(arguments_);
    } catch {
      return "";
    }
  }

  private getDecoratedText(text: string = "") {
    const symbols = [text];

    symbols.unshift("[ ");
    symbols.push(" ]");

    return symbols.join("");
  }
}
