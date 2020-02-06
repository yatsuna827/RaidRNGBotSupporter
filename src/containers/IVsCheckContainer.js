import React, { Component } from 'react';
import IVsList from '../components/IVsList';
import FlawlessSelect from '../components/FlawlessSelect';

class IVsCheckContainer extends Component {
    render(){
        return (
            <div>
                <FlawlessSelect flawless={this.props.flawless} items={this.props.items} onChange={(e)=>{this.props.onChange(this.props.ivs, e.target.value*1)}} />
                <IVsList ivs={this.props.ivs} onChange={(ivs)=>{this.props.onChange(ivs, this.props.flawless)}} />
            </div>
        );
    }
}

export default IVsCheckContainer;