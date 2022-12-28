import React from 'react'

function NotFound() {
  return (
    <div className="login">
    <div className="form-container">
        <h1 className="title">404!</h1>
        <p className="subtitle">Ooops! Page not found</p>

        <p className="resend">
            <a href="/">Return to main page</a>
        </p>
    </div>
</div>
  )
}

export default NotFound