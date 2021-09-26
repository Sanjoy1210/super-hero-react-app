import React from 'react';
import './Contributor.css'

const Contributor = (props) => {

    const {name, age, profession, img, contributions, company, address} = props.contributor;

    return (
        <div className="contributor">
            <div className="contributor-img">
                <img src={img} alt={name} />
            </div>
            <div className="contributor-details">
                <h3>{name}</h3>
                <p>Age: {age}</p>    
                <p>Role: {profession}</p>
                <p>Contributions: {contributions}</p>
                <p>Company: {company}</p>
                <p>Address: {address}</p>
            </div>
            <div className="contributor-footer">
                <button 
                    className="add-btn" 
                    onClick={() => props.handleAddToCommittee(props.contributor)}
                ><i className="fas fa-cart-arrow-down"></i> Add to Committee</button>
            </div>
        </div>
    );
};

export default Contributor;