global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function requestAnimationFrame(cb) {
    return setTimeout(cb, 0);
  };

// const Enzyme = require('enzyme');
// import Adapter from '@cfaester/enzyme-adapter-react-18';
// console.log(Adapter, 'Adapter');
// Enzyme.configure({ adapter: new Adapter() });
