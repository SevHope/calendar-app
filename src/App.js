import logo1 from './logo1.png';
import './App.css';
import { Form, InputGroup, Button, FloatingLabel, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useState } from 'react';
import eyeFill from './eye-fill.svg';
import eyeSlash from './eye-slash.svg';

function App() {
  const [selectedRadio, setSelectedRadio] = useState('1');
  const [showPassword, setShowPassword] = useState(false);

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  const radios = [
    { name: 'RU', value: '1' },
    { name: 'EN', value: '2' },
  ];

  return (
    <div>
    <div className="row justify-content-center pt-5">
    <div className="col-sm-3 text-center">
        <img className='app-logo' src={logo1} alt="logo"></img>
        <h2 style={{fontWeight: 400, marginTop: '30px'}}>Вход в Sirius Future</h2>
        </div>
        </div>
        <div className="row justify-content-center pt-2">
        <div className="col-sm-3">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel></FloatingLabel>
        <Form.Control type="email" placeholder="E-mail" />
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
      <InputGroup>
        <Form.Control style={{borderRight: 'none' }} type={showPassword ? "text" : "password"} placeholder="Пароль" />
        <Button variant="outline-secondary" style={{ border: '1px solid #DEDEDE', borderLeft: 'none', }} onClick={() => setShowPassword(!showPassword)}>
        <img src={eyeSlash} alt="hidePassword"></img>
        </Button>
      </InputGroup>
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Запомнить меня" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button className='submitButton' type="submit" size="lg">
        Войти
      </Button>
      <div className="row justify-content-around">
      <div className="col">
        <a href='#' style={{textDecoration: 'none'}}>Я забыл пароль</a>
        </div>
        <div className="col-sm-5">
        <a href='#' style={{textDecoration: 'none'}}>Войти как тренер</a>
        </div>
      </div>
      </div>
    </Form>
    <div className="row pt-5">
      <div className="col text-center">
        <p>Нет аккаунта?</p>
        <a href='#' style={{textDecoration: 'none'}}>Зарегистрироваться</a>
        </div>
      </div>
      <div className="row justify-content-center pt-5">
      <div className="col text-center">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'light outline-light'}
            name="radio"
            value={radio.value}
            checked={selectedRadio === radio.value}
          onChange={(e) => handleRadioChange(e.currentTarget.value)}
          style={{ 
            fontSize: selectedRadio === radio.value ? '1.2em' : '0.8em',
            color: selectedRadio === radio.value ? 'purple' : 'grey',
            backgroundColor: 'white',
            border: 'none' }}
        >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
