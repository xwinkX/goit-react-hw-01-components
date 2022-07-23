import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;

export const Span = styled.span`
  width: 1em;
  height: 1em;
  margin: 1em;

  background: ${({ isOnline }) => (isOnline ? 'chartreuse' : 'red')};
  border-radius: 50%;
`;
export const P = styled.p`
  margin-left: 1em;
`;
