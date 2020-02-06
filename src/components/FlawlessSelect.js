import React, { Component } from 'react';

class FlawlessSelect extends Component{
    renderSelect = () => (<select value={this.props.flawless} onChange={(e)=>{this.props.onChange(e)}}> {this.getitems()} </select>);
    getitems = () => (this.props.items.map((_)=>(<option key={_} value={_}>{(_)}</option>)));
    render(){
        return (
            <div>
                V固定数: {this.renderSelect()}
            </div>
        );
    }
}

export default FlawlessSelect;