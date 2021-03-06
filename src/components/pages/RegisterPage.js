import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Phone number</label><br/>
                    <input type="number" name="phone_no" required />
                </p>
                <p>
                    <label>Birthday</label><br/>
                    <input type="date" name="phone_no" required />
                </p>
                {/* <p>
                <label>Choose your gender:</label>
                <label for="male">Male</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="female">Female</label>
                <input type="radio" name="gender" id="female" value="female">
                </p> */}

                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="confirm_password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
