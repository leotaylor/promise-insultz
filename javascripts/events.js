const dom = require('./dom');
const data = require('./data');

const buttonEvent = () => {
  $('#rude').click(() => {
    dom(data.getDescriptors(), data.getDescriptors(), data.getNouns());
  });
};

module.exports = buttonEvent;
