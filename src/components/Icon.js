import React from 'react'

class Icon extends React.Component {
  constructor (props) {
    super(props);
    this.myAbout = React.createRef();
    this.myExperiences = React.createRef();
}
  render() {
    return (
      <a href={this.props.link} target="_blank" className="icon">
        <img src={this.props.image} width="40" height="40" className="centreImage" />
      </a>
    );
  }
}

export default Icon;