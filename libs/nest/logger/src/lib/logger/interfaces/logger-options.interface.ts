import { Chalk } from "chalk";
import {LoggerTypeEnum} from "../enums";
import {ILoggerConfig} from "./logger-config.interface";

export interface ILoggerOptions {
  methodName: string,
  message: string,
  moduleNameColor: Chalk,
  classNameColor: Chalk,
  methodNameColor: Chalk,
  messageColor: Chalk,
  type: LoggerTypeEnum;
}
