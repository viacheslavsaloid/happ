import {SetMetadata} from "@nestjs/common";
import {Logger} from "./logger.decorator";

export const Disable = Logger({ disable: true });
