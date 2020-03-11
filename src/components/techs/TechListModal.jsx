import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getTechs } from '../../redux/actions/techActions';

import TechItem from './TechItem';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {

        getTechs();

    }, [getTechs])

    // const getTechs = async () => {
    //     setLoading(true);

    //     const res = await fetch('http://localhost:5000/techs')
    //     const data = await res.json();

    //     setTechs(data);
    //     setLoading(false);
    // }

    return (
        <Fragment>
            <ul className="list-group">
                {
                    !loading && techs !== null &&
                    techs.map(tech => ( <TechItem tech={tech} key={tech.id}/>))
                }
            </ul>
        </Fragment>        
    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);
