(this.webpackJsonpraidrngbotsupporter=this.webpackJsonpraidrngbotsupporter||[]).push([[0],{11:function(e,t,s){e.exports=s(20)},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),a=s(8),r=s.n(a),l=s(2),c=s(3),h=s(5),o=s(4),u=s(1),f=s(6),p=function(){function e(t){Object(l.a)(this,e),this.ivs=t,this.flawless=t.filter((function(e){return 31===e})),this.flaw=t.filter((function(e){return 31!==e})).map((function(e){return e%8})).map((function(e){return e<6&&31!==t[e]})),this.flawivs=t.filter((function(e){return 31!==e})),this.fxxk={options:[],flawivs:[],message:"\u30a2\u30db\u3057\u306d"}}return Object(c.a)(e,[{key:"check",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return this.flawless.length!==t||t>3?this.fxxk:(1===t&&(e=this.check1V()),2===t&&(e=this.check2V()),3===t&&(e=this.check3V()),"\u30a2\u30db\u3057\u306d"!==e.message&&(e.flawivs=this.flawivs),e)}},{key:"getNextIVs",value:function(e,t){for(var s=e.slice(),n=0;n<6&&t.length>0;n++)31!==s[n]&&(s[n]=1*t.shift());return s}},{key:"check1V",value:function(){var e=this.ivs.map((function(e){return 31===e&&31}));return this.flaw[0]||this.flaw[1]||this.flaw[2]||this.flaw[3]||!this.flaw[4]?this.flaw[0]||this.flaw[1]||this.flaw[2]||!this.flaw[3]?this.flaw[0]||this.flaw[1]||!this.flaw[2]?!this.flaw[0]&&this.flaw[1]?(e[this.flaw[1]%8]=31,{options:[{flawless:2,ivs:this.getNextIVs(e,[this.flawivs[2],this.flawivs[3],this.flawivs[4]])}],message:"2V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd76\u304c\u5f97\u3089\u308c\u307e\u3059\r\n(2\u4f53\u76ee\u7121\u3057\u3067\u3082\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u3066\u3044\u307e\u3059)"}):{options:[],message:"\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u307e\u3057\u305f"}:(e[this.flaw[2]%8]=31,{options:[{flawless:2,ivs:this.getNextIVs(e,[this.flawivs[3],this.flawivs[4]])}],message:"2V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd77\u304c\u5f97\u3089\u308c\u307e\u3059\r\n(2\u4f53\u76ee\u7121\u3057\u3067\u3082\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u3066\u3044\u307e\u3059)"}):(e[this.flaw[3]%8]=31,{options:[{flawless:2,ivs:this.getNextIVs(e,[this.flawivs[4]])}],message:"2V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd78\u304c\u5f97\u3089\u308c\u307e\u3059\r\n(2\u4f53\u76ee\u7121\u3057\u3067\u3082\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u3066\u3044\u307e\u3059)"}):(e[this.flaw[4]%8]=31,{options:[{flawless:2,ivs:e}],message:"2V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd79\u304c\u5f97\u3089\u308c\u307e\u3059\r\n(2\u4f53\u76ee\u7121\u3057\u3067\u3082\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u3066\u3044\u307e\u3059)"})}},{key:"check2V",value:function(){var e=[],t=[],s=this.ivs.map((function(e){return 31===e&&31}));return this.flaw[0]||this.flaw[1]||this.flaw[2]||!this.flaw[3]?this.flaw[0]||this.flaw[1]||!this.flaw[2]?!this.flaw[0]&&this.flaw[1]&&(s[this.flaw[1]%8]=31,e.push({flawless:3,ivs:this.getNextIVs(s,[this.flawivs[2],this.flawivs[3]])}),t.push("3V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u307e\u3059")):(s[this.flaw[2]%8]=31,e.push({flawless:3,ivs:this.getNextIVs(s,[this.flawivs[3]])}),t.push("3V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd76\u304c\u5f97\u3089\u308c\u307e\u3059")):(s[this.flaw[3]%8]=31,e.push({flawless:3,ivs:s}),t.push("3V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd77\u304c\u5f97\u3089\u308c\u307e\u3059")),1===this.flaw.slice(0,3).filter((function(e){return e})).length&&this.flaw[3]?(s[this.flaw.slice(0,3).filter((function(e){return e}))[0]%8]=31,s[this.flawivs[3]%8]=31,e.push({flawless:4,ivs:[]}),t.push("4V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd76\u304c\u5f97\u3089\u308c\u307e\u3059")):1===this.flaw.slice(0,2).filter((function(e){return e})).length&&this.flaw[2]&&(s[this.flaw.slice(0,1).filter((function(e){return e}))[0]%8]=31,s[this.flawivs[2]%8]=31,e.push({flawless:4,ivs:this.getNextIVs(s,[this.flawivs[3]])}),t.push("4V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u307e\u3059")),0===e.length?this.fxxk:{options:e,message:t.filter((function(e){return"\u30a2\u30db\u3057\u306d"!==e})).join("\r\n")}}},{key:"check3V",value:function(){return this.flaw[0]||this.flaw[1]||!this.flaw[2]?this.fxxk:{options:[{flawless:4,ivs:this.ivs.map((function(e){return 31===e&&31}))}],message:"4V\u500b\u4f53\u3068\u5408\u308f\u305b\u308c\u3070\u500b\u4f53\u5024\u60c5\u5831\xd75\u304c\u5f97\u3089\u308c\u307e\u3059"}}}]),e}(),m=s(10),v=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(h.a)(this,Object(o.a)(t).call(this,e))).handleChange=s.handleChange.bind(Object(u.a)(s)),s.onChange=e.onChange.bind(Object(u.a)(s)),s}return Object(f.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e,t){var s=this.props.ivs.slice();s[e]=1*t.target.value,this.onChange(s)}},{key:"renderList",value:function(e){var t=this,s=this.props.ivs[e],n=(this.props.fix?this.props.fix:Array(6).fill(!1))[e]?i.a.createElement("option",{key:s,value:s},s):Object(m.a)(Array(32).keys()).map((function(e){return i.a.createElement("option",{key:e,value:e},e)}));return i.a.createElement("select",{value:s,onChange:function(s){return t.handleChange(e,s)}}," ",n," ")}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderList(0),this.renderList(1),this.renderList(2),this.renderList(3),this.renderList(4),this.renderList(5))}}]),t}(n.Component),w=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(h.a)(this,Object(o.a)(t).call(this,e))).state={items:s.props.items.map((function(e){return i.a.createElement("option",{key:e,value:e},e)}))},s.renderSelect=s.renderSelect.bind(Object(u.a)(s)),s}return Object(f.a)(t,e),Object(c.a)(t,[{key:"renderSelect",value:function(){var e=this;return i.a.createElement("select",{value:this.props.flawless,onChange:function(t){e.props.onChange(t)}}," ",this.state.items," ")}},{key:"render",value:function(){return i.a.createElement("div",null,"V\u56fa\u5b9a\u6570: ",this.renderSelect())}}]),t}(n.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(w,{flawless:this.props.flawless,items:this.props.items,onChange:function(t){e.props.onChange(e.props.ivs,1*t.target.value)}}),i.a.createElement(v,{ivs:this.props.ivs,onChange:function(t){e.props.onChange(t,e.props.flawless)}}))}}]),t}(n.Component),k=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(h.a)(this,Object(o.a)(t).call(this,e))).state={flawless:2,ivs:[4,27,0,31,16,31]},s.onClick=s.onClick.bind(Object(u.a)(s)),s.onIVsChanged=s.onIVsChanged.bind(Object(u.a)(s)),s}return Object(f.a)(t,e),Object(c.a)(t,[{key:"onIVsChanged",value:function(e,t){this.setState({ivs:e,flawless:t})}},{key:"onClick",value:function(){var e=new p(this.state.ivs).check(this.state.flawless);this.props.onClick(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{key:"anounce1"},"".concat(1===this.state.flawless?1:4,"\u65e5\u76ee\u306e\u500b\u4f53(1\u4f53\u76ee)\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")),i.a.createElement(d,{key:"first",items:[1,2,3],ivs:this.state.ivs,flawless:this.state.flawless,onChange:this.onIVsChanged}),i.a.createElement("button",{key:"checker",onClick:this.onClick}," \u78ba\u8a8d\u3059\u308b "),i.a.createElement("p",{style:{whiteSpace:"pre-line"},key:"message"},this.props.message))}}]),t}(n.Component),g=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(h.a)(this,Object(o.a)(t).call(this,e))).state={flawless:s.props.items[0],fix:s.props.fix[0],ivs:s.props.fix[0].map((function(e){return e||0}))},s.items=s.props.items,s.onClick=s.onClick.bind(Object(u.a)(s)),s}return Object(f.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(){var e=this,t=[0,1,2,3,4,5].filter((function(t){return!1===e.state.fix[t]})).map((function(t){return e.state.ivs[t]}));this.props.onClick({ivs:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("p",{key:"anounce"},"".concat(2===this.state.flawless?1:4,"\u65e5\u76ee\u306e\u500b\u4f53(2\u4f53\u76ee)\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")),i.a.createElement(w,{flawless:this.state.flawless,items:this.items,onChange:function(t){e.setState({flawless:1*t.target.value,fix:e.props.fix[t.target.selectedIndex]})}}),i.a.createElement(v,{ivs:this.state.ivs,fix:this.state.fix,onChange:function(t){e.setState({ivs:t})}}),i.a.createElement("button",{key:"checker",onClick:this.onClick}," \u78ba\u8a8d\u3059\u308b "))}}]),t}(n.Component),b=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(h.a)(this,Object(o.a)(t).call(this,e))).state={flawless:1,ivs:[31,0,0,0,0,0]},s.onChanged=s.onChanged.bind(Object(u.a)(s)),s}return Object(f.a)(t,e),Object(c.a)(t,[{key:"onChanged",value:function(e,t){this.setState({ivs:e,flawless:t})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{key:"anounce"}," ",this.props.anounce," "),i.a.createElement(d,{key:"second",items:this.props.items,ivs:this.state.ivs,flawless:this.state.flawless,onChange:this.onChanged}))}}]),t}(n.Component),j=s(9),C=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(h.a)(this,Object(o.a)(t).call(this,e))).state={IVsSeries:[],firstflaw:[],seconditems:[],secondIVs:[],thirdIVs:[],fourthIVs:[],command:""},s.getresult=s.getresult.bind(Object(u.a)(s)),s.getcommand=s.getcommand.bind(Object(u.a)(s)),s.checkFirst=s.checkFirst.bind(Object(u.a)(s)),s.checkSecond=s.checkSecond.bind(Object(u.a)(s)),s}return Object(f.a)(t,e),Object(c.a)(t,[{key:"getresult",value:function(){return"\u9023\u7d9a\u3059\u308b\u500b\u4f53\u5024\u5217: "+this.state.IVsSeries.join(" ")}},{key:"getcommand",value:function(){return"\u5de5\u4e8b\u4e2d..."}},{key:"checkFirst",value:function(e){this.setState({message:e.message,IVsSeries:e.flawivs,firstflaw:e.flawivs,seconditems:e.options.map((function(e){return e.flawless})),secondIVs:e.options.map((function(e){return e.ivs}))})}},{key:"checkSecond",value:function(e){var t=this.state.firstflaw.slice().concat(e.ivs);this.setState({IVsSeries:t,command:""})}},{key:"render",value:function(){var e=this,t=[];return t.push(i.a.createElement(k,{key:"first",message:this.state.message,onClick:this.checkFirst})),this.state.seconditems.length>0&&t.push(i.a.createElement(g,{key:"second",items:this.state.seconditems,fix:this.state.secondIVs,onClick:this.checkSecond})),this.state.IVsSeries.length>=5&&(t.push(i.a.createElement("p",{key:"resmessage"},this.getresult())),t.push(i.a.createElement(b,{key:"third",anounce:"5\u65e5\u76ee\u306e\u500b\u4f53\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",items:[1,2,3,4,5]})),t.push(i.a.createElement(b,{key:"fourth",anounce:"6\u65e5\u76ee\u306e\u500b\u4f53\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",items:[1,2,3,4,5]})),t.push(i.a.createElement("button",{key:"getcommand",onClick:function(){e.setState({command:e.getcommand()})}}," \u30b3\u30de\u30f3\u30c9\u3092\u51fa\u529b ")),""!==this.state.command&&(t.push(i.a.createElement("p",{key:"command"},this.state.command)),t.push(i.a.createElement(j.CopyToClipboard,{key:"result",text:this.state.command},i.a.createElement("button",null," \u7d50\u679c\u3092\u30b3\u30d4\u30fc  "))))),i.a.createElement("div",null,t)}}]),t}(n.Component);s(19);r.a.render(i.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.55162b23.chunk.js.map