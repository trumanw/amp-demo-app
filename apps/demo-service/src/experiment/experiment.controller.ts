import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExperimentService } from "./experiment.service";
import { ExperimentControllerBase } from "./base/experiment.controller.base";

@swagger.ApiTags("experiments")
@common.Controller("experiments")
export class ExperimentController extends ExperimentControllerBase {
  constructor(
    protected readonly service: ExperimentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
