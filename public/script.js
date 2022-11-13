function addItems() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  })
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
}
