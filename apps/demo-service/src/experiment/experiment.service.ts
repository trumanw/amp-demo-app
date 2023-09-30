import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExperimentServiceBase } from "./base/experiment.service.base";

@Injectable()
export class ExperimentService extends ExperimentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
