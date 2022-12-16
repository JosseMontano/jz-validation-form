export const validateNumber = (
  val: string,
  mRequired?: string,
  mValidate?: string
): string | null => {
  if (!mRequired) mRequired = "Este campo es requerido";
  if (!mValidate) mValidate = "Este campo sólo acepta numeros";

  let regexNumber = /^[0-9]+$/;
  if (!val.trim()) {
    return mRequired;
  } else if (!regexNumber.test(val.trim())) {
    return mValidate;
  }
  return null;
};
