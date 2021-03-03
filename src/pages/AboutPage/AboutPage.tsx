import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage = () => {
    const history = useHistory();
    return (
        <>
            <h2>ABOUT PAGE!</h2>
            <button className="btn" onClick={() => history.push('/')}>Back to TODO List</button>
        </>
    )
}

export default AboutPage;