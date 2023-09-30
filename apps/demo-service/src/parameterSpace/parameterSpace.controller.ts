import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParameterSpaceService } from "./parameterSpace.service";
import { ParameterSpaceControllerBase } from "./base/parameterSpace.controller.base";

@swagger.ApiTags("parameterSpaces")
@common.Controller("parameterSpaces")
export class ParameterSpaceController extends ParameterSpaceControllerBase {
  constructor(
    protected readonly service: ParameterSpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
