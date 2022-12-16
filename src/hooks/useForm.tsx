import { useEffect, useState } from 'react';
import eventType from '../interface/event';
export function UseForm<T>(
  initialForm: T,
  validateForm: (form: T) => {},
  apiCall: (form: T) => Promise<boolean | undefined>,
  idUser?: number,
  refreshData?: (id: number) => void
) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({} as T | any);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [msg, setMsg] = useState('Ha ocurrido un error');

  const handleSend = async (form: T) => {
    setLoading(true);
    const res = await apiCall(form);
    if (res) {
      setMsg('El proceso fue exitoso');
      if (refreshData && idUser) await refreshData(idUser); //if exits i need that you exec
    }
    setLoading(false);
    setResponse(true);
    setTimeout(() => setResponse(false), 3000);
    setForm(initialForm); //if we what cleam
  };

  const handleChange = (e: eventType['change']) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [effects, setEffects] = useState(false);
  useEffect(() => {
    if (effects) {
      if (Object.keys(errors).length === 0) {
        handleSend(form);
      }
    }
    setEffects(true);
  }, [errors]);

  const handleSubmit = (e: eventType['submit']) => {
    e.preventDefault();
    setErrors(validateForm(form));
  };
  return {
    form,
    errors,
    loading,
    response,
    msg,
    handleChange,
    handleSubmit,
  };
}
