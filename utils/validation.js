function Validation(data) {
  let error = {};
  const name_pattern = /^(([a-zA-Zа-яА-я]+)\s){1,}(([a-zA-Zа-яА-я]+)\s?){1,}$/g;
  const tel_pattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  if (data.name === "") {
    error.name = "Поле не должно быть пустым";
  } else if (!name_pattern.test(data.name)) {
    error.name = "Данные некорректны";
  }

  if (data.tel === "") {
    error.tel = "Поле не должно быть пустым";
  }
  if (!name_pattern.test(data.tel)) {
    error.tel = "Слишком короткий номер";
  }

  return error;
}

export default Validation;
