import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParameterConstraintModuleBase } from "./base/parameterConstraint.module.base";
import { ParameterConstraintService } from "./parameterConstraint.service";
import { ParameterConstraintController } from "./parameterConstraint.controller";
import { ParameterConstraintResolver } from "./parameterConstraint.resolver";

@Module({
  imports: [ParameterConstraintModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParameterConstraintController],
  providers: [ParameterConstraintService, ParameterConstraintResolver],
  exports: [ParameterConstraintService],
})
export class ParameterConstraintModule {}
