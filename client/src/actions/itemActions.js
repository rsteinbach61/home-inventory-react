export function postItemSuccess(item){

  return {type: "POST_ITEM_SUCCESS", item}
}

export function getItemsSuccess(items){
  return {type: "GET_ITEMS_SUCCESS", items}
}

export function getSingleItemSuccess(item){
  return {type: "GET_SINGLE_ITEM_SUCCESS", item}
}

 async function postItem(data){

   const url = '/api/createitem.json';
   const settings = {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   }
   const fetchResult = fetch(url, settings);
   const response = await fetchResult;
   const jsonData = await response.json();
   return jsonData;
 }

// async function pstItem(data){
// debugger;
// }

async function getItems(id){

  const url = `/api/room/${id}/items.json`
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}




export function addItem(data){
  return function(dispatch){

    return postItem(data).then(item =>{
      if (item.status){
        alert(`Status: ${item.status}, ${item.error}`)
      } else {
        dispatch(postItemSuccess(item))
      }
    })
}
}



export function getItem(id) {
  return function(dispatch) {
    return getItems(id).then(items =>{
      if (items.status){
        alert(`Status: ${items.status}, ${items.error}`)
      }else {
        dispatch(getItemsSuccess(items))

      }
    })
  }
}

async function fetchSingleItem(id){

  const url = `/api/item/${id}.json`
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

export function getSingleItem(id) {
  return function(dispatch) {
    return fetchSingleItem(id).then(item =>{
      if (item.status){
        alert(`Status: ${item.status}, ${item.error}`)
      }else {
        dispatch(getSingleItemSuccess(item))

      }
    })
  }
}
