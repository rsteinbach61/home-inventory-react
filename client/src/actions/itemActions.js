export function postItemSuccess(item){
  return {type: "POST_ITEM_SUCCESS", item}
}

export function getItemsSuccess(items){
  return {type: "GET_ITEMS_SUCCESS", items}
}

async function postItem(data){
  debugger;
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

async function getItems(id){

  const url = `/api/room/${id}/items.json`
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

export function addItem(data) {

  return function(dispatch) {
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
