import React from 'react'

const ProfilePreview = () => (
  <div>
    <div id="preview">
      <h1 id="preview-title">Contact Leo R. Morales</h1>
      <div id="preview-body">
        <img id="preview-photo" className="photo" src={require("../images/lrm-headshot.jpg")} />
        <p id="preview-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus enim nibh, efficitur blandit sapien pulvinar non. Vestibulum gravida volutpat lorem, in iaculis risus euismod consequat. Suspendisse lacinia posuere nibh eget mattis. Quisque rhoncus nisl at placerat viverra. Cras condimentum egestas nisl, rutrum venenatis orci suscipit in. Donec volutpat dui non neque commodo ornare. Quisque fermentum vestibulum nibh a sollicitudin. Phasellus consectetur augue id aliquet ornare.
          <br /><br />
        </p>
      </div>
    </div>
  </div>
)

export default ProfilePreview
