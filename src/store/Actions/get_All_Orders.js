
export const getAllOrders=(id)=>{
  return dispatch =>{
    fetch(`https://testing-bc79f.firebaseio.com/orders/${id}.json`)
    .then(res=>res.json())
    .then(data=>{
      let containerOrders=[];
      for(let key in data){
        containerOrders.push(data[key]);
      }
      dispatch({type:'GET_ALL_ORDERS',items:containerOrders})
    })
  }
}

