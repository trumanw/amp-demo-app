import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrialService } from "./trial.service";
import { TrialControllerBase } from "./base/trial.controller.base";

@swagger.ApiTags("trials")
@common.Controller("trials")
export class TrialController extends TrialControllerBase {
  constructor(
    protected readonly service: TrialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
