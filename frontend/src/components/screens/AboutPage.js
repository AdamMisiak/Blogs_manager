import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/About.css";
import '../../styles/Filters.css';
import "../../styles/Pagination.css";
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';

function AboutPage() {

    return (
    <div className='about-page'>
        <Showcase />
        <Breadcrumb 
            current='About'
        />
        <div className="about jumbotron">
            <h1 className="display-4">Blogs manager</h1>
            <p className="lead">
                Blog manager is a simple app where you can follow your favourite blogs. <br></br>
            </p>
            <hr className="my-3"></hr>
                Things you can do in app:<br></br>
                - Create an account<br></br>
                - Subscribe couple of favourite blogs<br></br>
                - Search for blog posts in database<br></br>
                - Get an email when new post is released<br></br>
                - Change settings of email newsletter<br></br>
                - Send us another blogs you want us to add<br></br>
            <hr className="my-3"></hr>
                Email notification types:<br></br>
                - Instant mail - Email will be send when new blog post appears - email will contains information about one blog post<br></br>
                - Daily summary mail - Email will be send at 8 pm every day - email will contains information about all blog post from one day<br></br>
                - Weekly summary mail - Email will be send at 8 pm at Sunday - email will contains information about all blog post from one week<br></br>
        </div>
    </div>
    )
}

export default AboutPage;
