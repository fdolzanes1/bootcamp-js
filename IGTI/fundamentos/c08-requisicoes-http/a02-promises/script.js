function solucao01() {
	let employeesPromises = fetch("http://localhost:3000/employees")

	employeesPromises.then((resp1) => {
		resp1.json().then((employees) => {
			let rolesPromises = fetch("http://localhost:3000/roles")
			rolesPromises.then((resp2) => {
				resp2.json().then((roles) => {
					let table = renderTable(employees, roles)
					document.getElementById("app").innerHTML = table
				})
			})

		})
	})
}
//solucao01()

function fetchJson(url) {
  return fetch(url).then((r) => {
    return r.json();
  });
}


function solucao02() {
  fetchJson("http://localhost:3000/employees").then((employees) => {
    fetchJson("http://localhost:3000/roles").then((roles) => {
      let table = renderTable(employees, roles);
      document.getElementById("app").innerHTML = table;
    });
  });
}
//solucao02();

function solution3() {
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ]).then(([employees, roles]) => {
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  });
}
solution3();


function renderTable(primary, foreign) {
  let rows = primary.map( (prim) => {
  	let role = foreign.find( (forei) => forei.id == prim.role_id )
    return `<tr><td>${prim.id}</td><td>${prim.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}