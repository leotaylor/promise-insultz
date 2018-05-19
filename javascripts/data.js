let nouns = [];
let descriptors = [];

const descriptorsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject('you suck at this', err);
      });
  });
};

const nounsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject('you suck at this', err);
      });
  });
};

// const getAllData = () => {
//   descriptorsJSON().then((results) => {
//     return nounsJSON();
//   }).then((results) => {
//     // dom.writeDom(results);
//   }).catch((error) => {
//     console.error('error:', error);
//   });
// };

const getAllData = () => {
  return Promise.all([nounsJSON(), descriptorsJSON(),])
    .then((results) => {
      nouns = results[0];
      descriptors = results[1];
    })
    .catch((err) => {
      console.error('oh farts!:', err);
    });
};

const initializer = () => {
  getAllData();
};

const getNouns = () => {
  return nouns[Math.floor(Math.random() * nouns.length)].text;
};

const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};

module.exports = {
  initializer,
  getDescriptors,
  getNouns,
};
