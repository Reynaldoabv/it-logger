import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLogs } from '../../redux/actions/logActions';
import { connect } from 'react-redux';


import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, [])

    if(loading || logs === null){
        return <Preloader />
    }

    return (
        <div className="card mt-3">
            <h4 className="card-title text-center my-3">System Logs</h4>
            <ul className="list-group">            
                {!loading && logs.length === 0 ? ( <p className="ml-3 mt-3 font-weight-bold text-center">No logs to show...</p>) : (
                    logs.map(log => 
                        <LogItem key={log.id} log={log} />
                    )
                )}
            </ul>
        </div>
        
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, {getLogs})(Logs);
