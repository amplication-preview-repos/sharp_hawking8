import { ApprovalLevel as TApprovalLevel } from "../api/approvalLevel/ApprovalLevel";

export const APPROVALLEVEL_TITLE_FIELD = "id";

export const ApprovalLevelTitle = (record: TApprovalLevel): string => {
  return record.id?.toString() || String(record.id);
};
