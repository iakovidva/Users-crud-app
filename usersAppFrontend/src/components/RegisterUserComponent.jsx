import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form} from "react-bootstrap";

class RegisterUserComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_added: false,
            name: '',
            surname: '',
            gender: '',
            birthdate: '',
            work_address: '',
            home_address: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


  handleSubmit(event){
  event.preventDefault();
  fetch('http://localhost:8080/users',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
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
      this.setState({user_added:true});
  },
  (error)=>{
    //alert('Failed')
    this.setState({user_added:true});
  }
  );
  event.target.reset();
}
  render() {

    const groupstyle = {padding: "5px 2px"};
    return (
      <div className="container">
        <div className="row">
          <div className="card" style={{ padding: "10px 0" }}>
            <h3 className="text-center">Add User Form</h3>
            <div className="card-body">
              <Form onSubmit={this.handleSubmit}>

                <Form.Group controlId="name" style={groupstyle}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group controlId="surname" style={groupstyle}>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    name="surname"
                    required
                    placeholder="Surname"
                  />
                </Form.Group>

                <Form.Group controlId="gender" style={groupstyle}>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select">
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
                    placeholder="Birthdate"
                  />
                </Form.Group>

                <Form.Group controlId="work_address" style={groupstyle}>
                  <Form.Label>Work Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="work_address"
                    placeholder="Work Address"
                  />
                </Form.Group>

                <Form.Group controlId="home_address" style={groupstyle}>
                  <Form.Label>Home Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="home_address"
                    placeholder="Home Address"
                  />
                </Form.Group>

                <Form.Group style={{ paddingTop: "20px" }}>
                  <Button variant="primary" type="submit">
                    Add User
                  </Button>
                </Form.Group>

              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterUserComponent;
