import styled from 'styled-components';

export const Autorization = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 500px;
  gap: 30px;
`;

export const PasswordField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-bottom: 10px;
`;

export const Error = styled.p`
  position: absolute;
  text-align: end;

  font-size: 14px;
  margin: 0;
  top: 100%;
  right: 5px;

  color: red;
`;
