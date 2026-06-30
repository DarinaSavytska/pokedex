import { InputHTMLAttributes } from 'react';
import * as S from './styled';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => <S.Input {...props} />;
