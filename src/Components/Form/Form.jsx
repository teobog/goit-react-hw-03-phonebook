import React, {Component} from 'react';

class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    checkInput = (e) => {
        const {name, value}  = e.target
        this.setState({[name]: value})
    }
    submit = (e) => {
        e.preventDefault()
        this.props.addContact(this.state)
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type="text"
                    name="name"
                    onChange={this.checkInput}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
                <input
                    type="text"
                    name="number"
                    onChange={this.checkInput}
                    required
                />

                <button type="submit">Add Contact</button>
            </form>
        );
    }
}

export default Form;