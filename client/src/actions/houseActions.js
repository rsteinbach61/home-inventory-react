

export function loadHomesSuccess(houses){
  return {type: "GET_HOUSES_SUCCESS", houses}
}

export function postHomeSuccess(home){
  return {type: "POST_HOME_SUCCESS", home}
}

export function removeHomeSuccess(homes){
  return {type: "REMOVE_HOME_SUCCESS", homes}
}


//----- fetch functions -----
async function fetchHomes() {
  const url = '/api/home.json';
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

async function postHome(data){
  const url = '/api/home.json';
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

async function deleteHome(id){
  const url = `/api/home/${id}.json`;
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


//----- Action creators ------
export function loadHouses() {
  return function(dispatch) {
    return fetchHomes().then(homes => {
      if (homes.status){
          alert(`Status: ${homes.status}, ${homes.error}`)
    } else {
      dispatch(loadHomesSuccess(homes))
    }
    })
  }
}

export function addHome(data) {
  console.log('C')
  return function(dispatch) {
    return postHome(data).then(home =>{
      if (home.status){
          alert(`Status: ${home.status}, ${home.error}`)
    } else {
      dispatch(postHomeSuccess(home))
      console.log('D')
    }
    })
  }

}

export function removeHome(data){
  return function(dispatch) {
    return deleteHome(data).then(homes =>{
      dispatch(removeHomeSuccess(homes))
    })
  }
}
