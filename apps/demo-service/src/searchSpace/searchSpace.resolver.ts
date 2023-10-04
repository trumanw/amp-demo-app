import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SearchSpaceResolverBase } from "./base/searchSpace.resolver.base";
import { SearchSpace } from "./base/SearchSpace";
import { SearchSpaceService } from "./searchSpace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SearchSpace)
export class SearchSpaceResolver extends SearchSpaceResolverBase {
  constructor(
    protected readonly service: SearchSpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
