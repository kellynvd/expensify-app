import React from 'react';
import ReactDOM from 'react-dom';

const Info = () => (
    <div>
        <h1>Info</h1>
        <p>This is the info</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login</p>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
    <AuthInfo 
        isAuthenticated={false} 
        info="There are the details"
    />, 
    document.getElementById('app'));