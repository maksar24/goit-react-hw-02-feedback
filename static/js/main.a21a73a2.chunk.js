(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=(n(13),n(4)),s=n(5),u=n(6),d=n(8),b=n(7),l=n(0),j=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(){n(e)},children:e})},e)}))})},h=function(e){var t=e.positiveFeedback,n=e.neutralFeedback,c=e.negativeFeedback,a=e.countSum,r=e.countPercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]}),Object(l.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})},O=function(e){var t=e.children,n=e.title;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:n}),t]})},v=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})};v.defaultProps={message:"No feedback given"};var k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleEvaluate=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.ceil(100*e.state.good/e.countTotalFeedback())},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),i=Object.keys(this.state);return Object(l.jsxs)(O,{title:"Please leave feedback",children:[Object(l.jsx)(j,{options:i,onLeaveFeedback:this.handleEvaluate}),Object(l.jsx)(O,{title:"Statistics",children:a>0?Object(l.jsx)(h,{positiveFeedback:t,neutralFeedback:n,negativeFeedback:c,countSum:a,countPercentage:r}):Object(l.jsx)(v,{})})]})}}]),n}(c.Component);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a21a73a2.chunk.js.map