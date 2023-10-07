import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrialModuleBase } from "./base/trial.module.base";
import { TrialService } from "./trial.service";
import { TrialController } from "./trial.controller";
import { TrialResolver } from "./trial.resolver";

@Module({
  imports: [TrialModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrialController],
  providers: [TrialService, TrialResolver],
  exports: [TrialService],
})
export class TrialModule {}
