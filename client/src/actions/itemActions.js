export function postItemSuccess(item){
  return {type: "POST_ITEM_SUCCESS", item}
}

export function getItemsSuccess(items){
  return {type: "GET_ITEMS_SUCCESS", items}
}

export function getSingleItemSuccess(item){
  return {type: "GET_SINGLE_ITEM_SUCCESS", item}
}

export function deleteItemSuccess(items){
  return {type: "DELETE_ITEM_SUCCESS", items}
}

// ----- fetch functions -----
 async function postItem(data){
   const url = '/api/item.json';
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


async function getItems(id){
  const url = `/api/room/${id}/items.json`
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}



async function deleteItem(id){
  const url = `/api/item/${id}.json`;
  const settings = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(id)
}
    const fetchResult = fetch(url, settings);
    const response = await fetchResult;
    const jsonData = await response.json();
    return jsonData;
}

async function fetchSingleItem(id){

  const url = `/api/item/${id}.json`
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

// ---- action creators -----
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

export function removeItem(id) {
  return function(dispatch) {
    return deleteItem(id).then(items => {
      dispatch(deleteItemSuccess(items))
    })
  }
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
