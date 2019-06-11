import React, { Component } from 'react';
import firebase from './firebase'
import { Input, Button, PageHeader } from 'antd';


const { TextArea } = Input;



class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            challenge: '',
            id: ''


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);



    }

    handleClick() {
        const challengeRef = firebase.database().ref('challenges/');
        var date = new Date();
        var time = date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

        this.setState(state => ({
            id: time,
            name: state.name,
            company: state.company,
            contact: state.contact,
            challenge: state.challenge,

        }));
        challengeRef.push(this.state)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (
            <div>
                <PageHeader onBack={() => null} title="Daily Challenge Submission" />
                <br />
                <br />
                <br />


                <Input key={this.state.id} value={this.state.company} name='company' placeholder="Please Enter Company Name" onChange={this.handleChange} />
                <Input key={this.state.id} value={this.state.name} name='name' placeholder="Please Enter Challenge Name" onChange={this.handleChange} />
                <Input key={this.state.id} value={this.state.contact} name='contact' placeholder="Please Enter Contact Info" onChange={this.handleChange} />
                <TextArea value={this.state.challenge} rows={6} name='challenge' placeholder="Please Enter Challenge" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Daily Challenge Information</Button>
            </div>

        )
    }
}
export default Challenge