const rp = require('request-promise');
const amphtmlValidator = require('amphtml-validator');

const validator = {

  init: (url) => {
    rp(url)
    .then((html) => {
      amphtmlValidator.getInstance().then((validator) => {
        const result = validator.validateString(html);
        console.log(result);

      }, (err) => {
        console.log('AMP ERROR');
        console.log(err);
      })
    }, (err) => {
      console.log('REQUEST ERROR');
      console.log(err);
    })
  },

  ampResults: (results) => {
    if (ValidationResult.status === 'FAIL') {
      console.log(results)
      // break build
      process.exit(1);
    } else {
      console.log('GOOD TO GO')
    }
  }

}

validator.init(process.env.url);

exports.module = validator;
