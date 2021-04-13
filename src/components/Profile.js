import './styles/Profile.css';
import React, { Component } from "react";
import Logo from '../logo.png';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {UserData} from './UserData';
import { Icon } from 'semantic-ui-react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: UserData[this.props.match.params.id]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className="page">
                <div className="navBar">
                    <img className="logo" src={Logo} />
                    <Link to="/" className="welcome">Back to Welcome Page</Link>
                </div>
                <Row>
                    <Col xs lg="4">
                        <h1>{this.state.user.name}</h1>
                        <h3 className="major">{this.state.user.major}</h3>
                        <h3 className="year">{this.state.user.year}</h3>
                        <h3 className="job">{this.state.user.job}</h3>
                        {this.state.user.socials.map((social, key) => {
                            var link = '';
                            if (social.facebook) {
                                link = social.facebook;
                            } else if (social.linkify) {
                                link = social.linkify;
                            } else if (social.github) {
                                link = social.github;
                            } else if (social.instagram) {
                                link = social.instagram;
                            } else if (social.facebook) {
                                link = social.facebook;
                            } else if (social.twitter) {
                                link = social.twitter;
                            } else if (social.linkedin) {
                                link = social.linkedin;
                            }
                            var icon = (
                                <a rel={'external'} href={link} target="_blank">
                                    <Icon name={social}></Icon>
                                </a>
                            )
                            return icon
                        })}
                        <img className="profilepicture" src={process.env.PUBLIC_URL + "/images/" + this.state.user.image} width="100%"/>
                    </Col>
                    <Col> 
                        <h3><i>{this.state.user.welcome}</i></h3>
                        <h3>Tell us about yourself</h3>
                        <h5>{this.state.user.q1}</h5>
                        <h3>What inspires you to continue in your major field of study?</h3>
                        <h5>{this.state.user.q2}</h5>
                        <h3>What advice do you want to share with the next generation of female CoC students? </h3>
                        <h5>{this.state.user.q3}</h5>
                        <h3>What do you wish you did as a 1st year student if you could go back? </h3>
                        <h5>{this.state.user.q4}</h5>
                        <h3>Where are the best places to build community among women in computing? </h3>
                        <h5>{this.state.user.q5}</h5>
                        <h3>What resources have you used at GT as a student? </h3>
                        <h5>{this.state.user.q6}</h5>
                        <h3>General Advice (Examples - field trips to Cookout, get a donut from Sublime) </h3>
                        <h5>{this.state.user.q7}</h5>
                    </Col>
                </Row>
                <br />
            </div>
        )
    }
}

export default Profile;