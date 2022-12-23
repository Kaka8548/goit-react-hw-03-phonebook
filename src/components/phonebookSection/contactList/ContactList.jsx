import { ItemBtn, List, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export default function ContactList({
  contacts,
  filteredContacts,
  onDeleteBtnClick,
}) {
  const listArray = filteredContacts ? filteredContacts : contacts;
  return (
    <>
      <List>
        {listArray.map(el => (
          <ListItem key={el.id}>
            <p>
              {el.name}: {el.number}
            </p>
            <ItemBtn type="button" onClick={() => onDeleteBtnClick(el.id)}>
              Delete
            </ItemBtn>
          </ListItem>
        ))}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filteredContacts: PropTypes.array.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};
