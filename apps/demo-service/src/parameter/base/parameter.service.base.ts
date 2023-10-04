/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Parameter, SearchSpace } from "@prisma/client";

export class ParameterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ParameterCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterCountArgs>
  ): Promise<number> {
    return this.prisma.parameter.count(args);
  }

  async findMany<T extends Prisma.ParameterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterFindManyArgs>
  ): Promise<Parameter[]> {
    return this.prisma.parameter.findMany(args);
  }
  async findOne<T extends Prisma.ParameterFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterFindUniqueArgs>
  ): Promise<Parameter | null> {
    return this.prisma.parameter.findUnique(args);
  }
  async create<T extends Prisma.ParameterCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterCreateArgs>
  ): Promise<Parameter> {
    return this.prisma.parameter.create<T>(args);
  }
  async update<T extends Prisma.ParameterUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterUpdateArgs>
  ): Promise<Parameter> {
    return this.prisma.parameter.update<T>(args);
  }
  async delete<T extends Prisma.ParameterDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterDeleteArgs>
  ): Promise<Parameter> {
    return this.prisma.parameter.delete(args);
  }

  async getSearchSpace(parentId: string): Promise<SearchSpace | null> {
    return this.prisma.parameter
      .findUnique({
        where: { id: parentId },
      })
      .searchSpace();
  }
}
