// PROMISES

// Attention! This example requires the following node module installed
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Promise to get cat facts from API
const getCatFact = numberOfFacts =>
  new Promise((resolves, rejects) => {
    const api = `https://cat-fact.herokuapp.com/facts/random?amount=${numberOfFacts}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.responseText))
        : rejects(Error(request.statusText));
    request.onerror = err => rejects(err);
    request.send();
  });

// Get 3 cat facts asynchronously
getCatFact(3)
  .then(facts => console.log(facts.map(fact => fact.text)))
  .catch(error => {
    console.error(error);
  });
