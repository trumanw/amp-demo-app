import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParameterConstraintResolverBase } from "./base/parameterConstraint.resolver.base";
import { ParameterConstraint } from "./base/ParameterConstraint";
import { ParameterConstraintService } from "./parameterConstraint.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParameterConstraint)
export class ParameterConstraintResolver extends ParameterConstraintResolverBase {
  constructor(
    protected readonly service: ParameterConstraintService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
