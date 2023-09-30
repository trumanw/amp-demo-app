import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExperimentModuleBase } from "./base/experiment.module.base";
import { ExperimentService } from "./experiment.service";
import { ExperimentController } from "./experiment.controller";
import { ExperimentResolver } from "./experiment.resolver";

@Module({
  imports: [ExperimentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExperimentController],
  providers: [ExperimentService, ExperimentResolver],
  exports: [ExperimentService],
})
export class ExperimentModule {}
