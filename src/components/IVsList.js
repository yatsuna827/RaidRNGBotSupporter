import React, { Component } from 'react';

class IVsList extends Component{
    handleChange = (index, event) => {
        const a = this.props.ivs.slice();
        a[index] = event.target.value*1;
        this.props.onChange(a);
    }
    renderList = (i) => {
        const iv = this.props.ivs[i];
        const fix = (this.props.fix || Array(6).fill(-1))[i];
        const opt = fix!==-1 ? <option key={iv} value={iv}>{iv}</option> : [...Array(32).keys()].map(_=><option key={_} value={_}>{_}</option>);
        return <select value={iv} onChange={(e)=>this.handleChange(i,e)}> {opt} </select>
    }
    render(){
        return (
            <div>
                {this.renderList(0)}
                {this.renderList(1)}
                {this.renderList(2)}
                {this.renderList(3)}
                {this.renderList(4)}
                {this.renderList(5)}
            </div>
        );
    }
}

export default IVsList;