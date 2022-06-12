import React from "react";
import { Card, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffs({staff}) {
    return (
        <Card className='p-2'>
            <Link to={`/nhanvien/${staff.id}`}>
                <img src={staff.image} width='100%' alt={staff.name}></img>
                <h5 className="text-center text-dark">{staff.name}</h5>
            </Link>
        </Card>
    )
 }

const StaffsList = (props) => {

    const list = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-6 col-md-4 col-lg-3 my-2">
                <RenderStaffs staff={staff} />
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <br/>
                    <h3>DANH SÁCH NHÂN VIÊN</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default StaffsList;