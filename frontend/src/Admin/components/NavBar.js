import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import styled from 'styled-components'

const NavBarContainer = styled.div`
  margin-bottom: 25px;
`

export default class NavBar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    switchToJudge: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <NavBarContainer>
        <Navbar color='dark' dark expand='md'>
          <Link to='/' className='navbar-brand'>
            Gallery Gateway
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={Link} to='/' onClick={this.props.switchToJudge}>
                  View as Judge |
                </NavLink>
                {/* TODO: Move the | out of the link */}
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/users/judges'>
                  Users
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to='/' className='nav-link' onClick={this.props.logout}>
                  Logout
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </NavBarContainer>
    )
  }
}
