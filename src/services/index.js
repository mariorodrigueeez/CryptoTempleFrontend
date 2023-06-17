
export function getall() {
  const url = 'http://127.0.0.1:5000/api/mapeo';
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json) => {
      const data = json.data;

      return getDatos(data);
    })
    .catch((error) => console.log('error', error));
}
export async function getallData() {
  const url = 'http://127.0.0.1:5000/api/all';
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const datos = json.data;
      console.log(datos);

      return getDatos(datos);
    })
    .catch((error) => console.log('error', error));
}

export function getDatos(json) {
  const datosArray = json.map((datosBueno) => {
    const nombre = datosBueno.name;
    const circulating_supply = datosBueno.circulating_supply;
    const max_supply = datosBueno.max_supply;
    const precio = datosBueno.quote.USD.price;
    const valor24h = datosBueno.quote.USD.percent_change_24h;
    const valor7d = datosBueno.quote.USD.percent_change_7d;
    const valor30d = datosBueno.quote.USD.percent_change_30d;
    const id = datosBueno.id;
    const rank = datosBueno.cmc_rank;
    const volume24h = datosBueno.quote.USD.volume_24h
    const volume_change_24h = datosBueno.quote.USD.volume_change_24h

    return { nombre, circulating_supply, precio, valor24h, valor7d, valor30d, id, rank, volume24h, volume_change_24h, max_supply };
  })
  const datosArray2 = json.map((datosBueno) => datosBueno.name);



  console.log(datosArray);
  console.log(datosArray2);
  return datosArray;
}


export function fetchNFTData(slug) {
  const url = `http://localhost:5000/api/nft/${slug}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Process the data as needed
      console.log(slug);
      console.log(data);
      // Return or use the processed data
      return data;
    })
    .catch(error => {
      console.error(error);
      // Handle the error appropriately
      throw error;
    });
}
