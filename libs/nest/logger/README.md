### @happ/nest-logger

## Description
Simple in setup and flexible in usage logger with full path logs

![](../../../../../../../../var/folders/yw/gd_byxn54h1gk_bl0_g9vlhc0000gn/T/TemporaryItems/NSIRD_screencaptureui_8JqN0K/Screenshot 2022-06-04 at 00.26.27.png)

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

- `@Logger(config: Partial<ILoggerConfig>)` - for specific config class or method
  ```typescript
  import {Logger} from "@happ/nest-logger";
  
  @Injectable()
  export class UsersService {
  
  @Logger({ debug: true })
  getMany() {}
  ```
  ![](../../../../../../../../var/folders/yw/gd_byxn54h1gk_bl0_g9vlhc0000gn/T/TemporaryItems/NSIRD_screencaptureui_EQq9wm/Screenshot 2022-06-04 at 00.35.19.png)
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
  ![](../../../../../../../../var/folders/yw/gd_byxn54h1gk_bl0_g9vlhc0000gn/T/TemporaryItems/NSIRD_screencaptureui_Y4Cit9/Screenshot 2022-06-04 at 00.38.06.png)
