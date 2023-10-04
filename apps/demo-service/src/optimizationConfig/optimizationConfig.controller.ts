import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptimizationConfigService } from "./optimizationConfig.service";
import { OptimizationConfigControllerBase } from "./base/optimizationConfig.controller.base";

@swagger.ApiTags("optimizationConfigs")
@common.Controller("optimizationConfigs")
export class OptimizationConfigController extends OptimizationConfigControllerBase {
  constructor(
    protected readonly service: OptimizationConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
