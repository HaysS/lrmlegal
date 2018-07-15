import React from 'react'

class SidebarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    if(e.target.name == "name") {
      this.setState({name: e.target.value});
    } else if(e.target.name == "phone") {
      this.setState({phone: e.target.value});
    } else if(e.target.name == "email") {
      this.setState({email: e.target.value});
    } else if(e.target.name == "message") {
      this.setState({message: e.target.value});
    }  
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('This data was submitted: name: '+this.state.name+' phone: '+this.state.phone+' email: '+this.state.email+' message: '+this.state.message);

    if(this.validateEmail(this.state.email) && this.validateName(this.state.name)){
      alert('This data was submitted: name: '+this.state.name+' phone: '+this.state.phone+' email: '+this.state.email+' message: '+this.state.message);

    } else {
      if(!this.validateEmail(this.state.email)) 
        alert('You have entered an invalid email.')

      if(!this.validateName(this.state.name))
        alert('You have entered an invalid name.')
    }
  }

  validateName(name) {
    return name.length > 0 && name.length < 30 ? true : false
  }

  validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(email)
  }

  render() {
    return(
      <div id="sidebar-section">
        <h1 id="title">Free Consultation</h1>
        <hr />
        <div id="body">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: {/*all form inputs must have a name attribute to work with Formspree (which is being used)*/}
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
            </label>
            <label>
              Email:
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>
            <label>
              Message:
              <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default SidebarForm
