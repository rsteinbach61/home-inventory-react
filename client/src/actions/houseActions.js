

export function loadHomesSuccess(houses){
  debugger;
  return {type: "GET_HOUSES_SUCCESS", houses}
}

export function postHomeSuccess(home){
  return {type: "POST_HOME_SUCCESS", home}
}



async function fetchHomes() {
  const url = '/api/home.json';
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

async function postHome(data){
  const url = '/api/create.json';
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



export function loadHouses() {
  return function(dispatch) {
    return fetchHomes().then(homes => {
      dispatch(loadHomesSuccess(homes))
    })
  }
}

export function addHome(data) {
  debugger;
  return function(dispatch) {
    return postHome(data).then(home =>{
      debugger;
      dispatch(postHomeSuccess(home))
    })
  }
}
