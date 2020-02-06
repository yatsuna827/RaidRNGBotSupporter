import React, { Component } from 'react';
import IVsList from '../components/IVsList';
import FlawlessSelect from '../components/FlawlessSelect';

class AdditionalEntry extends Component{
    render(){
        return (
            <div>
                <p key={"anounce"}> {this.props.anounce} </p>
                <FlawlessSelect flawless={this.props.flawless} items={this.props.items} onChange={(e)=>{this.props.onFlawlessChanged(e.target.value*1)}} />
                <IVsList ivs={this.props.ivs} onChange={this.props.onIVsChanged} />
            </div>
        );
    }
}

export default AdditionalEntry;