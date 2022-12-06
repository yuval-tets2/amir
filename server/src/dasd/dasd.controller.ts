import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DasdService } from "./dasd.service";
import { DasdControllerBase } from "./base/dasd.controller.base";

@swagger.ApiTags("dasds")
@common.Controller("dasds")
export class DasdController extends DasdControllerBase {
  constructor(
    protected readonly service: DasdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
