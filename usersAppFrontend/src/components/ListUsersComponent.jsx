import React, { Component } from "react";
import UpdateUser from "./UpdateUser";

class ListUsersComponent extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      DataisLoaded: false,
      editModalShow: false,
      search_query: "",
    };
  }
  search_keys = ["name", "surname", "work_address", "home_address"]; // For search
  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    this.userslist();
  }

  componentDidUpdate() {
    this.userslist();
  }

  userslist() {
    fetch("http://localhost:8080/users", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          // users: json  ** Xwris to search bar
          // users: json.filter((item) =>item.name.includes(this.state.search_query)), // For search name
          users: json.filter((item) =>
            this.search_keys.some((key) =>
              item[key].toLowerCase().includes(this.state.search_query)
            )
          ), // For search name,surname,work,home

          DataisLoaded: true,
        });
      });
  }

  deleteUser(userId) {
    if (window.confirm("Are you sure?")) {
      fetch("http://localhost:8080/users/" + userId, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { DataisLoaded } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    const {
      userId,
      userName,
      userSurname,
      userGender,
      userBirthdate,
      userWorkAddress,
      userHomeAddress,
    } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });

    /* NEW UPDATES FOR SEARCH BAR */
    let setQuery = (e) => {
      this.setState({ search_query: e });
    };
    /*  */

    return (
      <div className="container-fluid">
        <div className="card" style={{ padding: "10px 0" }}>
          <div className="card-body">
            <h3 className="text-center">Users List</h3>
            <div style={{ "display": "flex", "justifyContent": "flex-end", "marginBottom":"15px" }}>
              <input
                type="text"
                placeholder="Search..."
                className="search"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <table className="table table-striped table-bordered table-responsive">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Gender</th>
                  <th>Birthdate</th>
                  <th>Work Address</th>
                  <th>Home Address</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.gender}</td>
                    <td>{user.birthdate}</td>
                    <td>{user.work_address}</td>
                    <td>{user.home_address}</td>
                    <td>
                      <button
                        type="button"
                        variant="info"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            userId: user.id,
                            userName: user.name,
                            userSurname: user.surname,
                            userGender: user.gender,
                            userBirthdate: user.birthdate,
                            userWorkAddress: user.work_address,
                            userHomeAddress: user.home_address,
                          })
                        }
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        style={{ marginLeft: "4px" }}
                        onClick={() => this.deleteUser(user.id)}
                      >
                        Delete
                      </button>

                      <UpdateUser
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        userid={userId}
                        username={userName}
                        usersurname={userSurname}
                        usergender={userGender}
                        userbirthdate={userBirthdate}
                        userworkaddress={userWorkAddress}
                        userhomeaddress={userHomeAddress}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUsersComponent;
