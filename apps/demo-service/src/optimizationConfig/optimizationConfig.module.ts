import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptimizationConfigModuleBase } from "./base/optimizationConfig.module.base";
import { OptimizationConfigService } from "./optimizationConfig.service";
import { OptimizationConfigController } from "./optimizationConfig.controller";
import { OptimizationConfigResolver } from "./optimizationConfig.resolver";

@Module({
  imports: [OptimizationConfigModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptimizationConfigController],
  providers: [OptimizationConfigService, OptimizationConfigResolver],
  exports: [OptimizationConfigService],
})
export class OptimizationConfigModule {}
