function getLeagueInfo() {
    const request = require('request');
    request('https://api.sleeper.app/v1/league/723256520732696576', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    return body
  });
  }