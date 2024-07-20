/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LeaveRequest as PrismaLeaveRequest } from "@prisma/client";

export class LeaveRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LeaveRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.leaveRequest.count(args);
  }

  async leaveRequests(
    args: Prisma.LeaveRequestFindManyArgs
  ): Promise<PrismaLeaveRequest[]> {
    return this.prisma.leaveRequest.findMany(args);
  }
  async leaveRequest(
    args: Prisma.LeaveRequestFindUniqueArgs
  ): Promise<PrismaLeaveRequest | null> {
    return this.prisma.leaveRequest.findUnique(args);
  }
  async createLeaveRequest(
    args: Prisma.LeaveRequestCreateArgs
  ): Promise<PrismaLeaveRequest> {
    return this.prisma.leaveRequest.create(args);
  }
  async updateLeaveRequest(
    args: Prisma.LeaveRequestUpdateArgs
  ): Promise<PrismaLeaveRequest> {
    return this.prisma.leaveRequest.update(args);
  }
  async deleteLeaveRequest(
    args: Prisma.LeaveRequestDeleteArgs
  ): Promise<PrismaLeaveRequest> {
    return this.prisma.leaveRequest.delete(args);
  }
}
