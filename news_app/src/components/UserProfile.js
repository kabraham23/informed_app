import React, { Component } from 'react';

class UserProfile extends Component {

    render() {
        return (
            <div>
                <div id="profile">
                    <h2>User Profile</h2>
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                </div>
                <div id="bookmarks">
                    <h2>Bookmarked Articles</h2>
                    <ul>
                        {/* {this.users.bookmarks.map((item) => {
                            return (
                                <li>
                                    <h3>{data.title}</h3>
                                    <small>{data.source.name}</small>
                                </li>
                            )
                        
                        })} */}
                    </ul>
                </div>
                
            </div>
        )
    }

}

export default UserProfile;