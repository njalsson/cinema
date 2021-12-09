		async function authenticate(){
			let authUrl = "https://api.kvikmyndir.is/authenticate";
			let response = await fetch(authUrl,{
				method: "POST",
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"username": "njalsson",
					"password": "njalsson"
				})
			});

			if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json.token);
			  return json.token;
			} else {
			 
			  alert("HTTP-Error: " + response.status);
			}
			return response.token;
		}
		

		async function getMovies(token, title = "None"){
			if(title == "None"){
			let url = 'https://api.kvikmyndir.is/movies';

			}
			else{
				let url = 'https://api.kvikmyndir.is/movies?title='+title;
			}
			let response = await fetch(url,{
				method: "GET",
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'x-access-token': token
				}
			})
			if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json);
			  return json;
			} else {
			 
			  alert("HTTP-Error: " + response.status);
			}
			return response.token;


		}
		async function getPoster(token, imdbid){
			let url = 'https://api.kvikmyndir.is/images?'+imdbid;
			let response = await fetch(url,{
				method: "GET",
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'x-access-token': token
				}
			})
			if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json);
			  return json;
			} else {
			 
			  alert("HTTP-Error: " + response.status);
			}
			return response.token;


		}

		async function getUpcoming(token, title = "None"){
			if(title == "None"){
				let url = 'https://api.kvikmyndir.is/upcoming';
			}else{
				let url = 'https://api.kvikmyndir.is/upcoming?title='+title;
			}
			let response = await fetch(url,{
				method: "GET",
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'x-access-token': token
				}
			})
			if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json);
			  return json;
			} else {
			 
			  alert("HTTP-Error: " + response.status);
			}
			return response.token;


		}
		async function getCinemas(token){
			let url = 'https://api.kvikmyndir.is/theaters';
			let response = await fetch(url,{
				method: "GET",
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'x-access-token': token
				}
			})
			if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json);
			  return json;
			} else {
			 
			  alert("HTTP-Error: " + response.status);
			}
			return response.token;


		}


		async function getGenres(token){
			let url = 'https://api.kvikmyndir.is/genres';
			let response = await fetch(url,{
				method: "GET",
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'x-access-token': token
				}
			})
			if (response.ok) { // if HTTP-status is 200-299
			  let json = await response.json();
			  console.log(json);
			  return json;
			} else {
			 
			  alert("HTTP-Error: " + response.status);
			}
			return response.token;


		}


		// test
		(async () => {
			let token = await authenticate();
			console.log(token);

			movies = getMovies(token);
			getCinemas(token);
			getGenres(token);
			getUpcoming(token);

		})();

