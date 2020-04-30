(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,a){t.exports=a.p+"static/media/preloading.0e87f8f1.png"},22:function(t,e,a){t.exports=a(31)},27:function(t,e,a){},29:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(20),s=a.n(i),o=(a(27),a(6)),l=a(7),c=a(9),u=a(8),h=a(10),p=a(4),m=a(11),d=a.n(m),f=(a(29),a(21)),y=a.n(f),b=function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("h1",null," The average H1B in tech pays ... "),r.a.createElement("p",{className:"lead"},"Since 2012 the US tech has done this. Immigration salaries. ",r.a.createElement("b",null,"This is bold text.")),r.a.createElement("img",{src:y.a,style:{width:"100%"},alt:""}),r.a.createElement("h2",{className:"text-center"},"Loading data ..."))},g=a(16),v=function(t){return{countyName:t.Name,USstate:t.State,medianIncome:Number(t["Median Household Income"]),lowerBound:Number(t["90% CI Lower Bound"]),upperBound:Number(t["90% CI Upper Bound"])}},j=p.r("%m/%d/%Y"),k=function(t){return!t["base salary"]||Number(t["base salary"]>3e5)?null:{employer:t.employer,submit_date:j(t["submit date"]),start_date:j(t["start date"]),case_status:t["case status"],job_title:t["job title"],clean_job_title:t["job title"],base_salary:Number(t["base salary"]),city:t.city,USstate:t.state,county:t.county,countyID:t.countyID}},S=function(t){return{code:t.code,id:Number(t.id),name:t.name}},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a.noop;Promise.all([p.g("data/us.json"),p.b("data/us-county-names-normalized.csv"),p.b("data/county-median-incomes.csv",v),p.b("data/h1bs-2012-2016-shortened.csv",k),p.s("data/us-state-names.tsv",S)]).then(function(e){var a=Object(g.a)(e,5),n=a[0],r=a[1],i=a[2],s=a[3],o=a[4];r=r.map(function(t){var e=t.id,a=t.name;return{id:Number(e),name:a}});var l={};i.filter(function(t){return d.a.find(r,{name:t.countyName})}).forEach(function(t){t.countyID=d.a.find(r,{name:t.countyName}).id,l[t.countyID]=t}),s=s.filter(function(t){return!d.a.isNull(t)}),t({usTopoJson:n,countyNames:r,medianIncomes:l,medianIncomesByCounty:d.a.groupBy(i,"countyName"),medianIncomesByUSState:d.a.groupBy(i,"USstate"),techSalaries:s,USstateNames:o})})},F=a(17),w=d.a.reverse(["rgb(247,251,255)","rgb(222,235,247)","rgb(198,219,239)","rgb(158,202,225)","rgb(107,174,214)","rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)"]),N=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){var a=this.props,n=a.zoom,r=a.value;return n!==t.zoom||r!==t.value}},{key:"render",value:function(){var t=this.props,e=t.value,a=t.geoPath,n=t.feature,i=t.quantize,s="rgb(240,240,240)";return e&&(s=w[i(e)]),r.a.createElement("path",{d:a(n),style:{fill:s},title:n.id})}}]),e}(n.Component),E=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).projection=p.d().scale(1280),a.geoPath=p.e().projection(a.projection),a.quantize=p.p().range(p.n(9)),a.updateD3(t),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.updateD3(t)}},{key:"updateD3",value:function(t){if(this.projection.translate([t.width/2,t.height/2]).scale(1.3*t.width),t.zoom&&t.usTopoJson){var e=t.usTopoJson,a=F.a(e,e.objects.states).features,n=d.a.find(t.USstateNames,{code:t.zoom}).id;this.projection.scale(4.5*t.width);var r=this.geoPath.centroid(d.a.find(a,{id:n})),i=this.projection.translate();this.projection.translate([i[0]-r[0]+t.width/2,i[1]-r[1]+t.height/2])}t.values&&this.quantize.domain([p.m(t.values,.15,function(t){return t.value}),p.m(t.values,.85,function(t){return t.value})])}},{key:"render",value:function(){var t=this;if(this.props.usTopoJson){var e=this.props.usTopoJson,a=F.b(e,e.objects.states,function(t,e){return t!==e}),n=F.a(e,e.objects.counties).features,i=d.a.fromPairs(this.props.values.map(function(t){return[t.countyID,t.value]}));return r.a.createElement("g",{transform:"translate(".concat(this.props.x,", ").concat(this.props.y,")")},n.map(function(e){return r.a.createElement(N,{geoPath:t.geoPath,feature:e,zoom:t.props.zoom,key:e.id,quantize:t.quantize,value:i[e.id]})}),r.a.createElement("path",{d:this.geoPath(a),style:{fill:"none",stroke:"#fff",strokeLinejoin:"round"}}))}return null}}]),e}(n.Component);var U,D=(U=function(){var t=p.a().tickFormat(function(t){return"".concat(p.c(".2s")(t))}).scale(this.props.scale).ticks(this.props.data.length);p.q(this.refs.anchor).call(t)},function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){U.call(this)}},{key:"componentDidUpdate",value:function(){U.call(this)}},{key:"render",value:function(){var t=this.props,e=t.x,a=t.y;return r.a.createElement("g",{transform:"translate(".concat(e,",").concat(a,")"),ref:"anchor"})}}]),e}(n.Component)),T=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this))).histogram=p.f(),a.widthScale=p.o(),a.yScale=p.o(),a.updateD3(t),a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.updateD3(t)}},{key:"updateD3",value:function(t){this.histogram.thresholds(t.bins).value(t.value);var e=this.histogram(t.data),a=e.map(function(t){return t.length});this.widthScale.domain([p.l(a),p.i(a)]).range([0,t.width-t.axisMargin]),this.yScale.domain([0,p.i(e,function(t){return t.x1})]).range([0,t.height-t.y-t.bottomMargin])}},{key:"makeBar",value:function(t){var e={percent:t.length/this.props.data.length*100,x:this.props.axisMargin,y:this.yScale(t.x0),width:this.widthScale(t.length),height:this.yScale(t.x1-t.x0),key:"histogram-bar-"+t.x0};return r.a.createElement(B,e)}},{key:"render",value:function(){var t="translate(".concat(this.props.x,", ").concat(this.props.y,")"),e=this.histogram(this.props.data);return r.a.createElement("g",{className:"histogram",transform:t},r.a.createElement("g",{className:"bars"},e.map(this.makeBar.bind(this))),r.a.createElement(D,{x:this.props.axisMargin-3,y:0,data:e,scale:this.yScale}))}}]),e}(n.Component),B=function(t){var e=t.percent,a=t.x,n=t.y,i=t.width,s=t.height,o="translate(".concat(a,", ").concat(n,")"),l=e.toFixed(0)+"%";return e<1&&(l=e.toFixed(2)+"%"),i<20&&(l=l.replace("%","")),i<10&&(l=""),r.a.createElement("g",{transform:o,className:"bar"},r.a.createElement("rect",{width:i,height:s-2,transform:"translate(0,1)"}),r.a.createElement("text",{textAnchor:"end",x:i-5,y:s/2+3},l))},I=T,C=a(14),M=a(1),x={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},A=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.format(Object(M.h)(this.props.data,function(t){return t.base_salary}));return this.yearsFragment&&this.USstateFragment?r.a.createElement("h2",null,"In ",this.USstateFragment,", ",this.jobTitleFragment," $",t,"/year ",this.yearsFragment):r.a.createElement("h2",null,this.jobTitleFragment," $",t,"/year ",this.USstateFragment?"in ".concat(this.USstateFragment):""," ",this.yearsFragment)}},{key:"yearsFragment",get:function(){var t=this.props.filteredBy.year;return"*"===t?"":"in ".concat(t)}},{key:"USstateFragment",get:function(){var t=this.props.filteredBy.USstate;return"*"===t?"":x[t.toUpperCase()]}},{key:"jobTitleFragment",get:function(){var t=this.props.filteredBy,e=t.jobTitle,a=t.year,n="";return"*"===e?n="*"===a?"The average H1B in tech pays":"The average tech HIB paid":(n="Software ".concat(e,"s on an H1B"),n+="*"===a?" make":" made"),n}},{key:"format",get:function(){return Object(C.a)().domain(Object(M.e)(this.props.data,function(t){return t.base_salary})).tickFormat()}}]),e}(n.Component),_=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"allDataForYear",value:function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.allData).filter(function(e){return e.submit_date.getFullYear()===t})}},{key:"allDataForJobTitle",value:function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.allData).filter(function(e){return e.clean_job_title===t})}},{key:"allDataForUSstate",value:function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.allData).filter(function(e){return e.USstate===t})}},{key:"render",value:function(){var t=this.format,e=Object(M.h)(this.props.data,function(t){return t.base_salary}),a=Object(M.d)(this.props.data,function(t){return t.base_salary});return r.a.createElement("p",{className:"lead"},this.yearsFragment?this.yearsFragment:"Since 2012"," the ",this.UStateFragment," tech industry ",this.yearsFragment?"sponsored":"has sponsored"," ",r.a.createElement("b",null,t(this.props.data.length)," ",this.jobTitleFragment),this.previousYearFragment,". Most of them paid ",r.a.createElement("b",null,"$",t(e-a)," to $",t(e+a))," per year.")}},{key:"yearsFragment",get:function(){var t=this.props.filteredBy.year;return"*"===t?"":"In ".concat(t)}},{key:"USstateFragment",get:function(){var t=this.props.filteredBy.USstate;return"*"===t?"":x[t.toUpperCase()]}},{key:"previousYearFragment",get:function(){var t,e=this.props.filteredBy.year;if("*"===e)t="";else if(2012===e)t="";else{var a=this.props.filteredBy,n=a.USstate,r=a.jobTitle,i=this.allDataForYear(e-1);if("*"!==r&&(i=this.allDataForJobTitle(r,i)),"*"!==n&&(i=this.allDataForUSstate(n,i)),this.props.data.length/i.length>2)t=", "+(this.props.data.length/i.length).toFixed()+" times more than the year before";else{var s=(100*(1-i.length/this.props.data.length)).toFixed();t=", "+Math.abs(s)+"% "+(s>0?"more":"less")+" than the year before"}}return t}},{key:"jobTitleFragment",get:function(){var t=this.props.filteredBy.jobTitle;return"*"===t?"H1B work visas":"other"===t?"H1B work visas":"H1B work visas for software ".concat(t,"s")}},{key:"format",get:function(){return Object(C.a)().domain(Object(M.e)(this.props.data,function(t){return t.base_salary})).tickFormat()}}]),e}(n.Component),P=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-6 text-center",style:{float:"left"}},r.a.createElement("h3",null,"Best places to be ",this.jobTitleFragment),r.a.createElement("small",null,"Darker color means bigger difference between median household salary",r.a.createElement("br",null),"and individual tech salary. Gray means lack of tech salary data.")),r.a.createElement("div",{className:"col-md-6 text-center",style:{float:"left"}},r.a.createElement("h3",null,"Salary distribution"),r.a.createElement("small",null,"Histogram shows tech salary distribution compared to median household income, which is a good proxy for cost of living.")))}},{key:"jobTitleFragment",get:function(){var t=this.props.filteredBy.jobTitle;return"*"===t?"in tech":"other"===t?"in tech":"a Software ".concat(t)}}]),e}(n.Component),W=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){this.yScale=p.o(),this.updateD3(this.props)}},{key:"componentWillReceiveProps",value:function(t){this.updateD3(t)}},{key:"updateD3",value:function(t){this.yScale.domain([0,p.i(t.data,t.value)]).range([0,t.height-t.y-t.bottomMargin])}},{key:"render",value:function(){var t=this.props.median||p.k(this.props.data,this.props.value),e=p.h()([[0,5],[this.props.width,5]]),a=this.yScale.tickFormat(),n="translate(".concat(this.props.x,", ").concat(this.yScale(t),")"),i="Median Household: $".concat(a(t));return r.a.createElement("g",{className:"mean",transform:n},r.a.createElement("text",{x:this.props.width-5,y:"0",textAnchor:"end"},i),r.a.createElement("path",{d:e}))}}]),e}(n.Component),z=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){this.props.onClick(this.props.name,!this.props.value)}},{key:"render",value:function(){var t="btn btn-default";return this.props.value&&(t+=" btn-primary"),r.a.createElement("button",{className:t,onClick:this.handleClick.bind(this)},this.props.label)}}]),e}(n.Component),H=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"makePick",value:function(t,e){var a=this.state.toggleValues;a=d.a.mapValues(a,function(a,n){return e&&n==t}),this.props.updateDataFilter(t,!e),this.setState({toggleValues:a})}},{key:"componentWillMount",value:function(){var t=this,e=this.props.toggleNames,a=d.a.zipObject(e,e.map(function(e){return e===t.props.picked}));this.setState({toggleValues:a})}},{key:"componentWillReceiveProps",value:function(t){this.props.picked!==t.picked&&this.makePick(t.picked,!0)}},{key:"_addToggle",value:function(t){var e="toggle-".concat(t),a=t;return this.props.capitalize&&(a=a.toUpperCase()),r.a.createElement(z,{label:a,name:t,key:e,value:this.state.toggleValues[t],onClick:this.makePick.bind(this)})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"row col-md-12"},this.props.toggleNames.map(function(e){return t._addToggle(e)}))}}]),e}(n.Component),J=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={yearFilter:function(){return!0},jobTitleFilter:function(){return!0},USstateFilter:function(){return!0},year:"*",USstate:"*",jobTitle:"*"},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=window.location.hash.replace("#","").split("-"),e=Object(g.a)(t,3),a=e[0],n=e[1],r=e[2];"*"!==a&&a&&this.updateYearFilter(Number(a)),"*"!==n&&n&&this.updateUSstateFilter(n),"*"!==r&&r&&this.updateJobTitleFilter(r)}},{key:"updateYearFilter",value:function(t,e){var a=function(e){return e.submit_date.getFullYear()===t};!e&&t||(a=function(){return!0},t="*"),this.setState({yearFilter:a,year:t})}},{key:"updateJobTitleFilter",value:function(t,e){var a=function(e){return e.clean_job_title===t};!e&&t||(a=function(){return!0},t="*"),this.setState({jobTitleFilter:a,jobTitle:t})}},{key:"updateUSstateFilter",value:function(t,e){var a=function(e){return e.USstate===t};!e&&t||(a=function(){return!0},t="*"),this.setState({USstateFilter:a,USstate:t})}},{key:"componentDidUpdate",value:function(){window.location.hash=[this.state.year||"*",this.state.USstate||"*",this.state.jobTitle||"*"].join("-"),this.reportUpdateUpTheChain()}},{key:"reportUpdateUpTheChain",value:function(){var t;this.props.updateDataFilter((t=this.state,function(e){return t.yearFilter(e)&&t.jobTitleFilter(e)&&t.USstateFilter(e)}),{USstate:this.state.USstate,year:this.state.year,jobTitle:this.state.jobTitle})}},{key:"shouldComponentUpdate",value:function(t,e){return!d.a.isEqual(this.state,e)}},{key:"render",value:function(){var t=this.props.data,e=new Set(t.map(function(t){return t.submit_date.getFullYear()})),a=new Set(t.map(function(t){return t.clean_job_title})),n=new Set(t.map(function(t){return t.USstate}));return r.a.createElement("div",null,r.a.createElement(H,{data:t,toggleNames:Array.from(e.values()),picked:this.state.year,updateDataFilter:this.updateYearFilter.bind(this)}),r.a.createElement(H,{data:t,toggleNames:Array.from(a.values()),picked:this.state.jobTitle,updateDataFilter:this.updateJobTitleFilter.bind(this)}),r.a.createElement(H,{data:t,toggleNames:Array.from(n.values()),picked:this.state.USstate,updateDataFilter:this.updateUSstateFilter.bind(this),capitalize:"true"}))}}]),e}(n.Component),V=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={techSalaries:[],countyNames:[],medianIncomes:[],salariesFilter:function(){return!0},filteredBy:{USstate:"*",year:"*",jobTitle:"*"}},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"countyValue",value:function(t,e){var a=this.state.medianIncomes[t.id],n=e[t.name];if(!a||!n)return null;var r=p.k(n,function(t){return t.base_salary});return{countyID:t.id,value:r-a.medianIncome}}},{key:"componentWillMount",value:function(){var t=this;O(function(e){return t.setState(e)})}},{key:"shouldComponentUpdate",value:function(t,e){var a=this.state,n=a.techSalaries,r=a.filteredBy,i=(n&&n.length)!==(e.techSalaries&&e.techSalaries.length),s=Object.keys(r).some(function(t){return r[t]!==e.filteredBy[t]});return i||s}},{key:"updateDataFilter",value:function(t,e){this.setState({salariesFilter:t,filteredBy:e})}},{key:"render",value:function(){var t=this;if(this.state.techSalaries.length<1)return r.a.createElement(b,null);var e=this.state.techSalaries.filter(this.state.salariesFilter),a=d.a.groupBy(e,"countyID"),n=this.state.countyNames.map(function(e){return t.countyValue(e,a)}).filter(function(t){return!d.a.isNull(t)}),i=null,s=this.state.medianIncomesByUSState.US[0].medianIncome;return"*"!==this.state.filteredBy.USstate&&(i=this.state.filteredBy.USstate,s=p.j(this.state.medianIncomesByUSState[i],function(t){return t.medianIncome})),r.a.createElement("div",{className:"App container"},r.a.createElement(A,{data:e,filteredBy:this.state.filteredBy}),r.a.createElement(_,{data:e,allData:this.state.techSalaries,medianIncomesByCount:this.state.medianIncomesByCount,filteredBy:this.state.filteredBy}),r.a.createElement(P,{data:e,filteredBy:this.state.filteredBy}),r.a.createElement("svg",{width:"1100",height:"500"},r.a.createElement(E,{usTopoJson:this.state.usTopoJson,USstateNames:this.state.USstateNames,values:n,x:0,y:0,width:500,height:500,zoom:i}),r.a.createElement("rect",{x:"500",y:"0",width:"600",heigth:"500",style:{fill:"white"}}),r.a.createElement(I,{bins:10,width:500,height:500,x:"500",y:"10",data:e,axisMargin:83,bottomMargin:5,value:function(t){return t.base_salary}}),r.a.createElement(W,{data:e,x:500,y:10,width:600,height:500,bottomMargin:5,median:s,value:function(t){return t.base_salary}})),r.a.createElement(J,{data:this.state.techSalaries,updateDataFilter:this.updateDataFilter.bind(this)}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);s.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.908bcf60.chunk.js.map