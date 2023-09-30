import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParameterSpaceServiceBase } from "./base/parameterSpace.service.base";

@Injectable()
export class ParameterSpaceService extends ParameterSpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
