import React from 'react';
import Menu from '../Menu';
import { connect } from 'react-redux';
import _toggleMenu from './_toggleMenu.js';
import './style.css';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="hamburger" onClick={() => _toggleMenu()} />
        {this.props.menu ? <Menu /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.dashboardReducer
});

export default connect(mapStateToProps)(Hamburger);
