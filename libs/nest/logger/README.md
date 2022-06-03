### @happ/nest-logger

> Beta. Don't use it in production (yet).

## Description
Simple in setup and flexible in usage logger with full path logs

![](https://github.com/viacheslavsaloid/happ/blob/main/image-1.png?raw=true)

## Installation
`yarn add @happ/nest-logger`

## Register
```typescript
import { LoggerModule } from "@happ/nest-logger";

@Module({
  imports: [
    LoggerModule,
    // Or
    LoggerModule.register({
      debug: false,
      disableArguments: false,
      disable: false,
      disableLog: false,
      disableDebug: false,
      disableWarn: false,
      disableError: false,
      disableInfo: false,
    })
  ]
})
export class AppModule {}
```

## Providers
Logs automatically available in each provider.

## Controllers
To enable logs for controller, you have to add `@Logger` decorator under the `@Controller` decorator.

```typescript
import { Logger } from "@happ/nest-logger";

@Controller('users')
@Logger()
export class UsersController {}
```

## Decorators

- `@Logger(config: Partial<ILoggerConfig>)` - for specific config
  

- ```typescript
  import {Logger} from "@happ/nest-logger";
  
  @Injectable()
  export class UsersService {
  
  @Logger({ debug: true })
  getMany() {}
  ```
  
  ![](https://github.com/viacheslavsaloid/happ/blob/main/image-2.png?raw=true)


- `@Debug` - shortcut for `@Logger({ debug: true })`


- `@Disable` - shortcut for `@Logger({ disable: true })`


- `@DisableArguments` - shortcut for `@Logger({ disableArguments: true })`
  ```typescript
  import {DisableArguments, Logger} from "@happ/nest-logger";

  @Injectable()
  export class UsersService {
  
  @DisableArguments
  getMany() {}
  ```

  ![](https://github.com/viacheslavsaloid/happ/blob/main/image-3.png?raw=true)

