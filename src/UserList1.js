import React, { Component } from 'react'

export default class UserList extends Component {
    render() {
        const {movieId,profiles,users} = this.props;
        const userlist = Object.values(users)
        const UsersListData = profiles.filter(profile=>
            Number(profile.favoriteMovieID) === movieId);
if(UsersListData===0)
{
    return <p>None of the current users liked this movie</p>
}
        return (
            <ol >
                {UsersListData.map(profile=>(
                    <li key={profile.id}>
                        {users[profile.userID].name}
                    </li>
                ))}
            </ol>
        )
    }
}
