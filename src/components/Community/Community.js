import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Contributor from '../Contributor/Contributor';
import './Community.css';

const Community = () => {

    // declare useState
    const [contributors, setContributors] = useState([]);
    const [cart, setCart] = useState([]);

    // useEffect for fatching data
    useEffect(() => {
        fetch('./contributors.JSON')
        .then(res => res.json())
        .then(data => setContributors(data))
    }, []);

    // add contributors to the cart
    const handleAddToCommittee = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    }

    // count the total contributions
    const countTotal = members => {
        return members.reduce((previous, current) => previous + current.contributions, 0);
    }

    return (
        <div>
            <div className="community-container">
                <div className="community-intro">
                    <h1>Our Programming Community</h1>
                    <h2>Total Contribution: {countTotal(contributors)}</h2>
                </div>
                <div className="our-contributors">
                    <div className="contributors">
                        {
                            contributors.map(contributor => <Contributor
                                key={contributor.id}
                                contributor={contributor}
                                handleAddToCommittee={handleAddToCommittee}
                            ></Contributor>)
                        }
                    </div>
                    <div className="committee">
                        <h3>Our Committee</h3>
                        <h4>Members Added: {cart.length}</h4>
                        <h4>Members Contributions: {countTotal(cart)}</h4>
                        {
                            cart.map(contributor => <Cart contributor={contributor}></Cart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;