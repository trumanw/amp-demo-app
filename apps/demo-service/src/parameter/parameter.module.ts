import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParameterModuleBase } from "./base/parameter.module.base";
import { ParameterService } from "./parameter.service";
import { ParameterController } from "./parameter.controller";
import { ParameterResolver } from "./parameter.resolver";

@Module({
  imports: [ParameterModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParameterController],
  providers: [ParameterService, ParameterResolver],
  exports: [ParameterService],
})
export class ParameterModule {}
