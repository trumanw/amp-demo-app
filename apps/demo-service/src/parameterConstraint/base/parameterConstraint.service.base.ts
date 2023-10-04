/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ParameterConstraint, SearchSpace } from "@prisma/client";

export class ParameterConstraintServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ParameterConstraintCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterConstraintCountArgs>
  ): Promise<number> {
    return this.prisma.parameterConstraint.count(args);
  }

  async findMany<T extends Prisma.ParameterConstraintFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterConstraintFindManyArgs>
  ): Promise<ParameterConstraint[]> {
    return this.prisma.parameterConstraint.findMany(args);
  }
  async findOne<T extends Prisma.ParameterConstraintFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterConstraintFindUniqueArgs>
  ): Promise<ParameterConstraint | null> {
    return this.prisma.parameterConstraint.findUnique(args);
  }
  async create<T extends Prisma.ParameterConstraintCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterConstraintCreateArgs>
  ): Promise<ParameterConstraint> {
    return this.prisma.parameterConstraint.create<T>(args);
  }
  async update<T extends Prisma.ParameterConstraintUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterConstraintUpdateArgs>
  ): Promise<ParameterConstraint> {
    return this.prisma.parameterConstraint.update<T>(args);
  }
  async delete<T extends Prisma.ParameterConstraintDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParameterConstraintDeleteArgs>
  ): Promise<ParameterConstraint> {
    return this.prisma.parameterConstraint.delete(args);
  }

  async getSearchSpace(parentId: string): Promise<SearchSpace | null> {
    return this.prisma.parameterConstraint
      .findUnique({
        where: { id: parentId },
      })
      .searchSpace();
  }
}
