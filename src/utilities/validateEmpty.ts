export const validateEmpty = (val: string, msg?: string): string | null => {
  //verify that no exits msg of validation
  if (!msg) msg = "El campo es requerido";

  //validate
  if (!val.trim()) {
    return msg;
  }
  return null;
};

