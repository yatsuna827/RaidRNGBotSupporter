import React, { Component } from 'react';
import FirstEntry from '../containers/FirstEntry';
import SecondEntry from '../containers/SecondEntry';
import AdditionalEntry from '../containers/AdditionalEntry';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            IVsSeries:[],
            firstflaw: [],
            seconditems:[],
            secondIVs:[],
            thirdIVs:[],
            fourthIVs:[],
            command: "",
        }
        this.getresult=this.getresult.bind(this);
        this.getcommand=this.getcommand.bind(this);
        this.checkFirst=this.checkFirst.bind(this);
        this.checkSecond=this.checkSecond.bind(this);
    }
    getresult(){
        return "連続する個体値列: " + this.state.IVsSeries.join(" ");
    }
    getcommand(){
        return "工事中...";
    }
    checkFirst(res){
        this.setState({message: res.message, IVsSeries: res.flawivs, firstflaw: res.flawivs, seconditems: res.options.map(_=>_.flawless), secondIVs: res.options.map(_=>_.ivs)});
    }
    checkSecond(res){
        const series = this.state.firstflaw.slice().concat(res.ivs);
        this.setState({IVsSeries: series, command: ""});
    }
    render(){
        let renderItems = [];
        renderItems.push(<FirstEntry key={"first"} message={this.state.message} onClick={this.checkFirst} />);
        if(this.state.seconditems.length>0){
            renderItems.push(<SecondEntry key={"second"} items={this.state.seconditems} fix={this.state.secondIVs} onClick={this.checkSecond} />);
        }
        if(this.state.IVsSeries.length>=5){
            renderItems.push(<p key={"resmessage"}>{this.getresult()}</p>);
            renderItems.push(<AdditionalEntry key={"third"} anounce={"5日目の個体を入力してください"} items={[1,2,3,4,5]}/>);
            renderItems.push(<AdditionalEntry key={"fourth"} anounce={"6日目の個体を入力してください"} items={[1,2,3,4,5]}/>);
            renderItems.push(<button key={"getcommand"} onClick={()=>{this.setState({command: this.getcommand()})}}> コマンドを出力 </button>); 
            if(this.state.command !== ""){
                renderItems.push(<p key={"command"}>{this.state.command}</p>)
                renderItems.push(
                    <CopyToClipboard key={"result"} text={this.state.command}>
                        <button> 結果をコピー  </button>
                    </CopyToClipboard>
                );
            }
        }
        return (
            <div>
                {renderItems}
            </div>
        );
    }
}

export default Home;