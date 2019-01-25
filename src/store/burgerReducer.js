const prices={
  'Salad':5,
  'Meat':50,
  'Cheese':40,
  'Chicken':30
 }
const initialState={
        ingredients:{
          'Salad':0,
          'Meat':0,
          'Cheese':0,
          'Chicken':0 
      },
      totalPrice:10,
      orders:[]
  }



const burgerReducer=(state=initialState,action)=>{
  switch(action.type){
    case 'ADD_ITEM':{
      return{
        ingredients:{
          ...state.ingredients,
          [action.itemName]:state.ingredients[action.itemName] +1
        },
        totalPrice:state.totalPrice+prices[action.itemName]
      }
    }
    case 'REMOVE_ITEM':{
      return{
        ingredients:{
          ...state.ingredients,
          [action.itemName]:state.ingredients[action.itemName]!==0?state.ingredients[action.itemName] -1:false
        },
        totalPrice:state.totalPrice-prices[action.itemName]
      }
    }
    case 'INITIAL_STATE':{
      return{
        ingredients:initialState.ingredients,
        totalPrice:initialState.totalPrice
      }
    }
    case 'GET_ALL_ORDERS':{
      return{
        ...initialState,
        orders:action.items
      }
    }
    case 'CANCEL_ORDER':{
      return{
        ...state,
        orders:state.orders.filter(item=>item.id!==action.id)
      }

    }
    default:return state;

  }
}

export default burgerReducer;