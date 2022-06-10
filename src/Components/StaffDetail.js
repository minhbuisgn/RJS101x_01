import React from "react";
import reactstrap, { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Card } from 'reactstrap';

function RenderStaff({staff }) {
    return (
        <Card className='p-3 m-5'>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <img width='100%' src={staff.image} alt={staff.name}></img>
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                    <h4>Họ và tên: {staff.name}</h4>
                    <p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>
            </div>
        </Card>
    )
}

const StaffDetail = (props) => {
    if (props.staff != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhanvien">Danh Sách Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <RenderStaff staff={props.staff} />
            </div>
        )
    }
}

export default StaffDetail;