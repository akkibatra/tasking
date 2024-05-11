import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  switch (action) {
    case ACTION.CREATE:
      return `${entityType.toLowerCase()} '${entityTitle}' was created`;
    case ACTION.UPDATE:
      return `${entityType.toLowerCase()} '${entityTitle}' was updated`;
    case ACTION.DELETE:
      return `${entityType.toLowerCase()} '${entityTitle}' was deleted`;
    default:
      return `${entityType.toLowerCase()} '${entityTitle}' is an unknown action`;
  }
};
