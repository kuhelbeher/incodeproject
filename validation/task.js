const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validatePostInput(data) {
  const errors = {};

  const title = !isEmpty(data.title) ? data.title : '';
  const description = !isEmpty(data.description) ? data.description : '';

  if (!Validator.isLength(title, { min: 4, max: 50 })) {
    errors.title = 'Title must be between 4 and 50 characters';
  }

  if (Validator.isEmpty(title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.isLength(description, { min: 10, max: 300 })) {
    errors.description = 'Description must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(description)) {
    errors.description = 'Description field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
