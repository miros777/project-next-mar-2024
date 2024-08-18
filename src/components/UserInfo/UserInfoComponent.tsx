import React, {createElement, FC} from 'react';
import {servicesUser} from "@/services/api.services";
import styles from "./user-info-component.module.css";

const UserInfoComponent = async () => {
    const userInfo = await servicesUser.getUserInfo();
    return (
        <div className={styles.userCard}>
            <h1>Info about <span className={styles.activtColor}>{userInfo.name}</span></h1>

            <div className={styles.avatarWrapper}>
                {createElement("img",
                    {
                        src: "https://image.tmdb.org/t/p/w500" + userInfo.avatar.tmdb.avatar_path,
                        width: 220
                    }
                )
                }
            </div>
            <div className={styles.userCardText} key={userInfo.id}>
                <div><span>id:</span> <span>{userInfo.id}</span></div>
                <div><span>iso_639_1:</span> <span>{userInfo.iso_639_1}</span></div>
                <div><span>iso_3166_1:</span> <span>{userInfo.iso_3166_1}</span></div>
                <div><span>name:</span> <span>{userInfo.name}</span></div>
                <div><span>include_adult:</span> <span>{userInfo.include_adult}</span></div>
                <div><span>username:</span> <span>{userInfo.username}</span></div>
            </div>

        </div>
    );
};

export default UserInfoComponent;