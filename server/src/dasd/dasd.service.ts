import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DasdServiceBase } from "./base/dasd.service.base";

@Injectable()
export class DasdService extends DasdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
