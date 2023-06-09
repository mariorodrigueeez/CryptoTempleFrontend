
export function getBtcPrice() {
  const url = 'http://127.0.0.1:5000/api/btcprice';

  if (!getBtcPrice.promise) {
    getBtcPrice.promise = new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json();
        })
        .then(data => {
          const btcPrice = data.data.BTC[0].quote.USD.price;
          console.log(btcPrice);
          resolve(btcPrice.toFixed(0));
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }

  return getBtcPrice.promise;
}

export function getEthPrice() {
  const url = 'http://127.0.0.1:5000/api/ethprice';

  if (!getEthPrice.promise) {
    getEthPrice.promise = new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json();
        })
        .then(data => {
          const ethPrice = data.data.ETH[0].quote.USD.price;
          console.log(ethPrice);
          resolve(ethPrice.toFixed(0));
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }

  return getEthPrice.promise;
}

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
    const precio = datosBueno.quote.USD.price;
    const valor24h = datosBueno.quote.USD.percent_change_24h;
    const valor7d = datosBueno.quote.USD.percent_change_7d;
    const valor30d = datosBueno.quote.USD.percent_change_30d;
    const id = datosBueno.id;
    const rank = datosBueno.cmc_rank;
    const volume24h = datosBueno.quote.USD.volume_24h
    return { nombre, precio, valor24h, valor7d, valor30d, id, rank, volume24h };
  })
  const datosArray2 = json.map((datosBueno) => datosBueno.name);



  console.log(datosArray);
  console.log(datosArray2);
  return datosArray;
}

