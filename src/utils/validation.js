// https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/components/SurveyForm/surveyValidation.js
const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules
  .map(rule => rule(value, data))
  .filter(error => !!error)[0/* first error */];

export function email(value) {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return null;
}

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
  return null;
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
    return null;
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
    return null;
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  }
  return null;
}

export function url(value) {
  const regexUrl = new RegExp(['(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)',
    '(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])',
    '(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}',
    '(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|',
    '(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)',
    '(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*',
    '(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)',
    '(?::\d{2,5})?(?:[/?#]\S*)?$'].join(''), 'i');

  if (!isEmpty(value) && !regexUrl.test(value)) {
    return 'Invalid url';
  }
  return null;
}

export function oneOf(enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
    return null;
  };
}

export function match(field) {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
    return null;
  };
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      // concat enables both functions and arrays of functions
      const rule = join([].concat(rules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
