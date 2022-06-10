import React from "react";
import { Card, CardText,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function BangLuong(props) {

    const totalSalary = props.staffs.map((staff) => {

        // const total = (parseFloat(staff.salaryScale)*3000000) + (parseFloat(staff.overTime)*200000);
        const total = parseInt((staff.salaryScale * 3000000) + (staff.overTime * 200000));
        console.log(total)
        return (
            <div className='col-12 col-md-6 col-lg-4'>
                <Card className='p-3 my-3'>
                    <h5 className="text-center">{staff.name}</h5>
                    <hr />
                    <div className="row">
                        <div className="col-7">
                            <p>Mã nhân viên: {staff.id}</p>
                            <p>Hệ số lương: {staff.salaryScale}</p>
                            <p>Số ngày làm thêm: {staff.overTime}</p>
                        </div>
                        <div className="col-5">
                            <img width='100%' src={staff.image} alt={staff.name} />
                        </div>
                        <p className="col-12">Tổng lương: {total} vnd</p>
                    </div>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/nhanvien">Danh Sách Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
                <h3>BẢNG LƯƠNG NHÂN VIÊN</h3>
                <hr />
            <div className="row">
                {totalSalary}
            </div>
        </div>
    )
}

export default BangLuong;