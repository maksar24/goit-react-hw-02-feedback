(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={text:"Statistics_text__3PJBH"}},function(e,t,a){e.exports={list:"FeedbackOptions_list__2mtUl",item:"FeedbackOptions_item__1CHQ5",button:"FeedbackOptions_button__2olYS"}},,,,,,function(e,t,a){e.exports={title:"Section_title__a9h-b"}},function(e,t,a){e.exports={text:"Notification_text__25ar5"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),i=a.n(s),o=(a(17),a(6)),r=a(7),l=a(8),u=a(12),b=a(11),d=a(3),j=a.n(d),h=a(0),x=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:j.a.list,children:t.map((function(e){return Object(h.jsx)("li",{className:j.a.item,children:Object(h.jsx)("button",{className:j.a.button,type:"button",onClick:function(){a(e)},children:e})},e)}))})},p=a(2),O=a.n(p),f=function(e){var t=e.positiveFeedback,a=e.neutralFeedback,n=e.negativeFeedback,c=e.countSum,s=e.countPercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:O.a.text,children:["Good: ",t]}),Object(h.jsxs)("p",{className:O.a.text,children:["Neutral: ",a]}),Object(h.jsxs)("p",{className:O.a.text,children:["Bad: ",n]}),Object(h.jsxs)("p",{className:O.a.text,children:["Total: ",c]}),Object(h.jsxs)("p",{className:O.a.text,children:["Positive feedback: ",s,"%"]})]})},k=a(9),v=a.n(k),m=function(e){var t=e.children,a=e.title;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:v.a.title,children:a}),t]})},g=a(10),_=a.n(g),F=function(e){var t=e.message;return Object(h.jsx)("p",{className:_.a.text,children:t})};F.defaultProps={message:"No feedback given"};var N=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleEvaluate=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.ceil(100*e.state.good/e.countTotalFeedback())},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage(),i=Object.keys(this.state);return Object(h.jsxs)(m,{title:"Please leave feedback",children:[Object(h.jsx)(x,{options:i,onLeaveFeedback:this.handleEvaluate}),Object(h.jsx)(m,{title:"Statistics",children:c>0?Object(h.jsx)(f,{positiveFeedback:t,neutralFeedback:a,negativeFeedback:n,countSum:c,countPercentage:s}):Object(h.jsx)(F,{})})]})}}]),a}(n.Component);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.da7e6257.chunk.js.map