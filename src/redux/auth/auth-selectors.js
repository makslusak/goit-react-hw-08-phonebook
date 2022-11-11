export const selectToken = state => state.auth.access_token;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserName = state => state.auth.user.name;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
