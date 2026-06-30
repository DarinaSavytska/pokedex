import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styled';
import { ButtonType } from './types';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonType;
}

export const Button: React.FC<IButton> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);
