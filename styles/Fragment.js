import styled from 'styled-components';



export const SimpleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

export const Text = styled.div`
  width: 340px;
  font-size: 25px;
  color: ${({ theme }) => theme.gray1};
`;
