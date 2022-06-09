import React from "react";
import { STAFFS, DEPARTMENTS } from "../data/staffs";
import Header from "./Header";
import Footer from "./Footer";
import StaffsList from "./StaffsList";
import StaffDetail from "./StaffDetail";
import PhongBan from "./phongban";
import { Switch, Route, Redirect } from "react-router-dom";


class Main extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments : DEPARTMENTS
        }
    }

    render() {

        const StaffWithId = ({ match }) => {
            
            console.log("hello world");
            
            return (
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
            );
        }

        return (
            <div>
                <Header />
                {/* <StaffLists staffs={this.state.staffs} /> */}
                <Switch>
                    <Route exact path='/nhanvien' component={() => <StaffsList staffs={this.state.staffs} />} />
                    <Route path='/nhanvien/:staffId' component={StaffWithId} />
                    <Route path='/phongban' component={() => <PhongBan departments={this.state.departments} />} />
                    <Redirect to='/nhanvien' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;    