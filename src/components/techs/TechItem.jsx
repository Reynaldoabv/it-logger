import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTech } from '../../redux/actions/techActions';

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
    return (
        <div className="list-group-item">
            <Fragment>
                { firstName }  { lastName }
            </Fragment>
            <Link to="/" onClick={() => deleteTech(id) }>
                <i className="material-icons text-danger" >
                    delete
                </i>
            </Link>
        </div>
    )
}

TechItem.propTypes = {
    deleteTech: PropTypes.func.isRequired,
    tech: PropTypes.object.isRequired
}

export default connect(null, { deleteTech })(TechItem);
