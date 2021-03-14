let people = fetch("https://swapi.dev/api/people/")

people.then((resp) => {
	resp.json().then((people) => {
		console.log(people.results)
	})
})