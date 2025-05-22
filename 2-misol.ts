enum UserRole {
    ADMIN,
    EDITOR,
    VIEWER
}

function canEdit(role: UserRole): boolean {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}

function canDelete(role: UserRole): boolean {
    return role === UserRole.ADMIN;
}

function checkPermissions(role: UserRole): void {
    console.log(`Role: ${UserRole[role]}`);
    console.log(`Edit: ${canEdit(role)}`);
    console.log(`Delete: ${canDelete(role)}`);
    
}

checkPermissions(UserRole.ADMIN);
checkPermissions(UserRole.EDITOR);
checkPermissions(UserRole.VIEWER);