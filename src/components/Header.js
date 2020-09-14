import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js';

export const Header = ({ startLogout }) => {
    return(
        <div>            
            <h1>
                Expensify
            </h1>
           
            <NavLink to='/dashboard' activeClassName="is-active">Home</NavLink>
            <NavLink to='/add' activeClassName="is-active">Create</NavLink>
            <NavLink to='/help' activeClassName="is-active">Help</NavLink>
            <button onClick={startLogout}>Logout</button>
        </div>        
   );
    };

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);