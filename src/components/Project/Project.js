import React, {Component} from 'react';
import Thumb from './Thumb.js';
import Popup from './Popup.js';
import './project.scss';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectActive: false
    }
  }

  togglePopup() {
    var other = !this.state.projectActive;
    this.setState({projectActive: other});
  }

  render() {
    return (
      <div className="project-container" >
        <Thumb togglePopup={this.togglePopup.bind(this)} {...this.props}/>
        {this.state.projectActive ? <Popup togglePopup={this.togglePopup.bind(this)} {...this.props}/> : ''}
      </div>
    );
  }
}