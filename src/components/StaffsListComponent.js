import React, { Component } from "react";

class StaffsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    render() {
        const list = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-md-5 m-1">
                    <p className="border p-2">{staff.name}</p>
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
}
export default StaffsList;