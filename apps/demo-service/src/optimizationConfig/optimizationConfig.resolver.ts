import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OptimizationConfigResolverBase } from "./base/optimizationConfig.resolver.base";
import { OptimizationConfig } from "./base/OptimizationConfig";
import { OptimizationConfigService } from "./optimizationConfig.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OptimizationConfig)
export class OptimizationConfigResolver extends OptimizationConfigResolverBase {
  constructor(
    protected readonly service: OptimizationConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
