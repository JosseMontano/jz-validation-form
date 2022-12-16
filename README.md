# JZ-Validation-Form

This is a packet that have validation with hooks, the proyect was created with typescript

### Jose Zambrana


## Example

```
import { UseForm } from '../.';
```


```
// * the type of the form
interface FormRecuperateAccount {
  email: string;
  password: string;
  secrect_password: string;
}

// * the form inititi empty
const initialForm = {
  email: '',
  password: '',
  secrect_password: '',
};

// * the validations of the form
const validationsForm = (form: FormRecuperateAccount) => {
  let errors = {} as FormRecuperateAccount;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  /* 
  let regexNumber = /^[0-9]+$/;
  let regexDate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
  let regexTime = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]:[0-5][\d]$/
 */
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }
  if (!form.password.trim()) {
    errors.password = "El campo 'contraseña a tratar' es requerido";
  }
  if (!form.secrect_password.trim()) {
    errors.secrect_password = 'El campo es requerido';
  }
  /*if (!regexNumber.test(form.edad.trim())) {
    errors.edad = "'Edad' sólo acepta numeros";
  }
  //the field accepts empty and if send anythin, have that be just lyrics
  if (!form.apMaterno == "") {
    if (!regexName.test(form.apMaterno.trim())) {
      errors.apMaterno = "'Materno' sólo acepta letras";
    }
  }
  //validate date
  if (!regexDate.test(form.fecha.trim())) {
      errors.fecha = "'Fecha' esta en formato incorrecto";
    }
  if (!regexTime.test(form.hora_inicio.trim())) {
        errors.hora_inicio = "'Hora inicio' esta en formato incorrecto";
      }
  
  */
  return errors;
};

// * Apiservice
const recuperateAccount = async (form: FormRecuperateAccount) => {
  try {
    const response = await fetch(`http/recuperateAccount`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        secret_password: form.secrect_password,
      }),
    });
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
    msg,
  } = UseForm<FormRecuperateAccount>(
    initialForm,
    validationsForm,
    recuperateAccount
  );

  let dataForm = [
    {
      label: 'Gmail',
      name: 'email',
      value: form.email,
      errors: errors.email,
    },
    {
      label: 'Contraseña Nueva',
      name: 'password',
      value: form.password,
      errors: errors.password,
    },
    {
      label: 'Clave secreta',
      name: 'secrect_password',
      value: form.secrect_password,
      errors: errors.secrect_password,
    },
  ];

  return (
    <form>
      {dataForm.map((v, i) => (
        <div key={i}>
          <label>{v.label}</label>
          <input
            type="text"
            name={v.name}
            onChange={handleChange}
            value={v.value}
            required
          />
          {v.errors && <p>{v.errors}</p>}
        </div>
      ))}

      <button onClick={() => handleSubmit}>Recuperar</button>

      {loading && <p>LOADING</p>}
      {response && <p>{msg}</p>}
    </form>
  );
};
```