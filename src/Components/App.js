import React, {Component} from 'react';
import ContactsList from './ContactList/ContactList'
import Form from './Form/Form'
import Filter from './Filter/Filter'
import {v4 as uuid} from 'uuid'

class App extends Component {
    state = {
        contacts: [],
        filter: ''
    }
    componentDidMount() {
        const parse = localStorage.getItem('contactArr')
        const parsedArr = JSON.parse(parse)
        if(parse){
            this.setState({contacts: parsedArr})
        }
    }

    componentDidUpdate() {
        localStorage.setItem('contactArr', JSON.stringify(this.state.contacts))
    }

    filtering = (e) => {
        const {value} = e.target
        this.setState({filter: value})
    }
    getFiltering = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    addContact = (contact) => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, {id: uuid(), ...contact}]
        }))

    }
    deleteContact = (e) => {
        const {id} = e.target
        this.setState({contacts: this.state.contacts.filter(el => el.id !== id)})
    }

    render() {
        return (
            <div>
                <Form addContact={this.addContact}/>
                <Filter filtering={this.filtering} filter={this.state.filter}/>
                <ContactsList contacts={this.getFiltering()} deleteContact={this.deleteContact}/>
            </div>
        );
    }
}

export default App;