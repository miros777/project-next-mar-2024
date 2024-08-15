import React, {createElement} from 'react';
import {servicesUser} from "@/services/api.services";

const UserInfoComponent = async () => {
    const userInfo = await servicesUser.getUserInfo();
    console.log(userInfo);
    return (
        <div>
            <div>id: {userInfo.id} </div>
            <div>
                {  createElement("img",
                {src: "https://image.tmdb.org/t/p/w500" + userInfo.avatar.tmdb.avatar_path,
                    width: 100}
                    )
                }
            </div>
            <div>hash: {userInfo.avatar.gravatar.hash} </div>
            <div>iso_639_1: {userInfo.iso_639_1} </div>
            <div>iso_3166_1: {userInfo.iso_3166_1} </div>
            <div>name: {userInfo.name} </div>
            <div>include_adult: {userInfo.include_adult} </div>
            <div>username: {userInfo.username} </div>
        </div>
    );
};

export default UserInfoComponent;