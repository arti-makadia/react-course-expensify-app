console.log('hoc.js is running');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
   return (
    <div>
    <h1>Information</h1>
    <p>The information is : {props.info}</p>
</div>
   );   
};

const AuthenticateAdmin = (WrappedComponent) => {
    return ( props ) => (
        <div>
            <p>This is a private Information.</p>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>you can not show this information.</p>}            
        </div>
    );
};

const AuthAdmin = AuthenticateAdmin(Info);

ReactDOM.render(<AuthAdmin isAuthenticated={true} info='This is my information.' />, document.getElementById('appDiv'));
