import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderStaff({staff }) {
    return (
        <div className="row">
            <div className="col-6">
                <h3>Họ và tên: {staff.name}</h3>
                <p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department.name}</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>
            <div className="col-6">
                <img width='50%' src={staff.image} alt={staff.name}></img>
            </div>
        </div>
    )
}

const StaffDetail = (props) => {
    if (props.staff != null) {
        console.log("hello world");
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhanvien">Danh Sách Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                 <div className="col-12">
                        <h3>{props.staff.name}</h3>
                        <hr />
                </div>
                <RenderStaff staff={props.staff} />
            </div>
        )
    }
}

export default StaffDetail;