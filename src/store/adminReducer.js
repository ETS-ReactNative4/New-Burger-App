
const initialState={allBurgers:[],price:{},itemsInTheCart:{},totalItemsInTheCart:0};

const adminReducer=(state=initialState,action)=>{
  switch(action.type){
    case 'FETCH_BURGERS_FROM_ADMIN':{
      return {...state,allBurgers:[...action.allBurgers],price:action.prices}
    }
    case 'ADD ITEM TO CART':{
      let numberOfItems;  
  
      if(state.itemsInTheCart[action.name]){
        numberOfItems=state.itemsInTheCart[action.name]+1;
      }else{
        numberOfItems=1;
      }
      const itemsInTheCart={
        ...state.itemsInTheCart,
        [action.name]:numberOfItems
      };
      let totalItems=0;
      for(let itm in itemsInTheCart){
        totalItems =totalItems+itemsInTheCart[itm];
      }

      return{
        ...state,
        itemsInTheCart:itemsInTheCart,
        totalItemsInTheCart:totalItems
      }
    }
    case 'REMOVE ITEM FROM CART':{
      let numberOfItems;  
  
      if(state.itemsInTheCart[action.name]){
        numberOfItems=state.itemsInTheCart[action.name]-1;
      }
      const itemsInTheCart={
        ...state.itemsInTheCart,
        [action.name]:numberOfItems
      };
      let totalItems=0;
      for(let itm in itemsInTheCart){
        totalItems =totalItems+itemsInTheCart[itm];
      }
      return{
        ...state,
        itemsInTheCart:itemsInTheCart,
        totalItemsInTheCart:totalItems?totalItems:0
      }
    }
    default:return state;
    }
}
export default adminReducer;