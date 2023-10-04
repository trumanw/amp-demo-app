import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SearchSpaceService } from "./searchSpace.service";
import { SearchSpaceControllerBase } from "./base/searchSpace.controller.base";

@swagger.ApiTags("searchSpaces")
@common.Controller("searchSpaces")
export class SearchSpaceController extends SearchSpaceControllerBase {
  constructor(
    protected readonly service: SearchSpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
