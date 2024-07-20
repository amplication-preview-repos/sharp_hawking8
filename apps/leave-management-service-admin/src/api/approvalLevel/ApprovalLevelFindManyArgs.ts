import { ApprovalLevelWhereInput } from "./ApprovalLevelWhereInput";
import { ApprovalLevelOrderByInput } from "./ApprovalLevelOrderByInput";

export type ApprovalLevelFindManyArgs = {
  where?: ApprovalLevelWhereInput;
  orderBy?: Array<ApprovalLevelOrderByInput>;
  skip?: number;
  take?: number;
};
