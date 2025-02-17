fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWYzNWYyNjBjYzAwMTVjYzBkZTciLCJpYXQiOjE3Mzk4MDMwMTEsImV4cCI6MTc0MTAxMjYxMX0.jlYOAgfP3Dt1jKABJmHyEecCatFpI-jBQS1hONcsal8",
  },
})
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella chiamata");
    }
  })
  .then((product) => {
    console.log(product);
    const row = document.getElementById("row");
    product.forEach((element) => {
      row.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${element.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.description}.</p>
    <p class="card-text">€ ${element.price}</p>
    <a href="/details.html" class="btn btn-primary">Dettagli</a>
  </div>
</div>`;
    });
  })
  .catch((error) => {
    console.log("errore nella chiamata ", error);
  });
