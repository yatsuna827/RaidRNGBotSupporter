import React, { Component } from 'react';

class FlawlessSelect extends Component{
    constructor(props){
        super(props);
        this.state={
            items: this.props.items.map((_)=>(<option key={_} value={_}>{(_)}</option>))
        }
        this.renderSelect = this.renderSelect.bind(this);
    }
    renderSelect(){
        return <select value={this.props.flawless} onChange={(e)=>{this.props.onChange(e)}}> {this.state.items} </select>;
    }
    render(){
        return (
            <div>
                V固定数: {this.renderSelect()}
            </div>
        );
    }
}

export default FlawlessSelect;