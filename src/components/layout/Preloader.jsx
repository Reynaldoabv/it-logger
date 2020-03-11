import React from 'react';
import { Spinner } from 'reactstrap';

const Preloader = () => {
    return (
        <div className="text-center mt-5">
            <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color='info' />
            <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color='info' />
            <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color='info' />
            <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color='info' />
            <Spinner style={{ width: '5rem', height: '5rem'}} type="grow" color='info' />
        </div>
    )
}

export default Preloader;
