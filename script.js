async function getcrypto() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  );
  const data = await response.json();
  // console.log(data);
  const coins = data
    .map((coin) => {
      return `
        <div class="coin">
            <div class="rank">
                <P align="center" font>
                    <img src = "${coin.image}" alt="${coin.name}" class="img"/>
                    <strong>${coin.name.toUpperCase()}</strong>
                </P>
            </div>
            
            <div class="rank">

                <Strong>Rank: </Strong> ${coin.market_cap_rank}
            </div>

            <div class="symbol">
                <strong>SYMBOL: </strong>${coin.symbol}
            </div>

            <div class="price">
                <Strong>Current Price: </Strong>₹${coin.current_price.toLocaleString()}
            </div>

            <div class="high24h">
                <strong>High 24H: </strong>₹${coin.high_24h.toLocaleString()}
            </div>

            <div class="low24h">
                <strong>Low 24H: </strong>₹${coin.low_24h.toLocaleString()}
            </div>
            
            <div class="marketCap">
                <strong>Market Capitalization: </strong>₹${coin.market_cap.toLocaleString()}
            </div>
            
            <div class="volume">
                <strong>Volume: </strong>₹${coin.total_volume.toLocaleString()}
            </div>
        </div>
        `;
    })
    .join(" ");
  console.log(coins);
  document.querySelector("#app").innerHTML = coins;
}
getcrypto();
