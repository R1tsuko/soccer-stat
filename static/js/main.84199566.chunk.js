(this["webpackJsonpsoccer-stat"]=this["webpackJsonpsoccer-stat"]||[]).push([[0],{13:function(e,t,a){e.exports={dateInput:"DateFilterInput_dateInput__2Aqpw",searchButton:"DateFilterInput_searchButton__1vvAh",label:"DateFilterInput_label__Kj7Ea"}},19:function(e,t,a){e.exports={appWrapper:"App_appWrapper__3hNN-",content:"App_content__2P9vh"}},22:function(e,t,a){e.exports={header:"Header_header__1CXdc",home:"Header_home__3l-Fl"}},23:function(e,t,a){e.exports={searchInput:"SearchForm_searchInput__1_j5H",searchButton:"SearchForm_searchButton__1mOKM"}},34:function(e,t,a){e.exports={errorText:"ErrorPage_errorText__3Nnlz"}},35:function(e,t,a){e.exports={pageLink:"Pages_pageLink__QLBVg",active:"Pages_active__1OwBk"}},36:function(e,t,a){e.exports={link:"LinkButton_link__Ri19x"}},41:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(15),s=a.n(c),r=(a(41),a(2)),i=a(19),l=a.n(i),u=a(3),m=a(10),o=a(33),j=a.n(o).a.create({baseURL:"http://api.football-data.org/v2/",headers:{"X-Auth-Token":"0f1b50892a8549beb5d3320a2987951e"}}),h=function(){return new URLSearchParams(Object(r.h)().search)},d=a(12),b=Object(d.b)({name:"calendar",initialState:{matchesData:[],numOfMatches:null,isFetching:!1},reducers:{setIsFetching:function(e,t){e.isFetching=t.payload},setMatchesData:function(e,t){e.matchesData=t.payload,e.numOfMatches=t.payload.length}}}),O=b.actions,p=O.setMatchesData,x=O.setIsFetching,f=b.reducer,g=a(34),T=a.n(g),_=a(0),v=function(e){return Object(_.jsx)("div",{className:T.a.errorText,children:e.message})},y=a(4),I=a(35),F=a.n(I),N=function(e){for(var t=h(),a=Object(r.h)(),n=[],c=1;c<=Math.ceil(e.numOfItems/e.itemsOnPage);++c)t.set("page",c),n.push(Object(_.jsx)("span",{className:F.a.pageLink,children:Object(_.jsxs)(y.c,{to:a.pathname+"?"+t.toString(),children:[c," "]})}));return Object(_.jsx)("div",{children:n})},w=function(e){var t,a=Object(n.useState)(!1),c=Object(m.a)(a,2),s=c[0],r=c[1],i=h(),l=Object(u.c)((t=i.get("page"),function(e){return(e=e.calendar).matchesData.filter((function(e,a){return a>=20*(t-1)&&a<20*t}))})),o=i.get("dateFrom"),d=i.get("dateTo"),b=Object(u.b)(),O=Object(u.c)((function(e){return e.calendar.numOfMatches}));Object(n.useEffect)((function(){b(x(!0)),function(e,t,a){return j.get(e,{params:{dateFrom:t,dateTo:a}}).then((function(e){return e.data}))}(e.url,o,d).then((function(e){b(p(e.matches)),r(!1)}),(function(e){r(!0)})).finally((function(){b(x(!1))}))}),[o,d]);var f=l.map((function(t){return Object(_.jsx)(e.item,{match:t},t.id)}));return e.isFetching?null:s?Object(_.jsx)(v,{message:"Unable to load data"}):Object(_.jsxs)("div",{children:[Object(_.jsx)(N,{numOfItems:O,itemsOnPage:20}),Object(_.jsx)("div",{children:f})]})},S=a(7),D=a.n(S),L=function(e){var t=e.match.score;return Object(_.jsxs)("div",{className:D.a.item,children:[Object(_.jsxs)("div",{className:D.a.text,children:[e.match.homeTeam.name," ",Object(_.jsxs)("span",{className:D.a.mainScore,children:[t.fullTime.homeTeam+t.extraTime.homeTeam,":",t.fullTime.awayTeam+t.extraTime.awayTeam]})," ",e.match.awayTeam.name]}),Object(_.jsxs)("div",{className:D.a.text,children:["start: ",e.match.utcDate]}),Object(_.jsxs)("div",{className:D.a.scores,children:[Object(_.jsxs)("span",{children:[null===t.halfTime.homeTeam?"-":t.halfTime.homeTeam,":",null===t.halfTime.awayTeam?"-":t.halfTime.awayTeam]}),"  ",Object(_.jsxs)("span",{children:[null===t.fullTime.homeTeam?"-":t.fullTime.homeTeam,":",null===t.fullTime.awayTeam?"-":t.fullTime.awayTeam]}),"  ",Object(_.jsxs)("span",{children:[null===t.extraTime.homeTeam?"-":t.extraTime.homeTeam,":",null===t.extraTime.awayTeam?"-":t.extraTime.awayTeam]}),"  ",Object(_.jsxs)("span",{children:[null===t.penalties.homeTeam?"-":t.penalties.homeTeam,":",null===t.penalties.awayTeam?"-":t.penalties.awayTeam]})]})]})},R=function(e){var t,a;return Object(_.jsxs)("div",{className:D.a.item,children:[Object(_.jsxs)("div",{className:D.a.text,children:[e.match.homeTeam.name," vs ",e.match.awayTeam.name]}),Object(_.jsxs)("div",{className:D.a.text,children:[Object(_.jsx)("img",{src:null===(t=e.match.competition)||void 0===t?void 0:t.area.ensignUrl}),null===(a=e.match.competition)||void 0===a?void 0:a.name]}),Object(_.jsxs)("div",{className:D.a.text,children:["start: ",e.match.utcDate]}),Object(_.jsxs)("div",{className:D.a.scores,children:[Object(_.jsxs)("span",{children:[null===e.match.score.halfTime.homeTeam?"-":e.match.score.halfTime.homeTeam,":",null===e.match.score.halfTime.awayTeam?"-":e.match.score.halfTime.awayTeam]}),"  ",Object(_.jsxs)("span",{children:[null===e.match.score.fullTime.homeTeam?"-":e.match.score.fullTime.homeTeam,":",null===e.match.score.fullTime.awayTeam?"-":e.match.score.fullTime.awayTeam]}),"  ",Object(_.jsxs)("span",{children:[null===e.match.score.extraTime.homeTeam?"-":e.match.score.extraTime.homeTeam,":",null===e.match.score.extraTime.awayTeam?"-":e.match.score.extraTime.awayTeam]}),"  ",Object(_.jsxs)("span",{children:[null===e.match.score.penalties.homeTeam?"-":e.match.score.penalties.homeTeam,":",null===e.match.score.penalties.awayTeam?"-":e.match.score.penalties.awayTeam]})]})]})},C=a(13),E=a.n(C),P=a.p+"static/media/searchIcon.a1622a47.png",k=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),l=Object(m.a)(i,2),u=l[0],o=l[1],j=Object(r.g)();return Object(_.jsxs)("form",{onSubmit:function(e){var t=new URLSearchParams;c?t.append("dateFrom",c):t.delete("dateFrom"),u?t.append("dateTo",u):t.delete("dateTo"),t.append("page",1),j.push({search:t.toString()}),e.preventDefault()},children:[Object(_.jsxs)("span",{children:[Object(_.jsx)("label",{className:E.a.label,children:"from"}),Object(_.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},pattern:"\\d\\d\\d\\d-\\d\\d-\\d\\d",placeholder:"YYYY-MM-DD",disabled:e.disabled,className:E.a.dateInput})]}),Object(_.jsxs)("span",{children:[Object(_.jsx)("label",{className:E.a.label,children:"to"}),Object(_.jsx)("input",{type:"text",value:u,onChange:function(e){o(e.target.value)},pattern:"\\d\\d\\d\\d-\\d\\d-\\d\\d",placeholder:"YYYY-MM-DD",disabled:e.disabled,className:E.a.dateInput})]}),Object(_.jsx)("span",{children:Object(_.jsx)("button",{type:"submit",disabled:e.disabled,className:E.a.searchButton,children:Object(_.jsx)("img",{src:P})})})]})},M=function(){var e=Object(u.c)((function(e){return e.calendar.isFetching})),t=Object(r.i)(),a=t.teamId,n=t.leagueId;return Object(_.jsxs)("div",{children:[Object(_.jsx)(k,{disabled:e}),Object(_.jsxs)(r.d,{children:[Object(_.jsx)(r.b,{path:"/calendar/team",children:Object(_.jsx)(w,{url:"teams/".concat(a,"/matches"),isFetching:e,item:R})}),Object(_.jsx)(r.b,{path:"/calendar/league",children:Object(_.jsx)(w,{url:"competitions/".concat(n,"/matches"),isFetching:e,item:L})})]})]})},B=a(22),U=a.n(B),Y=function(){return Object(_.jsx)("header",{className:U.a.header,children:Object(_.jsx)(y.b,{className:U.a.home,to:"/",children:"Home"})})},A=a(9),G=a.n(A),H=Object(d.b)({name:"list",initialState:{leaguesData:[],teamsData:[],leaguesSearchResult:[],teamsSearchResult:[],numOfLeagues:null,numOfTeams:null,isFetching:!1,fetchingError:!1},reducers:{setFetchingError:function(e,t){e.fetchingError=t.payload},setIsFetching:function(e,t){e.isFetching=t.payload},setLeaguesData:function(e,t){e.leaguesData=t.payload},setTeamsData:function(e,t){e.teamsData=t.payload},setLeaguesSearchResult:function(e,t){e.leaguesSearchResult=t.payload?e.leaguesData.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())})):e.leaguesData,e.numOfLeagues=e.leaguesSearchResult.length},setTeamsSearchResult:function(e,t){e.teamsSearchResult=t.payload?e.teamsData.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())})):e.teamsData,e.numOfTeams=e.teamsSearchResult.length}}}),q=H.actions,K=q.setLeaguesData,Q=q.setTeamsData,W=q.setLeaguesSearchResult,J=q.setTeamsSearchResult,X=q.setIsFetching,z=q.setFetchingError,V=function(){return function(e,t){e(X(!0)),j.get("competitions",{params:{plan:"TIER_ONE"}}).then((function(e){return e.data})).then((function(t){e(K(t.competitions)),e(z(!1))}),(function(t){e(z(!0))})).finally((function(){e(X(!1))}))}},Z=function(e){return function(t,a){t(X(!0)),function(e){return j.get("competitions/".concat(e,"/teams")).then((function(e){return e.data}))}(e).then((function(e){t(Q(e.teams)),t(z(!1))}),(function(e){t(z(!0))})).finally((function(){return t(X(!1))}))}},$=function(e,t,a){return e.filter((function(e,n){return n>=(t-1)*a&&n<t*a}))},ee=H.reducer,te=a(36),ae=a.n(te),ne=function(e){return Object(_.jsx)("span",{className:ae.a.link,children:Object(_.jsx)(y.b,{to:e.to,children:e.text})})},ce=function(e){return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{className:G.a.smallCountryFlag,children:Object(_.jsx)("img",{src:e.league.area.ensignUrl})}),Object(_.jsxs)("span",{className:G.a.listItemText,children:[e.league.area.name," |"]}),Object(_.jsxs)("span",{className:G.a.listItemText,children:[" ",e.league.name]})]}),Object(_.jsx)(ne,{to:"/leagues/".concat(e.league.id,"?page=1"),text:"Go To Teams"}),Object(_.jsx)(ne,{to:"/calendar/league/".concat(e.league.id,"?page=1"),text:"Go To Calendar"})]})},se=function(e){var t,a=h(),c=a.get("search"),s=Object(u.c)((t=a.get("page"),function(e){return $(e.list.leaguesSearchResult,t,20)})),r=Object(u.c)((function(e){return e.list.numOfLeagues})),i=Object(u.b)(),l=s.map((function(e){return Object(_.jsx)(ce,{league:e},e.id)}));return Object(n.useEffect)((function(){i(V())}),[]),Object(n.useEffect)((function(){i(W(c))}),[c,e.isFetching]),e.isFetching?null:Object(_.jsxs)("div",{children:[Object(_.jsx)(N,{numOfItems:r,itemsOnPage:20}),Object(_.jsx)("div",{children:l})]})},re=a(23),ie=a.n(re),le=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],s=a[1],i=Object(r.g)();return Object(_.jsxs)("form",{onSubmit:function(e){var t=new URLSearchParams;c?t.append("search",c):t.delete("search"),t.append("page",1),i.push({search:t.toString()}),e.preventDefault(),s("")},children:[Object(_.jsx)("span",{children:Object(_.jsx)("input",{disabled:e.disabled,className:ie.a.searchInput,type:"text",value:c,onChange:function(e){s(e.target.value)}})}),Object(_.jsx)("span",{children:Object(_.jsx)("button",{disabled:e.disabled,className:ie.a.searchButton,type:"submit",children:Object(_.jsx)("img",{src:P})})})]})},ue=function(e){return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{className:G.a.clubImg,children:Object(_.jsx)("img",{src:e.team.crestUrl})}),Object(_.jsx)("span",{className:G.a.listItemText,children:e.team.name})]}),Object(_.jsx)("div",{children:Object(_.jsx)(ne,{to:"/calendar/team/".concat(e.team.id,"?page=1"),text:"Go To Calendar"})})]})},me=function(e){var t,a=h(),c=a.get("search"),s=Object(r.i)().leagueId,i=Object(u.c)((t=a.get("page"),function(e){return $(e.list.teamsSearchResult,t,20)})),l=Object(u.c)((function(e){return e.list.numOfTeams})),m=Object(u.b)(),o=i.map((function(e){return Object(_.jsx)(ue,{team:e},e.id)}));return Object(n.useEffect)((function(){m(Z(s))}),[]),Object(n.useEffect)((function(){m(J(c))}),[c,e.isFetching]),e.isFetching?null:Object(_.jsxs)("div",{children:[Object(_.jsx)(N,{numOfItems:l,itemsOnPage:20}),Object(_.jsx)("div",{children:o})]})},oe=function(){var e=Object(u.c)((function(e){return e.list.isFetching})),t=Object(u.c)((function(e){return e.list.fetchingError}));return Object(_.jsxs)("div",{className:G.a.content,children:[Object(_.jsx)(le,{disabled:e}),t?Object(_.jsx)(v,{message:"Unable to load data"}):Object(_.jsxs)(r.d,{children:[Object(_.jsx)(r.b,{path:"/leagues/:leagueId",children:Object(_.jsx)(me,{isFetching:e})}),Object(_.jsx)(r.b,{path:"/leagues",children:Object(_.jsx)(se,{isFetching:e})})]})]})};var je=function(){return Object(_.jsxs)("div",{className:l.a.appWrapper,children:[Object(_.jsx)(Y,{}),Object(_.jsx)("div",{className:l.a.content,children:Object(_.jsxs)(r.d,{children:[Object(_.jsx)(r.b,{path:"/leagues",children:Object(_.jsx)(oe,{})}),Object(_.jsx)(r.b,{path:"/calendar/team/:teamId",children:Object(_.jsx)(M,{})}),Object(_.jsx)(r.b,{path:"/calendar/league/:leagueId",children:Object(_.jsx)(M,{})}),Object(_.jsx)(r.b,{path:"/",children:Object(_.jsx)(r.a,{to:"/leagues?page=1"})})]})})]})},he=Object(d.a)({reducer:{list:ee,calendar:f}});s.a.render(Object(_.jsx)(y.a,{children:Object(_.jsx)(u.a,{store:he,children:Object(_.jsx)(je,{})})}),document.getElementById("root"))},7:function(e,t,a){e.exports={text:"CalendarItem_text__11NFG",item:"CalendarItem_item__mfq1Q",scores:"CalendarItem_scores__227oT",mainScore:"CalendarItem_mainScore__153YT"}},9:function(e,t,a){e.exports={content:"ListPage_content__9dl5Q",clubImg:"ListPage_clubImg__3Y4KU",smallCountryFlag:"ListPage_smallCountryFlag__1q914",listItemText:"ListPage_listItemText__3y1jO"}}},[[66,1,2]]]);
//# sourceMappingURL=main.84199566.chunk.js.map