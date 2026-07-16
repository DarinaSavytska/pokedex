import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: darkgray;
  display: flex;
  gap: 25px;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  position: fixed;
  width: 100%;
  z-index: 1;

  a {
    text-decoration: none;
    background-color: gray;
    padding: 5px 10px;
    border-radius: 25px;
  }
`;

export const Tab = styled.div`
  color: white;
`;
