var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["EDITOR"] = 1] = "EDITOR";
    UserRole[UserRole["VIEWER"] = 2] = "VIEWER";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}
function canDelete(role) {
    return role === UserRole.ADMIN;
}
function checkPermissions(role) {
    console.log("Role: ".concat(UserRole[role]));
    console.log("Edit: ".concat(canEdit(role)));
    console.log("Delete: ".concat(canDelete(role)));
}
checkPermissions(UserRole.ADMIN);
checkPermissions(UserRole.EDITOR);
checkPermissions(UserRole.VIEWER);
