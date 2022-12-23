import { FilterTitle } from './Filter.styled';
import PropTypes from 'prop-types';

export default function FilterByName({ handleChange }) {
  return (
    <>
      <FilterTitle>Filter contacts by name</FilterTitle>
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </>
  );
}

FilterByName.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
