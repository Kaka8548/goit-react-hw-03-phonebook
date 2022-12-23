import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: disc;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  & + & {
    margin-top: 15px;
  }
`;

export const ItemBtn = styled.button``;
