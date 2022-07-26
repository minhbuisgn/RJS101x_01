import React from "react";
import { Card, CardText, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";

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

class StaffsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameFind : ""
        };

        this.searchStaff = this.searchStaff.bind(this);
    }

    searchStaff(event){
        const nameSearch = event.target.nameSearch.value;
        event.preventDefault();
        this.setState({ nameFind: nameSearch });
    }
    
    render() {
        
        const list = this.props.staffs
            .filter ((val)=>{
                if (this.state.nameFind === "") 
                    return val;
                else if (val.name.toLowerCase().includes(this.state.nameFind.toLowerCase()))
                    return val;
            })
            .map((val) => {
                return(
                    <div key={val.id} className="col-6 col-md-4 col-lg-3 my-2">
                        <RenderStaffs staff={val} />
                    </div>
                )
            })
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <br/>
                        <h3>DANH SÁCH NHÂN VIÊN</h3>
                    </div>
                    <form onSubmit={this.searchStaff} className="form-group row pt-4">
                        <div className="col-8 col-md-8">
                            <input type='text'
                                name="nameSearch"
                                className="form-control"
                                placeholder="Nhập vào tên nhân viên cần tìm kiếm"
                            />
                        </div>
                        <div className="col-4 col-md-4">
                            <button className="btn btn-primary" type="submit">
                                Tìm Kiếm
                            </button>
                        </div>
                    </form>
                </div>
                <hr/>
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
   
}

export default StaffsList;
 