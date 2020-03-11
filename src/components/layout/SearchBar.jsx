import React, { useState, Fragment, useRef } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { searchLogs } from '../../redux/actions/logActions';

const Example = ({ searchLogs }) => {
  const [collapsed, setCollapsed] = useState(true);
  const text = useRef('');

  const toggleNavbar = () => setCollapsed(!collapsed);

  const onChange = e => {
    searchLogs(text.current.value);
  }

  return (
    <Fragment>
      <Navbar color="info" light>
        <NavbarBrand href="/" className="mr-auto text-white">IT LOGGER</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar style={{ color: 'red' }}>
          <Nav navbar >
            <NavItem>
              <Link to="/about" className="text-white font-weight-bold">About</Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="text-white font-weight-bold">Link</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        { collapsed && (<input className="form-control mt-3" type="search" placeholder="Search Logs..." aria-label="Search" ref={text} onChange={onChange} />)}
      </Navbar>
    </Fragment>
  );
}

// SearchBar.propTypes = {
//   searchLogs: PropTypes.func.isRequired
// }

export default connect(null, { searchLogs })(Example);