import { useState } from 'react';
import { Button, Icon, Form, Input } from 'semantic-ui-react';
import { validateEmail } from '../../../utils/Validation';
import { toast } from 'react-toastify';
import firebase from '../../../utils/Firebase';
import 'firebase/compat/auth';

import './RegisterForm.scss';

export default function RegisterForm({ setSelectedForm }) {
  const [formData, setFormData] = useState(defaultValueForm());
  const [showPass, setShowPass] = useState(false);
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handlerShowPass = () => {
    setShowPass(prevState => !prevState);
  };

  const onChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const onSubmit = () => {
    setFormError({});
    const errors = {};
    let formOk = true;

    if (!validateEmail(formData.email)) {
      errors.email = true;
      formOk = false;
    }
    if (formData.password.length < 6) {
      errors.password = true;
      formOk = false;
    }
    if (!formData.username) {
      errors.username = true;
      formOk = false;
    }
    setFormError(errors);

    if (formOk) {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          changeUserName();
          sendVerificationEmail();
        })
        .catch(() => {
          toast.error('Error al crear la cuenta.');
        })
        .finally(() => {
          setIsLoading(false);
          setFormData(null);
        });
    }
  };

  const changeUserName = () => {
    firebase.auth().currentUser.updateProfile({
      displayName: formData.username,
    })
      .catch(() => toast.error('Error al asignar el nombre de usuario.'));
  };

  const sendVerificationEmail = () => {
    firebase
      .auth()
      .currentUser
      .sendEmailVerification()
      .then(() => toast.success('Se ha enviado un email de verificación.'))
      .catch(() => toast.error('Error al enviar el email de verificación.'));
  };

  return (
    <div className="register-from">
      <h1>Empieza a escuchar con una cuenta de Musify gratis.</h1>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            icon="mail outline"
            error={formError.email}
          />
          {formError.email && (
            <span className="error-text">
              Por favor, introduce un correo electronico valido
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type={showPass ? 'text' : 'password'}
            name="password"
            placeholder="Contraseña"
            icon={<Icon name={showPass ? 'eye slash outline' : 'eye'} link onClick={handlerShowPass}/>}
            error={formError.password}
          />
          {formError.password && (
            <span className="error-text">
              Por favor, elige una contraseña superior a 5 caracteres.
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="¿Como deberiamos llamarte?"
            icon="user circle outline"
            error={formError.username}
          />
          {formError.username && (
            <span className="error-text">
              Por favor, introduce un nombre
            </span>
          )}
        </Form.Field>
        <Button type="submit" loading={isLoading}>Continuar</Button>
      </Form>
      <div className="register-from__options">
        <p onClick={() => setSelectedForm(null)}>Volver</p>
        <p>
          ¿Ya tienes Musicfy? <span onClick={() => setSelectedForm('login')}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
}

function defaultValueForm() {
  return {
    email: '',
    password: '',
    username: '',
  };
}
