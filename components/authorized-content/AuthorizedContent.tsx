import React from 'react';

type AuthorizedContentProps = {
    redirectUri:string;
    role:string;
}

const AuthorizedContent = ({redirectUri,role}:AuthorizedContentProps) => {

    // Check memory for access_token - use if present & not expired.
    /* 
        Check localStorage for refresh token. 
        if present, post to refresh endpoint to get new access token.
        Store new refresh token.
    */
    // If refresh token is missing or expired, redirect to /authorize endpoint for login.
    return (
        <></>
    );
};

export default AuthorizedContent;