import React from 'react'
import { Link } from 'react-router-dom'

export default function ContentModal() {
    return (
        <div class="alert alert-danger text-center" role="alert">
            You Have Not Signined. Please Signin First To Access This Page. <Link to="../signin" class="alert-link">Sign In</Link>
        </div>
    )
}
