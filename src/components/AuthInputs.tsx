import { useState } from 'react';

import { styled } from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

// Transient props (prefixed with $) are used to pass props to styled components
// without adding them to the DOM element's attributes.
interface LabelProps {
  $invalid: boolean;
}

const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? '#f87171' : '#6b7280')};
`;

interface InputProps {
  $invalid: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;

  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  ${({ $invalid }) =>
    $invalid
      ? `
  color: #ef4444;
  border-color: #f73f3f;
  background-color: #fed2d2;
  `
      : `
  color: #374151;
  border: 1px solid transparent;
  background-color: #d1d5db;
  `}
`;

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
        <p>
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
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
