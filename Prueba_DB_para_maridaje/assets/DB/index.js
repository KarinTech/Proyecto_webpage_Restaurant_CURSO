const objectApp = {
data: () =>({
vinosLocal: [],
}),
}

fetch("./assets\DB/DB/db.json")
.then((res) => res.json())
.then((vinosDesdeLocal) => (this.vinosLocal = vinosDesdeLocal))
.catch ((e) => console.log (e));
