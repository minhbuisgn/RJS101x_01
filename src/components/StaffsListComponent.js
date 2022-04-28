import React, { Component } from "react";
import dateFormat from "dateformat";
import { Button } from "reactstrap";

class StaffsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null,
            column : "col-sm-12 col-md-6 col-lg-4"
        }
    }

    setColumn(col) {
        this.setState({ column: col });
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div>
                    <h3>Họ và tên: {staff.name}</h3>
                    <p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const list = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className={this.state.column}>
                    <p onClick={()=>this.onStaffSelect(staff)} className="border p-2">{staff.name}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <Button onClick={()=>this.setColumn("col-12")} color='primary m-3'>Hiển thị 1 Cột</Button>
                <Button onClick={()=>this.setColumn("col-6")} color='primary m-3'>Hiển thị 2 Cột</Button>
                <Button onClick={()=>this.setColumn("col-3")} color='primary m-3'>Hiển thị 4 Cột</Button>
                <Button onClick={()=>this.setColumn("col-2")} color='primary m-3'>Hiển thị 6 Cột</Button>
                <div className="row">
                    {list}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )
    }
}
export default StaffsList;