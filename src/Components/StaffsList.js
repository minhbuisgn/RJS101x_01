import React from "react";
import { Card, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffs({ staff, onClick }) {
    return (
        <Card>
            <Link to={`/nhanvien/${staff.id}`}>
                <img src={staff.image} width='100%' alt={staff.name}></img>
                <CardText className='text-center text-dark'>{staff.name}</CardText>
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
                    <h3>Danh Sách Nhân Viên</h3>
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