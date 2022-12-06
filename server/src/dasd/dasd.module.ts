import { Module } from "@nestjs/common";
import { DasdModuleBase } from "./base/dasd.module.base";
import { DasdService } from "./dasd.service";
import { DasdController } from "./dasd.controller";
import { DasdResolver } from "./dasd.resolver";

@Module({
  imports: [DasdModuleBase],
  controllers: [DasdController],
  providers: [DasdService, DasdResolver],
  exports: [DasdService],
})
export class DasdModule {}
