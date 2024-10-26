import { useState } from 'react';

import { styled } from 'styled-components';

import Button from './Button';
import Input from './Input';
import TextButton from './TextButton';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

// Transient props (prefixed with $) are used to pass props to styled components
// without adding them to the DOM element's attributes.

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        {/* <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            $invalid={emailNotValid}
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? 'red' : '#d1d5db',
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label
            $invalid={passwordNotValid}
            // className={`label${passwordNotValid ? ' invalid' : ''}`}
          >
            Password
          </Label>
          <Input
            $invalid={passwordNotValid}
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <TextButton type="button" className="text-button">
          Create a new account
        </TextButton>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
