
let initialState={
  id:null
};
const authReducer=(state=initialState,action)=>{
  switch(action.type){
    case 'SIGN_IN':{
      return{
        id:action.id
      }
    }
    case 'SIGN_OUT':{
      return {
        id:null
      }
    }
    default:return state;
}
}
export default authReducer;