function fetchJson(url) {
  return fetch(url).then((r) => {
    return r.json();
  });
}

async function API() {
  try {
  	let [employees, roles] =  await Promise.all([
      fetchJson("http://localhost:3000/employees"),
      fetchJson("http://localhost:3000/roles"),
  	]);

  	let table = renderTable(employees, roles);
  	document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
  } finally {
    //console.log("Carregou");
  }
}
 
API()

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}

function showError(error) {
  document.getElementById("app").innerHTML = "Erro ao carregar dados.";
  console.error(error);
}