import React from 'react';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
    this.userFormSubmit = this.userFormSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  userFormSubmit(event) {
    event.preventDefault();
    this.props.addUserName(this.state.userName);
  }

  render() {
    return (
      <div className="user-container">
        <form onSubmit={this.userFormSubmit}>
          <div className="container">
            <label htmlFor="email"><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              value={this.state.userName}
              onChange={this.handleUserNameChange}
            />
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserComponent;
