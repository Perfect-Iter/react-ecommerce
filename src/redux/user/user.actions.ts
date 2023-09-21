
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const setCurrentUser = (user:any) => ({
    type: 'SET_CURRENT_USER',
    payload: user
})