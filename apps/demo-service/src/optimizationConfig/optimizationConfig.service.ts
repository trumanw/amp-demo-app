import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptimizationConfigServiceBase } from "./base/optimizationConfig.service.base";

@Injectable()
export class OptimizationConfigService extends OptimizationConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
