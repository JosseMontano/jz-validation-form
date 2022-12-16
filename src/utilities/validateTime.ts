export const validateTime = (
  val: string,
  mRequired?: string
): string | null => {
  if (!mRequired) mRequired = 'Este campo esta en formato incorrecto';

  let regexTime = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]:[0-5][\d]$/;
  if (!regexTime.test(val.trim())) {
    return mRequired;
  }
  return null;
};
