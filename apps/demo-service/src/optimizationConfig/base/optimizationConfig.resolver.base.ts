/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateOptimizationConfigArgs } from "./CreateOptimizationConfigArgs";
import { UpdateOptimizationConfigArgs } from "./UpdateOptimizationConfigArgs";
import { DeleteOptimizationConfigArgs } from "./DeleteOptimizationConfigArgs";
import { OptimizationConfigCountArgs } from "./OptimizationConfigCountArgs";
import { OptimizationConfigFindManyArgs } from "./OptimizationConfigFindManyArgs";
import { OptimizationConfigFindUniqueArgs } from "./OptimizationConfigFindUniqueArgs";
import { OptimizationConfig } from "./OptimizationConfig";
import { ExperimentFindManyArgs } from "../../experiment/base/ExperimentFindManyArgs";
import { Experiment } from "../../experiment/base/Experiment";
import { ObjectiveFindManyArgs } from "../../objective/base/ObjectiveFindManyArgs";
import { Objective } from "../../objective/base/Objective";
import { OptimizationConfigService } from "../optimizationConfig.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OptimizationConfig)
export class OptimizationConfigResolverBase {
  constructor(
    protected readonly service: OptimizationConfigService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OptimizationConfig",
    action: "read",
    possession: "any",
  })
  async _optimizationConfigsMeta(
    @graphql.Args() args: OptimizationConfigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [OptimizationConfig])
  @nestAccessControl.UseRoles({
    resource: "OptimizationConfig",
    action: "read",
    possession: "any",
  })
  async optimizationConfigs(
    @graphql.Args() args: OptimizationConfigFindManyArgs
  ): Promise<OptimizationConfig[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => OptimizationConfig, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OptimizationConfig",
    action: "read",
    possession: "own",
  })
  async optimizationConfig(
    @graphql.Args() args: OptimizationConfigFindUniqueArgs
  ): Promise<OptimizationConfig | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OptimizationConfig)
  @nestAccessControl.UseRoles({
    resource: "OptimizationConfig",
    action: "create",
    possession: "any",
  })
  async createOptimizationConfig(
    @graphql.Args() args: CreateOptimizationConfigArgs
  ): Promise<OptimizationConfig> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OptimizationConfig)
  @nestAccessControl.UseRoles({
    resource: "OptimizationConfig",
    action: "update",
    possession: "any",
  })
  async updateOptimizationConfig(
    @graphql.Args() args: UpdateOptimizationConfigArgs
  ): Promise<OptimizationConfig | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => OptimizationConfig)
  @nestAccessControl.UseRoles({
    resource: "OptimizationConfig",
    action: "delete",
    possession: "any",
  })
  async deleteOptimizationConfig(
    @graphql.Args() args: DeleteOptimizationConfigArgs
  ): Promise<OptimizationConfig | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Experiment], { name: "experiments" })
  @nestAccessControl.UseRoles({
    resource: "Experiment",
    action: "read",
    possession: "any",
  })
  async resolveFieldExperiments(
    @graphql.Parent() parent: OptimizationConfig,
    @graphql.Args() args: ExperimentFindManyArgs
  ): Promise<Experiment[]> {
    const results = await this.service.findExperiments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Objective], { name: "objectives" })
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "read",
    possession: "any",
  })
  async resolveFieldObjectives(
    @graphql.Parent() parent: OptimizationConfig,
    @graphql.Args() args: ObjectiveFindManyArgs
  ): Promise<Objective[]> {
    const results = await this.service.findObjectives(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}