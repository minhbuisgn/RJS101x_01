import React from "react";
import { Card, Button, Input, ModalHeader, Modal, ModalBody, Row, Col, Label, FormFeedback } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

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
            nameFind : "",
            isModalOpen: false,
            dob: "",
            dos: "",
            touched: {
                dob: false,
                dos: false
            }
        };

        this.searchStaff = this.searchStaff.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true }
        });
      };
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    };
    
    handleSubmit = (value) => {
        const newStaff = {
            name: value.ten,
            doB: this.state.dob,
            startDate: this.state.dos,
            department: value.phongban,
            salaryScale: value.hesoluong,
            annualLeave: value.songaynghi,
            overTime: value.ot,
            image: "./assets/images/alberto.png"
        };
    
        if (!this.state.dob || !this.state.dos)
          this.setState({
            touched: { dob: true, dos: true }
          });
        else this.props.onAdd(newStaff);
    };
    
    validate(dob, dos) {
        const errors = {
            dob: "",
            dos: ""
        };
        
        if (this.state.touched.dob && dob.length < 1)   errors.dob = "Yêu cầu chọn ngày sinh";
        if (this.state.touched.dos && dos.length < 1)   errors.dos = "Yêu cầu chọn ngày bắt đầu làm việc";
    
        return errors;
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    searchStaff(event){
        const nameSearch = event.target.nameSearch.value;
        event.preventDefault();
        this.setState({ nameFind: nameSearch });
    };
    
    render() {

        const errors = this.validate(this.state.dob, this.state.dos);

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
                    <div className="col-7 col-md-6">
                        <br/>
                        <h3>DANH SÁCH NHÂN VIÊN</h3>
                    </div>

                    {/* //Nút thêm nhân viên */}
                    <div className="col-5 col-md-3 mt-4">
                        <button className="btn btn-primary" onClick={this.toggleModal}>
                            Thêm Nhân Viên
                        </button>
                    </div>

                    {/* //Tìm kiếm nhân viên */}
                    <div className="col-12 col-md-3">
                        <form onSubmit={this.searchStaff} className="form-group row pt-4">
                            <div className="col-8 col-md-8">
                                <input type='text'
                                    name="nameSearch"
                                    className="form-control"
                                    placeholder="Nhập tên nhân viên..."
                                />
                            </div>
                            <div className="col-4 col-md-4">
                                <button className="btn btn-primary" type="submit">
                                    Tìm Kiếm
                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <hr/>

                {/* Modal thêm nhân viên mới */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Thêm Nhân Viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                            <Row className='control-group'>
                                <Label htmlFor='.ten' md={4}>Tên</Label>
                                <Col md={8}>
                                    <Control.text
                                        model='.ten'
                                        className='form-control'
                                        id='.ten'
                                        name='ten'
                                        validators={{
                                            required,
                                            minLength: minLength(3)
                                        }}
                                    />
                                    <Errors 
                                        model='.ten'
                                        className="text-danger"
                                        show='touched'
                                        messages={{
                                            required: 'Yêu cầu ',
                                            minLength: 'tối thiểu 3 ký tự'
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor='dob' md={4}>Ngày Sinh</Label>
                                <Col md={8}>
                                    <Input
                                        type='date'
                                        name='dob'
                                        id='dob'
                                        valid={errors.dob === ""}
                                        invalid={errors.dob !== ""}
                                        onBlur={this.handleBlur("dob")}
                                        onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.dob}</FormFeedback>
                                </Col>
                            </Row>
                            <Row>
                                <Label htmlFor='dos' md={4}>Ngày Vào Công Ty</Label>
                                <Col md={8}>
                                    <Input
                                        type='date'
                                        name='dos'
                                        id='dos'
                                        valid={errors.dos === ""}
                                        invalid={errors.dos !== ""}
                                        onBlur={this.handleBlur("dos")}
                                        onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.dos}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor='.phongban' md={4}>Phòng Ban</Label>
                                <Col md={8}>
                                    <Control.select 
                                        model='.phongban'
                                        name='phongban'
                                        id='phongban'
                                        defaultValue='Sale'
                                        className="form-control">
                                            <option>Sale</option>
                                            <option>HR</option>
                                            <option>Marketing</option>
                                            <option>IT</option>
                                            <option>Finance</option>
                                        </Control.select>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="hesoluong" md={4}>
                                Hệ số lương
                                </Label>
                                <Col md={8}>
                                <Control.text
                                    model=".hesoluong"
                                    id="hesoluong"
                                    name="hesoluong"
                                    placeholder="Từ 1.0 đến 3.0"
                                    validators={{
                                    required,
                                    isNumber
                                    }}
                                    defaultValue="1"
                                    className="form-control"
                                />
                                <Errors
                                    model=".hesoluong"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                    required: "Yêu cầu nhập hệ số lương",
                                    isNumber: "Phải là một số"
                                    }}
                                />
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor='songaynghi' md={4}>Số Ngày Nghỉ Còn Lại</Label>
                                <Col md={8}>
                                    <Control.text
                                        className="form-control"
                                        model='.songaynghi'
                                        name='.songaynghi'
                                        id='songaynghi'
                                        defaultValue='0'
                                        validators={{
                                            required,
                                            isNumber
                                        }}    
                                    />
                                    <Errors
                                        model=".songaynghi"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                        required: "Yêu cầu nhập vào số ngày nghỉ còn lại",
                                        isNumber: "Phải là một số"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Label htmlFor='.ot' md={4}>Số Ngày Làm Thêm</Label>
                                <Col md={8}>
                                    <Control.text
                                        className="form-control"
                                        model='.ot'
                                        name='ot'
                                        id='ot'
                                        defaultValue='0'
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        model=".ot"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                        required: "Yêu cầu nhập số ngày làm thêm",
                                        isNumber: "Phải là một số"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='control-group'>
                                <Col md={{ size:10, offset:9 }}>
                                    <Button color='primary' type='submit'>Thêm</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
   
}

export default StaffsList;
 