import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParameterConstraintService } from "./parameterConstraint.service";
import { ParameterConstraintControllerBase } from "./base/parameterConstraint.controller.base";

@swagger.ApiTags("parameterConstraints")
@common.Controller("parameterConstraints")
export class ParameterConstraintController extends ParameterConstraintControllerBase {
  constructor(
    protected readonly service: ParameterConstraintService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
