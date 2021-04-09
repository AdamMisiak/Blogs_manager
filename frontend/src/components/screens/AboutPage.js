import React from 'react';
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
    </div>
    )
}

export default AboutPage;
