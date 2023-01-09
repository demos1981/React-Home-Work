import React, { Component } from 'react'

import ListItem from '../List item/ListItem';

export default class List extends Component {
  render() {
    return (
     <ul>
    {this.props.list.map((item)=>(
       <ListItem key={item.id} todo={item} 
       onToggle={this.props.onToggle}
        onDelete={this.props.onDelete}
       />
        ))} 
      </ul>
       
    );
  }
}


