import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import jib from "./img/JIB-Quicktron.png";
import AuthService from "./authlogin/AuthService";
import SideNavigation from './SideNavigation_v2';
class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessapp: [],
      accessadmin: 0,
      collapse: false
    };
    this.Auth = new AuthService();
    // this.getRoutetitle = this.getRoutetitle.bind(this);
  }

  componentDidMount() {
    let Access = this.Auth.getAccess();
    let Accessadmin = this.Auth.getAccessadmin();
    if (Access != 0) {
      let Accessapp = JSON.parse(Access);
      this.setState({ accessapp: Accessapp, accessadmin: Accessadmin }, () => {
        // console.log(this.state.accessapp);
      });
    } else {
      this.setState({ accessapp: [], accessadmin: [] }, () => {
        // console.log(this.state.accessapp);
      });
    }
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <div>
     {/* <SideNavigation /> */}
     
      <MDBNavbar
        color="indigo darken-4"
        //style={{ background: "#2a2662" }}
        // className="flexible-navbar"
        dark
        expand="md"
        scrolling
      >
        <MDBNavbarBrand href="/" style={{paddingTop:0,paddingBottom:0}}>
         
          <img
            style={{ paddingLeft:0,height: 35, marginLeft: 0 }}
            alt="MDB React Logo"
            className="img-fluid"
            src={jib}
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
                <MDBNavLink to="/page_search">
                  &nbsp;
                  <MDBIcon
                    icon="angle-right"
                    size="1x"
                    className="amber-text pr-3"
                  />
                  <strong>Space</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/pagelocation">
                  &nbsp;
                  <MDBIcon
                    icon="angle-right"
                    size="1x"
                    className="amber-text pr-3"
                  />
                  <strong>Location</strong>
                </MDBNavLink>
              </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {this.state.accessapp.length != 0 && (
              <MDBNavLink to="/Login">
                {" "}
                <MDBIcon icon="user-times" className="mr-3" />
                ออกจากระบบ
              </MDBNavLink>
            )}
            {this.state.accessadmin == 1 && (
              <MDBNavLink to="/Login">
                {" "}
                <MDBIcon icon="user-times" className="mr-3" />
                ออกจากระบบ
              </MDBNavLink>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </div>
    );
  }
}

export default TopNavigation;
