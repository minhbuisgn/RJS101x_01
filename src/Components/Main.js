import React from "react";
import { STAFFS } from "../data/staffs";

export default class Main extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS
        }
    }

    render() {
        return (
            <h1>ASM2</h1>
        )
    }
}