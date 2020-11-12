import React from 'react';

const Home = ({ handleLogout }) => {

    return (
        <div className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>logout</button>
            </nav>
            
        </div>
    )
}

export default Home
