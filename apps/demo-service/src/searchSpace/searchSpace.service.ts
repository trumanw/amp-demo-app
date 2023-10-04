import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchSpaceServiceBase } from "./base/searchSpace.service.base";

@Injectable()
export class SearchSpaceService extends SearchSpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
