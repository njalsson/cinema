const URL = 'https://api.kvikmyndir.is/';
let token = '';

function checkAuth(response) {
    if ('success' in response ) {
        throw 'not authenticated';
    }
}

function fixResponse(obj) {
    obj.forEach( (element) => {

        Object.keys(element).forEach((key) => {
            //fix data
            let value = element[key];
            if (typeof value === 'string' || value instanceof String) {
                element[key] = value.replace(/(?:&nbsp;|<br>|<b>)/g,'').replace(/\.\./g,'.').trim();
            }
            //fix keys
            var replacedKey = key.trim();
            if (key !== replacedKey) {
                element[replacedKey] = value;
                delete element[key];
            }
        });
    });
    return obj;
}

const ApiService = {
    getCinemas:  async () => {
        const url = URL + 'theaters';
        const response = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        });
        const json = await response.json();
        checkAuth(json);
        return fixResponse(json);
    },
    getMovies: async () => {
        const url = URL + 'movies';
        const response = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        });
        const json = await response.json();
        checkAuth(json);
        return fixResponse(json);
    },
    getUpcoming: async () => {

        const url = URL + 'upcoming';

        const response = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        });
        const json = await response.json();
        checkAuth(json);
        return fixResponse(json);
    },

    async authenticate() {
        const authUrl = URL + 'authenticate';
        const response = await fetch(authUrl,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': 'njalsson',
                'password': 'njalsson'
            })
        });
    
        
        const json = await response.json();
        console.log(json);
        token = json.token;
    },
};
		

async function getMovies(token, title = 'None'){
    if(title == 'None'){
        let url = 'https://api.kvikmyndir.is/movies';

    }
    else{
        let url = 'https://api.kvikmyndir.is/movies?title='+title;
    }
    let response = await fetch(url,{
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
    if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json);
			  return json;
    } else {
			 
			  alert('HTTP-Error: ' + response.status);
    }
    return response.token;


}


async function getGenres(token){
    let url = 'https://api.kvikmyndir.is/genres';
    let response = await fetch(url,{
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
    if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json);
			  return json;
    } else {
			 
			  alert('HTTP-Error: ' + response.status);
    }
    return response.token;


}




export default ApiService;
