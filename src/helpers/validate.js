const validate = (values) => {
  const errors = {};

  const nameTest = /[a-zA-Zа-яА-Я]+(\s|\-)[a-zA-Zа-яА-Я]+/g;

  if (!values.name) {
    errors.name = "Поле не должно быть пустым";
  } else if (!nameTest.test(values.name)) {
    errors.name = "Введено не корректное значение  ";
  }

  const emailTest = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!values.email) {
    errors.email = "Поле не должно быть пустым";
  } else if (!emailTest.test(values.email)) {
    errors.email = "Введено не корректное значение  ";
  }

  const phoneTest = /\+?[1-9]((\(\d{3}\)\s?-?\d{3}\s?-?\d{2}\s?-?\d{2})|\d{10})/g;

  if (!values.phone) {
    errors.phone = "Поле не должно быть пустым";
  } else if (!phoneTest.test(values.phone)) {
    errors.phone = "Введено не корректное значение  ";
  }

  return errors;
};

export default validate;
