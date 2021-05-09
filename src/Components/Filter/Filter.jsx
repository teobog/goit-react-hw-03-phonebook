import React from 'react';

const Filter = ({filtering, filter}) => {
    return (
        <input
            type="text"
            name="filter"
            onChange={filtering}
            value={filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
        />
    );
};

export default Filter;
