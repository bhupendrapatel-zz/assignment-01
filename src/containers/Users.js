import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import { getUsers, updateUser } from '../actions';
import { fetchUsers } from '../utils/users.table';
import ModalPopup from '../components/Modal';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
        this.modalRef = null;
        this.showModalPopup = this.showModalPopup.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount() {
        fetchUsers().then((users) => {
            this.props.getUsers(users);
        })
    }

    showModalPopup(user) {
        this.setState({
            showModal: true,
            ...user
        });
    }

    handleClose() {
        this.setState({
            showModal: false
        });
    }

    saveChanges(user) {
        this.setState({
            showModal: false
        });
        this.props.updateUser(user);
    }

    render() {
        const { showModal, id, name, email, city, number, website, companyName } = this.state;
        const { users } = this.props;
        return (
            <div className="container">
                <div className="row mt-2 mb-2">
                    {users.length > 0 && (
                        users.map((user) => {
                            return (
                                <User
                                    key={`user-${user.id}`}
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    city={user.address && user.address.city}
                                    number={user.phone}
                                    website={user.website}
                                    companyName={user.company && user.company.name}
                                    onDoubleClick={this.showModalPopup}
                                />
                            )
                        })
                    )}
                    {users.length <= 0 && (
                        <div className="spinner-wrapper">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
                <ModalPopup
                    show={showModal}
                    id={id}
                    name={name}
                    email={email}
                    city={city}
                    number={number}
                    website={website}
                    companyName={companyName}
                    handleClose={this.handleClose}
                    saveChanges={this.saveChanges}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { users } = state;
    return { users }
}

const mapDispatchToProps = {
    getUsers,
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
