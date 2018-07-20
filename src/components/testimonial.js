import React from 'react'

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div id="profile">
          <h1 id="profile-title">{this.props.name}</h1>
          <div id="profile-body">
            <p id="profile-text">
              {/*<img id="welcome-photo" className="photo" src={this.props.photo} />*/}
              {this.props.text}
              <br /><br />
            </p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Testimonial
