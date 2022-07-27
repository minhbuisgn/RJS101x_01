import React from "react";
import { STAFFS, DEPARTMENTS } from "../data/staffs";
import Header from "./Header";
import Footer from "./Footer";
import StaffsList from "./StaffsList";
import StaffDetail from "./StaffDetail";
import PhongBan from "./phongban";
import BangLuong from "./BangLuong";
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
        
        const addStaff = (staff) => {
            const id = Math.floor(Math.random() * 10000 + 1);
            const newStaff = { id, ...staff };
            this.setState({
              staffs: [...this.state.staffs, newStaff],
            });
        };

        return (
            <div>
                <Header />
                {/* <StaffLists staffs={this.state.staffs} /> */}
                <Switch>
                    <Route exact path='/nhanvien' component={() => <StaffsList onAdd={addStaff} staffs={this.state.staffs} />} />
                    <Route path='/nhanvien/:staffId' component={StaffWithId} />
                    <Route path='/phongban' component={() => <PhongBan departments={this.state.departments} />} />
                    <Route path='/bangluong' component={()=><BangLuong staffs={this.state.staffs} />} />
                    <Redirect to='/nhanvien' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;    