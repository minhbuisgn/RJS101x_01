import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffsList from './components/StaffsListComponent';
import './App.css';
import { STAFFS } from './shared/staffs';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffsList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;