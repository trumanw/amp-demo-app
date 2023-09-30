import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParameterSpaceResolverBase } from "./base/parameterSpace.resolver.base";
import { ParameterSpace } from "./base/ParameterSpace";
import { ParameterSpaceService } from "./parameterSpace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParameterSpace)
export class ParameterSpaceResolver extends ParameterSpaceResolverBase {
  constructor(
    protected readonly service: ParameterSpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
