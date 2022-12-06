import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FdsfResolverBase } from "./base/fdsf.resolver.base";
import { Fdsf } from "./base/Fdsf";
import { FdsfService } from "./fdsf.service";

@graphql.Resolver(() => Fdsf)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FdsfResolver extends FdsfResolverBase {
  constructor(
    protected readonly service: FdsfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
