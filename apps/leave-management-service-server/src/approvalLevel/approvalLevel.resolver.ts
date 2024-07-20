import * as graphql from "@nestjs/graphql";
import { ApprovalLevelResolverBase } from "./base/approvalLevel.resolver.base";
import { ApprovalLevel } from "./base/ApprovalLevel";
import { ApprovalLevelService } from "./approvalLevel.service";

@graphql.Resolver(() => ApprovalLevel)
export class ApprovalLevelResolver extends ApprovalLevelResolverBase {
  constructor(protected readonly service: ApprovalLevelService) {
    super(service);
  }
}
