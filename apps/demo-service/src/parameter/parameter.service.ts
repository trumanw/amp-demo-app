import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParameterServiceBase } from "./base/parameter.service.base";

@Injectable()
export class ParameterService extends ParameterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
