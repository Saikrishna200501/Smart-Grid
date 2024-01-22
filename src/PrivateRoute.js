import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const access_token = localStorage.getItem('access_token');

  if (access_token) {
    const tokenParts = access_token.split('.'); // JWTs are comprised of three parts separated by '.'
    
    if (tokenParts.length === 3) {
      const payload = JSON.parse(atob(tokenParts[1])); // Decode the base64 payload
      
      // Check if the payload contains 'exp' (expiration) and 'iat' (issued at) timestamps
      if (payload && payload.exp) {
        const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds

        // Check if the token has expired
        if (payload.exp < currentTime) {
          localStorage.removeItem('access_token'); // Remove expired token
          return false; // Token has expired
        }
        return true; // Token is valid
      }
    }
  }
  return false; // No token found or invalid structure
};


const PrivateRoutes = () => {
  const isAuth = isAuthenticated();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;