import { Formik, Form, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox"
import Radio from "./components/Radio"
import Select from "./components/Select"
import TextInput from './components/TextInput'

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (values.email.length < 5) {
    errors.email = "El email es muy corto";
  }

  if(!values.radio) {
    errors.radio = 'Requerido'
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "", chancho: "", radio: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br />
        <TextInput name="lastname" label="Apellido" />
        <br />
        <TextInput name="email" label="Email" />
        <Select label='Tipo de Chancho' name='chancho'>
          <option value=''>Seleccione Chancho</option>
          <option value='Felipe'>Felipe</option>
          <option value='Chanchito Feliz'>Chanchito Feliz</option>
          <option value='Chanchito Triste'>Chanchito Triste</option>
        </Select>
        <Checkbox name='accept'>
          Aceptar términos y condiciones
        </Checkbox>
        <Radio name='radio' value='chanchito 1' label='chanchito 1' />
        <Radio name='radio' value='chanchito 2' label='chanchito 2' />
        <Radio name='radio' value='chanchito 3' label='chanchito 3' />
        <ErrorMessage name="radio" />
        <br />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App