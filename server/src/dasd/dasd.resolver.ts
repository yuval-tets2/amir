import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DasdResolverBase } from "./base/dasd.resolver.base";
import { Dasd } from "./base/Dasd";
import { DasdService } from "./dasd.service";

@graphql.Resolver(() => Dasd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DasdResolver extends DasdResolverBase {
  constructor(
    protected readonly service: DasdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
