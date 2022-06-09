import React from "react";
import { Card, CardText } from "reactstrap";

const PhongBan = (props) => {
    
    const list = props.departments.map((dpm) => {
        return (
            <div key={dpm.id} className='col-12 col-md-6 col-lg-4 my-3'>
                <Card className='p-3'>
                    <h3>{dpm.name}</h3>
                    <CardText>Số lượng nhân viên: {dpm.numberOfStaff}</CardText>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default PhongBan;
