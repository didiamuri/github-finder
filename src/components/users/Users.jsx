import React, { Component, Fragment } from 'react';
import '../css/App.css';

const Users = ({ users, loading }) => {
    return (
        <Fragment>
            <div className="row mt-75">
                {users.map((user) =>
                    <div key={user.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="avatar">
                                    {/* <img src={user.avatar_url} alt="" /> */}
                                </div>
                                <p>{user.login}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default Users
