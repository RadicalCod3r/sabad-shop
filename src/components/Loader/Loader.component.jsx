import React from 'react';
import Spinner from '../Spinner/Spinner.component';

const Loader = ({ children, isLoading }) => (
    <div>
        {(isLoading === true) ? (<Spinner />) : (children)}
    </div>
);

export default Loader;