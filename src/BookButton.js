import React, { Component } from 'react';

class BookButton extends Component{
  state = {
    select: this.props.selectedShelf
  }
  componentDidMount(){
  //if the book isn't assigned to a shelf it sets it to none
    if(this.props.selectedShelf === undefined){
      this.setState(() => ({
        select: 'none'
      }))
    }
  }
  onChange = (select) => {
    this.setState(() => ({
      select: select
    }))
    this.props.updateBook(this.props.book, select)
  }
  render(){
    return(
      <div className="book-shelf-changer">
        <select value={this.state.select} onChange={(event) => this.onChange(event.target.value)} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
export default BookButton;
