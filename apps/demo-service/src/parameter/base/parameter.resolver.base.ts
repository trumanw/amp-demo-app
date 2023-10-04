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
import { CreateParameterArgs } from "./CreateParameterArgs";
import { UpdateParameterArgs } from "./UpdateParameterArgs";
import { DeleteParameterArgs } from "./DeleteParameterArgs";
import { ParameterCountArgs } from "./ParameterCountArgs";
import { ParameterFindManyArgs } from "./ParameterFindManyArgs";
import { ParameterFindUniqueArgs } from "./ParameterFindUniqueArgs";
import { Parameter } from "./Parameter";
import { SearchSpace } from "../../searchSpace/base/SearchSpace";
import { ParameterService } from "../parameter.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Parameter)
export class ParameterResolverBase {
  constructor(
    protected readonly service: ParameterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "read",
    possession: "any",
  })
  async _parametersMeta(
    @graphql.Args() args: ParameterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Parameter])
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "read",
    possession: "any",
  })
  async parameters(
    @graphql.Args() args: ParameterFindManyArgs
  ): Promise<Parameter[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Parameter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "read",
    possession: "own",
  })
  async parameter(
    @graphql.Args() args: ParameterFindUniqueArgs
  ): Promise<Parameter | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Parameter)
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "create",
    possession: "any",
  })
  async createParameter(
    @graphql.Args() args: CreateParameterArgs
  ): Promise<Parameter> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        searchSpace: args.data.searchSpace
          ? {
              connect: args.data.searchSpace,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Parameter)
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "update",
    possession: "any",
  })
  async updateParameter(
    @graphql.Args() args: UpdateParameterArgs
  ): Promise<Parameter | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          searchSpace: args.data.searchSpace
            ? {
                connect: args.data.searchSpace,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Parameter)
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "delete",
    possession: "any",
  })
  async deleteParameter(
    @graphql.Args() args: DeleteParameterArgs
  ): Promise<Parameter | null> {
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
  @graphql.ResolveField(() => SearchSpace, {
    nullable: true,
    name: "searchSpace",
  })
  @nestAccessControl.UseRoles({
    resource: "SearchSpace",
    action: "read",
    possession: "any",
  })
  async resolveFieldSearchSpace(
    @graphql.Parent() parent: Parameter
  ): Promise<SearchSpace | null> {
    const result = await this.service.getSearchSpace(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}