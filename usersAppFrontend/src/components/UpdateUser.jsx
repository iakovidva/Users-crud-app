import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
class UpdateUser extends Component {

    constructor(props){
        super(props);
        this.state = {deps:[]};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(event){

      event.preventDefault();
      fetch('http://localhost:8080/users/'+this.props.userid,{
        method:'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id: event.target.userId.value,
            name: event.target.name.value,
            surname: event.target.surname.value,
            gender: event.target.gender.value,
            birthdate: event.target.birthdate.value,
            work_address: event.target.work_address.value,
            home_address: event.target.home_address.value,
          
        })
      })
      .then(res=> res.json())
      .then((result)=>
      {
          //alert(result);
          this.setState({snackbaropen:true, snackbarmsg:result});
      },
      (error)=>{
        //alert('Failed')
        this.setState({snackbaropen:true, snackbarmsg:'failed'});
      }
      )
      .then(this.props.onHide)
  }

  render() {
    const groupstyle = { padding: "5px 2px" };

    return (
      <div className="container">
        
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="col-11 text-center" id="contained-modal-title-vcenter">
              Update User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col >
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="userId" style={groupstyle}>
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="userId"
                      disabled
                      defaultValue={this.props.userid}
                      placeholder="userId"
                    />
                  </Form.Group>

                  <Form.Group controlId="name" style={groupstyle}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      required
                      defaultValue={this.props.username}
                      placeholder="New Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="surname" style={groupstyle}>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type="text"
                      name="surname"
                      required
                      defaultValue={this.props.usersurname}
                      placeholder="New Surname"
                    />
                  </Form.Group>

                  <Form.Group controlId="gender" style={groupstyle}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      required
                      defaultValue={this.props.usergender}
                    >
                      <option>M</option>
                      <option>F</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="birthdate" style={groupstyle}>
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthdate"
                      required
                      defaultValue={this.props.userbirthdate}
                      placeholder="userBirthdate"
                      onChange={this.birthdateChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="work_address" style={groupstyle}>
                    <Form.Label>Work Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="work_address"
                      defaultValue={this.props.userworkaddress}
                      placeholder="New Work Address"
                    />
                  </Form.Group>

                  <Form.Group controlId="home_address" style={groupstyle}>
                    <Form.Label>Home Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="home_address"
                      defaultValue={this.props.userhomeaddress}
                      placeholder="New Home Address"
                    />
                  </Form.Group>
                  <Form.Group >
                  <div className="text-center" style={{"marginTop":"15px"}}>
                    <Button variant="primary" type="submit" >
                      Update User
                    </Button>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateUser;
