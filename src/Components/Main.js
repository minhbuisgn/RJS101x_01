import React from "react";
import { STAFFS } from "../data/staffs";
import Header from "./Header";

export default class Main extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS
        }
    }

    render() {
        return (
            <Header/>
        )
    }
}