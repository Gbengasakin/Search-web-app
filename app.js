//API url
const url = "https://jsonplaceholder.typicode.com/users";

//Fetch url from the API URL
function fetchusers() {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			//passing the usersdata to the renderUsers function
			renderUsers(data)
		});
}

//render the users in the DOM
function renderUsers(userData) {
	const ol = document.getElementById("list-container");

	//render an li tag for each of the data
	userData.forEach((user, index) => {
		console.log(user, index);
		const li = document.createElement("li");
		li.innerHTML = `
	<span>${index + 1}.</span>
	<span>${user.name}</span>
	<span>-</span>
	<span class="username">${user.username}</span>
	`;
		//append the current user li tag to the ol tag
		ol.appendChild(li);
	});

}

// add a search funtion to the DOM
function searchusers() {
	const input = document.getElementById('search');
	const ol = document.getElementById("list-container");
	const inputValue = input.value.toUpperCase();
	const userslist = ol.querySelectorAll("li");
	// loop through all the users and render the ones that match the search
	for (let index = 0; index < userslist.length; index++) {
		const usernameSpanTag = userslist[index].querySelector(".username");
		const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
		const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

		if (isMatch) {
			userslist[index].style.display = "block";
		} else {
			userslist[index].style.display = "none";
		}
	}
}
//calling the fetch function
fetchusers();