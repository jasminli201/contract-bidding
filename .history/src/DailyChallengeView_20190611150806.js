import React, { Component } from 'react';
import firebase from 'firebase'
import { Table, Divider, Tag } from 'antd';
import { Card, Col, Row } from 'antd';



class DailyChallengeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.mapChallenges = this.mapChallenges.bind(this);

    }
    componentDidMount() {
        var date = new Date();
        var time = date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();


        const challengeRef = firebase.database().ref('challenges/');
        challengeRef.on('value', (snapshot) => {
            let challenges = snapshot.val();
            let newState = [];
            for (let challenge in challenges) {
                newState.push({
                    key: time,
                    company: challenges[challenge].company,
                    contact: challenges[challenge].contact,
                    name: challenges[challenge].name,
                    challenge: challenges[challenge].challenge
                });

            }
            console.log(newState)
            this.setState({ data: newState })

        }
        )
    }
    mapChallenges = () => {
        let eachChallenge = this.state.data

        return eachChallenge.map(
            (challenge) => {
                return <div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title={challenge.name} bordered={false}>
                                <p>Company: {challenge.company}</p>
                                <p>Contact: {challenge.contact}</p>
                                <p>Challenge: {challenge.challenge}</p>
                            </Card>

                        </Col>

                    </Row>
                    <br />
                    {/* <Card title={challenge.name} style={{ width: 300 }}>
                        <p>{challenge.company}</p>
                        <p>Contact: {challenge.contact}</p>
                        <p>{challenge.challenge}</p>
                    </Card>  */}


                </div>
            }
        )
    }







    render() {

        return (
            <div>

                {this.mapChallenges()}


            </div>


        )
    }

}


export default DailyChallengeView                                                                                                                                      