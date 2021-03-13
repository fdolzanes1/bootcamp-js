let employeesPromises = fetch("http://localhost:3000/employees")

employeesPromises.then((resp) => {
	resp.json().then((employees) => {
		let table = renderTable(employees)
		document.getElementById("app").innerHTML = table
	})
})

function renderTable(object) {
  let rows = object.map(obj => {
    return `<tr><td>${obj.id}</td><td>${obj.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}