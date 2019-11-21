import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';


const ModalPopup = ({
    show,
    id,
    name,
    email,
    city,
    number,
    website,
    companyName,
    handleClose,
    saveChanges
}) => {
    let user = {
        id,
        name,
        email,
        city,
        number,
        website,
        companyName
    };

    const onChange = (e) => {
        user[e.currentTarget.id] = e.currentTarget.value;
    };

    const getValue = () => {
        saveChanges({ ...user });
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <input type="hidden" value={id} />
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" defaultValue={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" defaultValue={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" placeholder="City" defaultValue={city} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone Number</label>
                        <input type="text" className="form-control" id="number" placeholder="Phone Number" defaultValue={number} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input type="text" className="form-control" id="website" placeholder="Website" defaultValue={website} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" className="form-control" id="companyName" placeholder="Company Name" defaultValue={companyName} onChange={onChange} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={getValue}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

ModalPopup.propTypes = {
    show: PropTypes.bool,
    name: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string,
    website: PropTypes.string,
    companyName: PropTypes.string,
    handleClose: PropTypes.func,
    saveChanges: PropTypes.func
}

export default ModalPopup;
