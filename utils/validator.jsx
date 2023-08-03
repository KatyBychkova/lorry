export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired": {
        statusValidate = data.trim() === "";

        break;
      }
      case "isTel": {
        const emailRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      case "isName": {
        const emailRegExp = /^(([a-zA-Zа-яА-я]+)\s){1,}(([a-zA-Zа-яА-я]+)\s?){1,}$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
    // function validate возвращает:
    // СООБЩЕНИЕ ОБ ОШИБКЕ - если строка ввода пустая
    // или
    // undefined
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
      if (error && !errors[fieldName]) {
        errors[fieldName] = error; // errors.email = "Электронная почта обязательна для заполнения"}
      }
    }
  }
  return errors;
}

// function validator возвращает объект
// errors = {
//     email: "Электронная почта обязательна для заполнения",
//     password: "Пароль обязателен для заполнения"
// };
