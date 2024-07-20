import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApprovalLevelService } from "./approvalLevel.service";
import { ApprovalLevelControllerBase } from "./base/approvalLevel.controller.base";

@swagger.ApiTags("approvalLevels")
@common.Controller("approvalLevels")
export class ApprovalLevelController extends ApprovalLevelControllerBase {
  constructor(protected readonly service: ApprovalLevelService) {
    super(service);
  }
}
