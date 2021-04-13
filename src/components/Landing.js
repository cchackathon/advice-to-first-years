import './styles/Landing.css';
import React, { Component } from "react";
import Leadspace from '../Leadspace.png';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import CardColumns from 'react-bootstrap/CardColumns';
import { Icon } from 'semantic-ui-react';
import {UserData} from './UserData';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: UserData
        };
    }

    render() {
        return (
            <div className="container">
                <div className="imageContainer" >
                    <img className="leadspace" src={Leadspace}  />
                    <h1 className="header-title">Welcome First Years</h1>
                    <p className="header">Here's some advice from students like you!</p>
                </div>
                <div className="cardContainer">
                    <CardColumns>
                    {this.state.users.map((user,key) => {
                        var image = process.env.PUBLIC_URL + "/images/" + user.image;
                        var card = (
                            <Card>
                                <Card.Img src={image}/>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="name">{user.name}</Card.Title>
                                    <Card.Title className="major">{user.major}</Card.Title>
                                    <Card.Title className="year">{user.year}</Card.Title>
                                    <Card.Text className="quote">
                                    {user.quote}
                                    </Card.Text>
                                    <Link to={{pathname: `/profile/${key}`}} className="align-self-end">
                                    More Info   
                                    <Icon name='arrow right'></Icon>
                                    </Link>
                                </Card.Body>
                            </Card>
                        );
                        return card
                    })}
                    </CardColumns>
                    
                </div>
            </div>
        )
    }
}

export default Landing;