import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApprovalLevelServiceBase } from "./base/approvalLevel.service.base";

@Injectable()
export class ApprovalLevelService extends ApprovalLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
