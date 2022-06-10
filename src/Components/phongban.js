import React from "react";
import { Card, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const PhongBan = (props) => {
    
    const list = props.departments.map((dpm) => {
        return (
            
            <div key={dpm.id} className='col-12 col-md-6 col-lg-4'>
                <Card className='p-3 my-3'>
                    <h3>{dpm.name}</h3>
                    <CardText>Số lượng nhân viên: {dpm.numberOfStaff}</CardText>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/nhanvien">Danh Sách Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <h3>DANH SÁCH PHÒNG BAN</h3>
            <hr />
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default PhongBan;
