export const validateText = (
  val: string,
  mRequired?: string
): string | null => {
  if (!mRequired) mRequired = 'Este campo esta en formato incorrecto';

  let regexName = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
  if (!regexName.test(val.trim())) {
    return mRequired;
  }
  return null;
};
