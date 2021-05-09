import React from 'react';

const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map(contact => {
                return <li key={contact.id}><p>{contact.name}: {contact.number}</p>
                    <button id={contact.id} onClick={deleteContact}>Delete</button>
                </li>
            })}
        </ul>
    );
};

export default ContactList;
