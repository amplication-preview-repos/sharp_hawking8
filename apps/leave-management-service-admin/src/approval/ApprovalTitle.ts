import { Approval as TApproval } from "../api/approval/Approval";

export const APPROVAL_TITLE_FIELD = "id";

export const ApprovalTitle = (record: TApproval): string => {
  return record.id?.toString() || String(record.id);
};
