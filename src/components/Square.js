import React from 'react';

/**
 *  Renders a clickable square cell.
 */
export default class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={()=>this.props.onClick()}>{this.props.value}
      </button>
    );
  }
}
