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

  if (!getall.promise) {
    getall.promise = new Promise((resolve, reject) => {
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
          const mapeo = data.data;
          console.log(mapeo);
          const names = mapeo.map(obj => obj.name);
          console.log(names);
          resolve(mapeo);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
  }

  return getall.promise;
}