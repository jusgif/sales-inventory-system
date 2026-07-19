export interface UserPermissions {
  canEditInventory: boolean;
  canAddInventory: boolean;
  canDeleteInventory: boolean;
  canViewInventory: boolean;
  canCreateOrders: boolean;
  canEditOrders: boolean;
  canCancelOrders: boolean;
  canMarkOrdersComplete: boolean;
  canViewReports: boolean;
  canExportCSV: boolean;
  canManageUsers: boolean;
  canManagePricing: boolean;
}

export function managerPermissions(): UserPermissions {
  return {
    canEditInventory: true,
    canAddInventory: true,
    canDeleteInventory: true,
    canViewInventory: true,
    canCreateOrders: true,
    canEditOrders: true,
    canCancelOrders: true,
    canMarkOrdersComplete: true,
    canViewReports: true,
    canExportCSV: true,
    canManageUsers: true,
    canManagePricing: true,
  };
}

export function salespersonPermissions(): UserPermissions {
  return {
    canEditInventory: false,
    canAddInventory: false,
    canDeleteInventory: false,
    canViewInventory: true,
    canCreateOrders: true,
    canEditOrders: false,
    canCancelOrders: false,
    canMarkOrdersComplete: false,
    canViewReports: false,
    canExportCSV: false,
    canManageUsers: false,
    canManagePricing: false,
  };
}

export function hasPermission(
  permissions: UserPermissions,
  permission: keyof UserPermissions
): boolean {
  return permissions[permission] === true;
}
