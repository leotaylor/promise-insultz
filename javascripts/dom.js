const outputDiv = $('.outputDiv');

const writeDom = (word1, word2, noun) => {
  let domString = '';
  domString += `<div class="jumbotron">`;
  domString +=  `<div class="container">`;
  domString +=    `<h1>${word1} ${word2} ${noun}</h1>`;
  domString +=  `</div>`;
  domString += `</div>`;
  printToDom(domString);
};

const printToDom = (haha) => {
  outputDiv.html(haha);
};

module.exports = writeDom;
