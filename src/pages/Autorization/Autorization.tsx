import { useState } from 'react';
// api
import { getLoginApi } from '../../api';
// components
import { Input, Button, ButtonType } from '../../components';
// styles
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

  const onSubmit = async () => {
    const isAuthorized = await getLoginApi(password);

    setAuthorization(isAuthorized.success);
    setShowError(!isAuthorized.success);
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
