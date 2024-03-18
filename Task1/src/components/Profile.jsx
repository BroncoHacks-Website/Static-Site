import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/public/vite.svg'
import './App.css'

function Profile() {
    return(
        <div class="group-profiles">
            <div class="profile">
                <div class="pfp">
                    <a href="https://github.com/mmisaacs">
                        <img src="https://media.licdn.com/dms/image/D5603AQGjSBx4E4Xt7Q/profile-displayphoto-shrink_400_400/0/1695641137358?e=1716422400&v=beta&t=gbne4U3gATTobEeZR-hqi9looaEpzh9IxCvcVWGPsN0"/>
                    </a>
                </div>
                <p class="name">Maddie Isaacs</p>
                <p class="major">Computer Science</p>
                <p class="year">Second Year</p>
            </div>
        </div>
    )
}

export default Profile