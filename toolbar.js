setInterval(() => {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum&vs_currencies=USD&include_24hr_change=true');

  xhr.send();

  xhr.onload = function () {
    if (xhr.status != 200) {
    } else {
      let data = JSON.parse(xhr.response);
      document.getElementById('eth-rate').innerText = "" + data.ethereum.usd;
      document.getElementById('btc-rate').innerText = "" + data.bitcoin.usd;

      document.getElementById('rate-change-eth').innerText = "" + data.ethereum.usd_24h_change.toFixed(2);
      document.getElementById('rate-change-btc').innerText = "" + data.bitcoin.usd_24h_change.toFixed(2);

      if (data.ethereum.usd_24h_change > 0) {
        document.getElementById('rate-change-eth').setAttribute('style', 'color: green');
      } else {
        document.getElementById('rate-change-eth').setAttribute('style', 'color: red');
      }

      if (data.bitcoin.usd_24h_change > 0) {
        document.getElementById('rate-change-btc').setAttribute('style', 'color: green');
      } else {
        document.getElementById('rate-change-btc').setAttribute('style', 'color: red');
      }

    }
  };

}, 300000);