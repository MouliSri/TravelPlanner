export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const DELETE_ACTIVITY='DELETE_ACTIVITY'


export const addActivity=(activity)=>({
    type:ADD_ACTIVITY,
    payload:activity,
});

export const deleteActivity=(activity)=>({
    type:DELETE_ACTIVITY,
    payload:activity,
});