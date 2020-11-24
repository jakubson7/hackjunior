import styled from 'styled-components';



export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.span`
  border: none;
  border-bottom: 4px ${({ theme }) => theme.gray3} solid;
  outline: none;
  color: ${({ theme }) => theme.gray2};
  font-size: 24px;
  min-width: 360px;
  margin-bottom: 40px;
  background-color: transparent;
`;

export const ButtonInput = styled.button`
  outline: none;
  border: 4px ${({ theme }) => theme.gray2} solid;
  width: auto;
  padding: 20px;
  color: ${({ theme }) => theme.gray2};
  background-color: transparent;
  border-radius: 16px;
  font-size: 32px;
  cursor: pointer;
`;
