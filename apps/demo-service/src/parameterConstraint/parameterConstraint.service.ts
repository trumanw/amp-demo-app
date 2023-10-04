import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParameterConstraintServiceBase } from "./base/parameterConstraint.service.base";

@Injectable()
export class ParameterConstraintService extends ParameterConstraintServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
