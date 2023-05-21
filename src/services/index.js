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