import { Module } from "@nestjs/common";
import { FdsfModuleBase } from "./base/fdsf.module.base";
import { FdsfService } from "./fdsf.service";
import { FdsfController } from "./fdsf.controller";
import { FdsfResolver } from "./fdsf.resolver";

@Module({
  imports: [FdsfModuleBase],
  controllers: [FdsfController],
  providers: [FdsfService, FdsfResolver],
  exports: [FdsfService],
})
export class FdsfModule {}
