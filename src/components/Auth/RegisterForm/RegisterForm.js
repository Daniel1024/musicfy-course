import { Button, Icon, Form, Input } from 'semantic-ui-react';
import { auth } from '../../../utils/Firebase';

import './RegisterForm.scss';

export default function RegisterForm({ setSelectedForm }) {
  const onSubmit = () => {
    console.log('Formulario enviado');
  };

  return (
    <div className="register-from">
      <h1>Empieza a escuchar con una cuenta de Musify gratis.</h1>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            icon="mail outline"
            // onChange={}
            // error={}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            icon="eye"
            // onChange={}
            // error={}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="¿Como deberiamos llamarte?"
            icon="user circle outline"
            // onChange={}
            // error={}
          />
        </Form.Field>
        <Button type="submit">Continuar</Button>
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
