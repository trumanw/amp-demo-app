import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParameterSpaceModuleBase } from "./base/parameterSpace.module.base";
import { ParameterSpaceService } from "./parameterSpace.service";
import { ParameterSpaceController } from "./parameterSpace.controller";
import { ParameterSpaceResolver } from "./parameterSpace.resolver";

@Module({
  imports: [ParameterSpaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParameterSpaceController],
  providers: [ParameterSpaceService, ParameterSpaceResolver],
  exports: [ParameterSpaceService],
})
export class ParameterSpaceModule {}
