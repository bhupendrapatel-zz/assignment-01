import React from 'react';
import PropTypes from 'prop-types';

const User = ({
    id,
    name,
    email,
    city,
    number,
    website,
    companyName,
    onDoubleClick
}) => {
    return (
        <div key={`user-${id}`} className="col-md-4 mt-2 mb-2">
            <div className="card" onDoubleClick={() => onDoubleClick({
                id,
                name,
                email,
                city,
                number,
                website,
                companyName
            })}>
                <div className="card-header">
                    {name}
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <a href={`mailto:${email}`} target="_top">{email}</a>
                    </p>
                    <p className="card-text">
                        {city}
                    </p>
                    <p className="card-text">
                        <a href={`tel:${number}`} target="_top">{number}</a>
                    </p>
                    <p className="card-text">
                        <a href={website} rel="noopener noreferrer" target="_blank">{website}</a>
                    </p>
                    <p className="card-text">
                        {companyName}
                    </p>
                </div>
            </div>
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string,
    website: PropTypes.string,
    companyName: PropTypes.string,
    onDoubleClick: PropTypes.func
}

export default User;
