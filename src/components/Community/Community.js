import React, { useEffect, useState } from 'react';
import Contributor from '../Contributor/Contributor';
import './Community.css';

const Community = () => {

    const [contributors, setContributors] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./contributors.JSON')
        .then(res => res.json())
        .then(data => setContributors(data))
    }, []);

    const handleAddToCommittee = (member) => {
        const newCart = [...cart, member];
        console.log(newCart);
    }

    return (
        <div>
            <div className="community-container">
                <div>
                    <h1>Our Programming Community</h1>
                    <h2>Total Contribution: </h2>
                </div>
                <div className="our-contributors">
                    <div className="contributors">
                        {
                            contributors.map(contributor => <Contributor
                                contributor={contributor}
                                handleAddToCommittee={handleAddToCommittee}
                            ></Contributor>)
                        }
                    </div>
                    <div className="committee">
                        <h3>Our Committee</h3>
                        <h4>Members Added: </h4>
                        <h4>Members Contributions: </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;