/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ParameterService } from "../parameter.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ParameterCreateInput } from "./ParameterCreateInput";
import { ParameterWhereInput } from "./ParameterWhereInput";
import { ParameterWhereUniqueInput } from "./ParameterWhereUniqueInput";
import { ParameterFindManyArgs } from "./ParameterFindManyArgs";
import { ParameterUpdateInput } from "./ParameterUpdateInput";
import { Parameter } from "./Parameter";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ParameterControllerBase {
  constructor(
    protected readonly service: ParameterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Parameter })
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ParameterCreateInput): Promise<Parameter> {
    return await this.service.create({
      data: {
        ...data,

        searchSpace: data.searchSpace
          ? {
              connect: data.searchSpace,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        parameterBody: true,
        parameterClass: true,
        parameterName: true,

        searchSpace: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Parameter] })
  @ApiNestedQuery(ParameterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Parameter[]> {
    const args = plainToClass(ParameterFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        parameterBody: true,
        parameterClass: true,
        parameterName: true,

        searchSpace: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Parameter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ParameterWhereUniqueInput
  ): Promise<Parameter | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        parameterBody: true,
        parameterClass: true,
        parameterName: true,

        searchSpace: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Parameter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ParameterWhereUniqueInput,
    @common.Body() data: ParameterUpdateInput
  ): Promise<Parameter | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          searchSpace: data.searchSpace
            ? {
                connect: data.searchSpace,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          parameterBody: true,
          parameterClass: true,
          parameterName: true,

          searchSpace: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Parameter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parameter",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ParameterWhereUniqueInput
  ): Promise<Parameter | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          parameterBody: true,
          parameterClass: true,
          parameterName: true,

          searchSpace: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}