# JZ-Validation-Form

This is a packet that have validation with hooks, the proyect was created with typescript and the dependencies
that has are:
  - Styled Component

# EXAMPLE
## Interface
```
export interface FormRecuperateAccount {
  email: string;
  password: string;
  secrect_password: string;
  age: string;
  time: string;
  date: string;
  lastName: string;
}
```
## Initialize the form data
```
export const initialForm: FormRecuperateAccount = {
  email: '',
  password: '',
  secrect_password: '',
  age: '',
  time: '',
  date: '',
  lastName: '',
};
```


## Do the validation
```
import {
  validateEmail,
  validateNumber,
  validateEmpty,
  validateTime,
  validateDate,
  validateText,
} from 'js-validation-form';
```

```
const validationsForm = (form: FormRecuperateAccount) => {
  let errors = {} as FormRecuperateAccount;

  const email = validateEmail(form.email);
  if (email) errors.email = email;

  const password = validateEmpty(form.password);
  if (password) errors.password = password;

  const secrectPassword = validateEmpty(form.secrect_password);
  if (secrectPassword) errors.password = secrectPassword;

  const age = validateNumber(form.age);
  if (age) errors.age = age;

  const time = validateTime(form.time);
  if (time) errors.time = time;

  const date = validateDate(form.date);
  if (date) errors.date = date;

  //the field accepts empty and if send anything, have that be just string
  if (form.lastName != '') {
    const lastName = validateText(form.lastName);
    if (lastName) errors.lastName = lastName;
  }
  return errors;
};
```

## Service
```
export const recuperateAccount = async (form: FormRecuperateAccount) => {
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
```

## JSX.Element
```
import {  UseForm, Button, Input, Label, MsgError, TextArea} from 'js-validation-form';
```

```
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
          <Label>{v.label}</Label>
          <Input
            type="text"
            name={v.name}
            onChange={handleChange}
            value={v.value}
            required
          />
          {v.errors && <MsgError>{v.errors}</MsgError>}
        </div>
      ))}

      <Button ColorBtn='#a4bbf5' onClick={() => handleSubmit}>Recuperar</Button>

      {loading && <p>LOADING</p>}
      {response && <p>{msg}</p>}
    </form>
  );
};
```