import React, { Component } from 'react';
import IVsCheckContainer from '../containers/IVsCheckContainer'

class AdditionalEntry extends Component{
    constructor(props){
        super(props);
        this.state = {
            flawless: 1,
            ivs: [31,0,0,0,0,0],
        };
        this.onChanged=this.onChanged.bind(this);
    }
    onChanged(ivs,flawless){
        this.setState({ivs: ivs, flawless: flawless});
    }
    render(){
        return (
            <div>
                <p key={"anounce"}> {this.props.anounce} </p>
                <IVsCheckContainer key={"second"} items={this.props.items} ivs={this.state.ivs} flawless={this.state.flawless} onChange={this.onChanged} />
            </div>
        );
    }
}

export default AdditionalEntry;