/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Dasd } from "@prisma/client";

export class DasdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DasdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DasdFindManyArgs>
  ): Promise<number> {
    return this.prisma.dasd.count(args);
  }

  async findMany<T extends Prisma.DasdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DasdFindManyArgs>
  ): Promise<Dasd[]> {
    return this.prisma.dasd.findMany(args);
  }
  async findOne<T extends Prisma.DasdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DasdFindUniqueArgs>
  ): Promise<Dasd | null> {
    return this.prisma.dasd.findUnique(args);
  }
  async create<T extends Prisma.DasdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DasdCreateArgs>
  ): Promise<Dasd> {
    return this.prisma.dasd.create<T>(args);
  }
  async update<T extends Prisma.DasdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DasdUpdateArgs>
  ): Promise<Dasd> {
    return this.prisma.dasd.update<T>(args);
  }
  async delete<T extends Prisma.DasdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DasdDeleteArgs>
  ): Promise<Dasd> {
    return this.prisma.dasd.delete(args);
  }
}
