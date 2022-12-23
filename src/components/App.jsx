import { Component } from 'react';
import ContactList from './phonebookSection/contactList/ContactList';
import { ContactForm } from './contactForm/ContactForm';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = async () => {
    const listLength = await JSON.parse(
      localStorage.getItem('contact-list').length
    );
    if (listLength > 0) {
      try {
        this.setState({
          contacts: JSON.parse(localStorage.getItem('contact-list')),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  componentDidUpdate = (_, prevState) => {
    const { contacts } = this.state;

    if (prevState.contacts.length !== contacts.length) {
      try {
        localStorage.setItem('contact-list', JSON.stringify(contacts));
      } catch (error) {
        console.log(error);
      }
    }
  };

  addContact = (name, number) => {
    const isInContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      const nameId = nanoid();

      return {
        contacts: [
          ...prevState.contacts,
          { name: name, number: number, id: nameId },
        ],
      };
    });
  };

  getFilterQuery = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  getFilteredList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  deleteItem = itemId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== itemId),
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter handleChange={this.getFilterQuery} />
            <ContactList
              contacts={contacts}
              filteredContacts={this.getFilteredList()}
              onDeleteBtnClick={this.deleteItem}
            />
          </>
        ) : (
          <p>There are no contacts in your contact list. Try to make one.</p>
        )}
      </div>
    );
  }
}
