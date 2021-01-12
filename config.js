let api = "http://209.250.241.193:11898";
let decimals = 5;
let difficulty_target = 90;
let ticker = "XKR"

let pools = [ // Name, Site URL, API URL
  ["Swepool", "https://swepool.org", "https://swepool.org/api/stats"],
  ["Kryptokrona Göta", "https://pool.kryptokrona.se", "https://gota.kryptokrona.se/api/stats"],
  ["Kryptokrona Pool2", "https://pool2.kryptokrona.se", "http://pool2.kryptokrona.se:8117/stats"],
  ["Floki Kryptokrona Pool", "https://floki.kryptokrona.se", "https://floki.kryptokrona.se/api/stats"],
  ["GamersNest", "https://pool.gamersnest.org", "http://pool.gamersnest.org:8117/stats"],
  ["Lets Hash It", "https://letshash.it", "https://letshash.online:15040/stats"],
  ["GabberPool", "https://gabberpool.nl/XKR", "https://gabberpool.nl:1122/stats"],
  ["SpookyPlanet", "https://spookyplanet.nl/pool/xkr", "https://spookyplanet.nl:1172/stats"],
  ["PoolPay", "https://xkr.pool-pay.com", "https://xkr.pool-pay.com:5383/stats"],
  ["ComPool", "https://kryptokrona.compool.net", "https://api.compool.net/xkr/v1/stats"],
  ["WorldMining", "http://xkr-worldmining.servebeer.com", "http://connectme.servebeer.com:8118/stats"]
];
