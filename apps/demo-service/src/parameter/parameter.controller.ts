import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParameterService } from "./parameter.service";
import { ParameterControllerBase } from "./base/parameter.controller.base";

@swagger.ApiTags("parameters")
@common.Controller("parameters")
export class ParameterController extends ParameterControllerBase {
  constructor(
    protected readonly service: ParameterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
