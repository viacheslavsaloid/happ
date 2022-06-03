import {SetMetadata} from "@nestjs/common";
import {Logger} from "./logger.decorator";

export const Debug = Logger({ debug: true });

