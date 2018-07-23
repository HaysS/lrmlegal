import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return(
      <div>
        <h1 id="title">{this.props.title}</h1>
        <hr />
        <div id="body">
          <form name="contact" action="/success/" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <input required type="text" name="name" value={this.state.name} placeholder={"Full name"} onChange={this.handleChange} />
            <input type="text" name="phone" value={this.state.phone} placeholder={"Phone number"} onChange={this.handleChange} />
            <input required type="email" name="email" value={this.state.email} placeholder={"Email"} onChange={this.handleChange} />
            <textarea type="text" name="message" value={this.state.message} placeholder={"Type your message here..."} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
