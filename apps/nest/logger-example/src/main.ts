import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { LoggerService } from "@happ/nest-logger";

const logger = new LoggerService();

const port = process.env.PORT || 3333;
const globalPrefix = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger });
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  await app.listen(port);
}

bootstrap().then(() => {
  logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`, 'Bootstrap');
});
