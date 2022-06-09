import React from "react";
import { Card, CardText } from 'reactstrap';

function BangLuong(staffs) {

    const totalSalary = staffs.map((staff) => {
        return (
            <p>(({staff.salaryScale}*3000000)+({staff.overTime}*200000))</p>
        )
    })

    return (
    )
}