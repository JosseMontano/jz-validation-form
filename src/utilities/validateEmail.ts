type S = string;
export const validateEmail = (
  val: S,
  mRequired?: S,
  mValEmail?: S
): string | null => {
  //verify that no exits msg of validation
  if (!mRequired) mRequired = 'El campo es requerido';
  if (!mValEmail) mValEmail = 'El campo es incorrecto';

  //validate
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if (!val?.trim()) {
    return mRequired;
  } else if (!regexEmail.test(val.trim())) {
    return mValEmail;
  }
  return null;
};
