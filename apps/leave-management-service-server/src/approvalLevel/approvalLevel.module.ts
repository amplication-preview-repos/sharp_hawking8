import { Module } from "@nestjs/common";
import { ApprovalLevelModuleBase } from "./base/approvalLevel.module.base";
import { ApprovalLevelService } from "./approvalLevel.service";
import { ApprovalLevelController } from "./approvalLevel.controller";
import { ApprovalLevelResolver } from "./approvalLevel.resolver";

@Module({
  imports: [ApprovalLevelModuleBase],
  controllers: [ApprovalLevelController],
  providers: [ApprovalLevelService, ApprovalLevelResolver],
  exports: [ApprovalLevelService],
})
export class ApprovalLevelModule {}
