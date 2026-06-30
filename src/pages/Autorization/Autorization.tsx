import { useState } from 'react';
import { Input, Button, ButtonType } from '../../components';
import * as S from './styled';

interface IAutorization {
  setAuthorization: (isAuthorized: boolean) => void;
}

export const Autorization: React.FC<IAutorization> = ({ setAuthorization }) => {
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    setAuthorization(password === 'test');
    setShowError(password !== 'test');
  };

  return (
    <S.Autorization>
      <div>Enter password</div>
      <S.PasswordField>
        {showError && (
          <S.Error onClick={(e) => e.stopPropagation()}>Wrong password</S.Error>
        )}
        <Input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
        />
      </S.PasswordField>
      <Button onClick={onSubmit} type={ButtonType.Button}>
        Autorize
      </Button>
    </S.Autorization>
  );
};
