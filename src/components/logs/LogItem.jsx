import React, { useState }  from 'react';
import { Tooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../redux/actions/logActions';

const LogItem = ({ log, log: {attention, message, id, tech }, deleteLog, setCurrent }) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    const onDelete = () => {
        deleteLog(id);
    }

    return (
        <li className="list-group-item">
            <div className="">
                <Link to="/edit-log-modal" id="Tooltip" className={`modal-trigger ${attention ? 'text-danger' : 'text-info'}`} onClick={e => setCurrent(log)}>{message}</Link>
                <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltip" toggle={toggle}>
                    Click to edit
                </Tooltip>
                <br/>
                <span className="text-dark">
                    <span className="text-black">{id}</span> last updated by{' '}
                    <span className="text-black font-weight-bold">{tech}</span> on {' '}
                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#!" className="text-grey" onClick={onDelete}>{' '}
                    <i className="material-icons text-danger" >delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrent })(LogItem);
