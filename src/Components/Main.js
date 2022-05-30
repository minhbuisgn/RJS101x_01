import React from "react";
import { STAFFS } from "../data/staffs";
import Header from "./Header";
import Footer from "./Footer";
import StaffLists from "./StaffsList";

export default class Main extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS
        }
    }

    render() {
        return (
            <div>
                <Header />
                <StaffLists staffs={this.state.staffs}/>
                <Footer />
            </div>
        )
    }
}