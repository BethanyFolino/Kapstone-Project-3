(this["webpackJsonpkapstone-project-3"]=this["webpackJsonpkapstone-project-3"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),s=a.n(c),i=(a(66),a(67),a(68),a(107)),o=a(105),l=a(14),u=a(12),d=a(8),j=a.n(d),b=a(9),p=a(11),h=a.n(p),O=a(108),f="SET_ALERT",m="REMOVE_ALERT",x="REGISTER_SUCCESS",v="REGISTER_FAIL",g="USER_LOADED",y="AUTH_ERROR",w="LOGIN_SUCCESS",k="LOGIN_FAIL",S="LOGOUT",E="GET_PROFILE",T="CLEAR_PROFILE",C="PROFILE_ERROR",R="GET_REVIEWS",I="GET_REVIEW",L="REVIEW_ERROR",D="UPDATE_LIKES",_="DELETE_REVIEW",A="ADD_REVIEW",G="ADD_LIKE_MOVIE",N="LIKE_MOVIE_ERROR",P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(r){var n=Object(O.a)();r({type:f,payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){return r({type:m,payload:n})}),a)}},B=function(e){e?h.a.defaults.headers.common["x-auth-token"]=e:delete h.a.defaults.headers.common["x-auth-token"]},F=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&B(localStorage.token),e.prev=1,e.next=4,h.a.get("/api/auth");case 4:a=e.sent,t({type:g,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:y});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},M=a(1),V=Object(u.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:T}),e({type:S})}}})((function(e){var t=e.auth,a=t.isAuthenticated,n=t.loading,c=e.logout,s=Object(M.jsxs)(i.a,{className:"mr-auto",children:[Object(M.jsx)(l.b,{to:"/dashboard",style:{marginRight:"12px",color:"gold"},children:"Home"}),Object(M.jsx)(l.b,{to:"/profile",style:{marginRight:"12px",color:"gold"},children:"Profile"}),Object(M.jsx)(l.b,{to:"/about",style:{marginRight:"12px",color:"gold"},children:"About"}),Object(M.jsx)(l.b,{to:"#!",onClick:c,style:{marginRight:"12px",color:"gold"},children:"Logout"})]}),u=Object(M.jsxs)(i.a,{className:"mr-auto",children:[Object(M.jsx)(l.b,{to:"/register",style:{marginRight:"12px",color:"gold"},children:"Register"}),Object(M.jsx)(l.b,{to:"/login",style:{marginRight:"12px",color:"gold"},children:"Login"})]});return Object(M.jsxs)(o.a,{bg:"dark",variant:"dark",children:[Object(M.jsx)(o.a.Brand,{style:{color:"gold"},children:"MMG"}),!n&&Object(M.jsx)(r.Fragment,{children:a?s:u})]})})),W=function(){return Object(M.jsx)("div",{children:Object(M.jsxs)("section",{children:[Object(M.jsx)("div",{children:Object(M.jsx)("h1",{children:"Welcome to MMG!"})}),Object(M.jsxs)("div",{children:[Object(M.jsx)(l.b,{to:"/login",children:Object(M.jsx)("button",{children:"Login"})}),Object(M.jsx)(l.b,{to:"/register",children:Object(M.jsx)("button",{children:"Register"})})]})]})})},q=a(22),U=a(5),Y=a(16),J=a(10),K=a(106),H=a(104),z=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(b.a)(j.a.mark((function a(r){var n,c,s,i;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,h.a.post("/api/auth",c,n);case 5:s=a.sent,r({type:w,payload:s.data}),r(F()),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(2),(i=a.t0.response.data.errors)&&i.forEach((function(e){return r(P(e.msg,"danger"))})),r({type:k});case 15:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,n=Object(r.useState)({email:"",password:""}),c=Object(Y.a)(n,2),s=c[0],i=c[1],o=s.email,l=s.password,u=function(e){return i(Object(U.a)(Object(U.a)({},s),{},Object(q.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(o,l);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(M.jsx)(J.a,{to:"/dashboard"}):Object(M.jsx)(r.Fragment,{children:Object(M.jsxs)("div",{container:!0,children:[Object(M.jsx)("h7",{children:"Login here"}),Object(M.jsxs)(K.a,{onSubmit:function(e){return d(e)},children:[Object(M.jsxs)(K.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(K.a.Label,{children:"Email address"}),Object(M.jsx)(K.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:o,onChange:function(e){return u(e)},required:!0}),Object(M.jsx)(K.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(M.jsxs)(K.a.Group,{controlId:"formBasicPassword",children:[Object(M.jsx)(K.a.Label,{children:"Password"}),Object(M.jsx)(K.a.Control,{type:"password",placeholder:"Password",name:"password",value:l,onChange:function(e){return u(e)},required:!0})]}),Object(M.jsx)(K.a.Group,{controlId:"formBasicCheckbox",children:Object(M.jsx)(K.a.Check,{type:"checkbox",label:"Check me out"})}),Object(M.jsx)(H.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})),Q=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:P,register:function(e){var t=e.name,a=e.email,r=e.password;return function(){var e=Object(b.a)(j.a.mark((function e(n){var c,s,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},s=JSON.stringify({name:t,email:a,password:r}),e.prev=2,e.next=5,h.a.post("/api/users",s,c);case 5:i=e.sent,n({type:x,payload:i.data}),n(F()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(o=e.t0.response.data.errors)&&o.forEach((function(e){return n(P(e.msg,"danger"))})),n({type:v});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,a=e.register,n=e.isAuthenticated,c=Object(r.useState)({name:"",email:"",password:"",password2:""}),s=Object(Y.a)(c,2),i=s[0],o=s[1],l=i.name,u=i.email,d=i.password,p=i.password2,h=function(e){return o(Object(U.a)(Object(U.a)({},i),{},Object(q.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(b.a)(j.a.mark((function e(r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),d!==p?t("Passwords do not match","danger"):a({name:l,email:u,password:d});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(M.jsx)(J.a,{to:"/dashboard"}):Object(M.jsx)(r.Fragment,{children:Object(M.jsxs)("div",{container:!0,children:[Object(M.jsx)("h7",{children:"Sign up here"}),Object(M.jsxs)(K.a,{onSubmit:function(e){return O(e)},children:[Object(M.jsxs)(K.a.Group,{controlId:"formBasicName",children:[Object(M.jsx)(K.a.Label,{children:"Name"}),Object(M.jsx)(K.a.Control,{type:"text",name:"name",placeholder:"Enter name",value:l,onChange:function(e){return h(e)},required:!0}),Object(M.jsx)(K.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(M.jsxs)(K.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(K.a.Label,{children:"Password"}),Object(M.jsx)(K.a.Control,{type:"email",name:"email",placeholder:"Email",value:u,onChange:function(e){return h(e)},required:!0})]}),Object(M.jsxs)(K.a.Group,{controlId:"formBasicPassword",children:[Object(M.jsx)(K.a.Label,{children:"Password"}),Object(M.jsx)(K.a.Control,{type:"password",name:"password",placeholder:"Password",value:d,onChange:function(e){return h(e)},required:!0})]}),Object(M.jsxs)(K.a.Group,{controlId:"formBasicPassword",children:[Object(M.jsx)(K.a.Label,{children:"Password"}),Object(M.jsx)(K.a.Control,{type:"password",name:"password2",placeholder:"Confirm Password",value:p,onChange:function(e){return h(e)},required:!0})]}),Object(M.jsx)(K.a.Group,{controlId:"formBasicCheckbox",children:Object(M.jsx)(K.a.Check,{type:"checkbox",label:"Check me out"})}),Object(M.jsx)(H.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})})),X=Object(u.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(M.jsx)("div",{children:e.msg},e.id)}))})),Z=a(109),$=a(58),ee=a.n($),te=function(e){var t=e.addLike,a=e.removeLike,n=e.deleteReview,c=e.auth,s=e.review,i=s._id,o=s.text,u=s.name,d=s.user,j=s.likes,b=s.comments,p=s.date,h=e.showActions;return Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{children:u}),Object(M.jsx)("p",{children:o}),Object(M.jsxs)("p",{children:["Posted on ",Object(M.jsx)(ee.a,{format:"YYYY/MM/DD",children:p})]}),h&&Object(M.jsxs)(r.Fragment,{children:[Object(M.jsxs)("button",{onClick:function(e){return t(i)},children:[j.length>0?Object(M.jsx)("span",{children:j.length}):0," likes"]}),Object(M.jsx)("button",{onClick:function(e){return a(i)},children:"Remove Like"}),Object(M.jsx)("button",{children:Object(M.jsxs)(l.b,{to:"/posts/".concat(i),children:["Discussion",b.length>0&&Object(M.jsx)("span",{children:b.length})]})}),!c.loading&&d===c.user._id&&Object(M.jsx)("button",{onClick:function(e){return n(i)},children:"Delete"}),Object(M.jsx)("div",{})]})]})};te.defaultProps={showActions:!0};var ae=Object(u.b)((function(e){return{auth:e.auth}}),{addLike:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.put("/api/posts/like/".concat(e));case 3:r=t.sent,a({type:D,payload:{id:e,likes:r.data}}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:L,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},removeLike:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.put("/api/posts/unlike/".concat(e));case 3:r=t.sent,a({type:D,payload:{id:e,likes:r.data}}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:L,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},deleteReview:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.delete("/api/posts/".concat(e));case 3:t.sent,a({type:_,payload:e}),a(P("Review Removed","Success")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:L,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(te),re=Object(u.b)(null,{addReview:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,h.a.post("/api/posts/",e,r);case 4:n=t.sent,a({type:A,payload:n.data}),a(P("Review Created","Success")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:L,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addReview,a=e.imdbID,n=Object(r.useState)(""),c=Object(Y.a)(n,2),s=c[0],i=c[1];return Object(M.jsxs)("div",{className:"review-form",children:[Object(M.jsx)("div",{children:Object(M.jsx)("h3",{children:"Leave a Review"})}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({text:s,imdbID:a}),i("")},children:[Object(M.jsx)("textarea",{name:"text",cols:"30",rows:"5",placeholder:"Leave a review",value:s,onChange:function(e){return i(e.target.value)},required:!0}),Object(M.jsx)("input",{type:"submit",value:"Submit"})]})]})})),ne=Object(u.b)((function(e){return{review:e.review}}),{getReviews:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/posts");case 3:a=e.sent,t({type:R,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:L,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getReviews,a=e.review,n=a.reviews,c=(a.loading,e.imdbID);return Object(r.useEffect)((function(){t()}),[t]),Object(M.jsx)(r.Fragment,{children:c?Object(M.jsx)("div",{className:"reviews",children:n.filter((function(e){return e.imdbID===c})).map((function(e){return Object(M.jsx)(ae,{review:e},e._id)}))}):Object(M.jsx)("div",{className:"reviews",children:n.map((function(e){return Object(M.jsx)(ae,{review:e},e._id)}))})})})),ce=function(e){var t=e.Title,a=e.Year,n=e.Poster,c=e.imdbID,s=Object(r.useState)(0),i=Object(Y.a)(s,2),o=i[0],l=i[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(Z.a,{className:"our-movies",style:{width:"18rem"},children:[Object(M.jsx)(Z.a.Img,{variant:"top",src:n}),Object(M.jsxs)(Z.a.Body,{children:[Object(M.jsxs)(Z.a.Title,{children:["Title: ",t]}),Object(M.jsxs)(Z.a.Text,{children:["Year Created: ",a]}),Object(M.jsxs)(Z.a.Text,{children:["Likes: ",o]}),Object(M.jsx)("button",{onClick:function(e){o>=0&&l(o+1)},children:"Like"}),Object(M.jsx)(Z.a.Text,{children:Object(M.jsx)(re,{imdbID:c})}),Object(M.jsxs)(Z.a.Text,{children:[Object(M.jsx)("h2",{children:"Reviews:"}),Object(M.jsx)(ne,{imdbID:c})]})]})]}),Object(M.jsx)(re,{imdbID:c}),Object(M.jsx)(ne,{imdbID:c}),Object(M.jsxs)(Z.a,{style:{width:"18rem"},children:[Object(M.jsx)(Z.a.Img,{variant:"top",src:n}),Object(M.jsxs)(Z.a.Body,{children:[Object(M.jsxs)(Z.a.Title,{children:["Title: ",t]}),Object(M.jsxs)(Z.a.Text,{children:["Year Created: ",a]}),Object(M.jsx)(Z.a.Text,{children:Object(M.jsx)(ne,{imdbID:c})}),Object(M.jsx)(Z.a.Text,{children:Object(M.jsx)(ne,{imdbID:c})})]})]})]})},se=h.a.create({baseURL:"http://api.themoviedb.org/3"});var ie=function(e){var t=e.image;return Object(M.jsx)("div",{children:Object(M.jsxs)(Z.a,{style:{width:"18rem"},children:[Object(M.jsx)(Z.a.Img,{variant:"top",src:"".concat("https://image.tmdb.org/t/p/original/").concat(t.backdrop_path||t.poster_path," ")}),Object(M.jsxs)(Z.a.Body,{children:[Object(M.jsxs)(Z.a.Title,{children:["Title: ",t.title]}),Object(M.jsxs)(Z.a.Text,{children:["Original Name: ",t.title||t.original_name]}),Object(M.jsxs)(Z.a.Text,{children:["Votes: ",t.vote_count]})]})]})})},oe=Math.floor(500*Math.random()),le="/discover/movie?api_key=".concat("b43be22b6a5309d4edfa333956d60b88","&certification_country=UScertification.lte=G&sort_by=popularity.desc&page=")+oe,ue=function(){var e=Object(r.useState)({Search:""}),t=Object(Y.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(Y.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(!1),u=Object(Y.a)(l,2),d=(u[0],u[1]),p=Object(r.useState)([]),h=Object(Y.a)(p,2),O=h[0],f=h[1],m=a.Search;Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.get(le);case 2:return t=e.sent,console.log(t.data.results),f(t.data.results),console.log(O),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),d(!0)}),[]);var x=function(e){e.preventDefault(),function(e){fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=".concat(e,"&page=1&r=json"),{method:"GET",headers:{"x-rapidapi-key":"529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2","x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){console.log(e.Search),n(e.Search)})).catch((function(e){console.error(e)}))}(m)};return Object(M.jsxs)(r.Fragment,{children:[Object(M.jsx)("div",{className:"searchresults",children:"Search for your favorite Movies, TV Shows, and Games!"}),Object(M.jsx)("div",{className:"search",children:Object(M.jsxs)(K.a,{onSubmit:function(e){return x(e)},children:[Object(M.jsx)(K.a.Group,{controlId:"formBasicEmail",children:Object(M.jsx)(K.a.Control,{type:"text",name:"Search",placeholder:"Ex: Lion King",onChange:function(e){return n(Object(U.a)(Object(U.a)({},a),{},Object(q.a)({},e.target.name,e.target.value)))}})}),Object(M.jsx)(H.a,{variant:"primary",type:"submit",children:"Submit"})]})}),Object(M.jsxs)("div",{className:"buttons",children:[Object(M.jsx)("button",{onClick:function(){return o("movie")},type:"button",children:"Movies"}),Object(M.jsx)("button",{onClick:function(){return o("game")},type:"button",children:"Games"}),Object(M.jsx)("button",{onClick:function(){return o("series")},type:"button",children:"TV Shows"}),a.length>=0&&a.map((function(e){return Object(M.jsx)(ce,Object(U.a)({},e),e.imbdID)})).filter((function(e){return console.log(e.props),!i||e.props.Type===i}))]}),Object(M.jsx)("div",{className:"results",children:O.map((function(e){return Object(M.jsx)(ie,{image:e})}))})]})},de=function(e){return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{className:"dashboard",children:Object(M.jsx)(ue,{})})})},je=a(61),be={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var pe=Object(u.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,r=a.isAuthenticated,n=a.loading,c=Object(je.a)(e,["component","auth"]);return Object(M.jsx)(J.b,Object(U.a)(Object(U.a)({},c),{},{render:function(e){return r||n?Object(M.jsx)(t,Object(U.a)({},e)):Object(M.jsx)(J.a,{to:"/login"})}}))})),he=Object(u.b)((function(e){return{auth:e.auth,profile:e.profile}}),{getCurrentProfile:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("api/profile");case 3:a=e.sent,t({type:E,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:C,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},createProfile:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(b.a)(j.a.mark((function r(n){var c,s,i;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c={headers:{"Content-Type":"application/json"}},r.next=4,h.a.post("/api/profile",e,c);case 4:s=r.sent,n({type:E,payload:s.data}),n(P(a?"Profile Updated":"Profile Created")),a||t.push("/dashboard"),r.next=15;break;case 10:r.prev=10,r.t0=r.catch(0),(i=r.t0.response.data.errors)&&i.forEach((function(e){return n(P(e.msg,"danger"))})),n({type:C,payload:{msg:r.t0.response.statusText,status:r.t0.response.status}});case 15:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()}})(Object(J.g)((function(e){var t=e.createProfile,a=e.getCurrentProfile,n=e.history,c=e.auth.user,s=e.profile.profile;Object(r.useEffect)((function(){a()}),[a]);var i=Object(r.useState)({bio:s.bio,favoritemovie:s.favoritemovie,favoritegame:s.favoritegame,favoritetvseries:s.favoritetvseries}),o=Object(Y.a)(i,2),l=o[0],u=o[1],d=l.bio,j=l.favoritemovie,b=l.favoritegame,p=l.favoritetvseries,h=function(e){return u(Object(U.a)(Object(U.a)({},l),{},Object(q.a)({},e.target.name,e.target.value)))};return Object(M.jsxs)(r.Fragment,{children:[Object(M.jsxs)("h1",{children:["Welcome ",c&&c.name]}),s?Object(M.jsxs)("div",{children:[Object(M.jsxs)("h3",{children:["A little bit about myself:",s.bio]}),Object(M.jsxs)("h2",{children:["Favorite Movie:",s.favoritemovie]}),Object(M.jsxs)("h2",{children:["Favorite Game:",s.favoritegame]}),Object(M.jsxs)("h2",{children:["Favorite TV Series:",s.favoritetvseries]})]}):null,Object(M.jsxs)(r.Fragment,{children:[Object(M.jsx)("h1",{children:"Create your profile!"}),Object(M.jsx)("p",{children:"Enter your favorite movies, games, and tv series; and a fun fact about yourself."}),Object(M.jsx)("small",{children:"* = required field"}),Object(M.jsxs)(K.a,{children:[Object(M.jsxs)(K.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(K.a.Label,{children:"Bio"}),Object(M.jsx)(K.a.Control,{type:"text",placeholder:"bio",name:"bio",value:d,onChange:function(e){return h(e)}}),Object(M.jsx)(K.a.Text,{className:"text-muted",children:"A fun fact about yourself or where you are from"})]}),Object(M.jsxs)(K.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(K.a.Label,{children:"Favorite Movie "}),Object(M.jsx)(K.a.Control,{type:"text",placeholder:"favorite movie",name:"favoritemovie",value:j,onChange:function(e){return h(e)}})]}),Object(M.jsxs)(K.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(K.a.Label,{children:"Favorite TV Series"}),Object(M.jsx)(K.a.Control,{type:"text",placeholder:"favorite tv series",name:"favoritetvseries",value:p,onChange:function(e){return h(e)}})]}),Object(M.jsxs)(K.a.Group,{controlId:"formBasicEmail",children:[Object(M.jsx)(K.a.Label,{children:"Favorite Game"}),Object(M.jsx)(K.a.Control,{type:"text",placeholder:"favorite game",name:"favoritegame",value:b,onChange:function(e){return h(e)}})]}),Object(M.jsx)(H.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),t(l,n)},children:"Submit"})]})]})]})}))),Oe=a(25),fe=a(59),me=a(60),xe=a(29),ve=[];var ge={profile:null,reviews:[],loading:!0,error:{}};var ye={reviews:[],review:null,loading:!0,error:{}};var we={likes:[],liked:null,loading:!0,error:{}};var ke=Object(Oe.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case f:return[].concat(Object(xe.a)(e),[r]);case m:return e.filter((function(e){return e.id!==r}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case g:return Object(U.a)(Object(U.a)({},e),{},{isAuthenticated:!0,loading:!1,user:r});case x:case w:return localStorage.setItem("token",r.token),Object(U.a)(Object(U.a)(Object(U.a)({},e),r),{},{isAuthenticated:!0,loading:!1});case v:case y:case k:case S:return localStorage.removeItem("token"),Object(U.a)(Object(U.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case E:return Object(U.a)(Object(U.a)({},e),{},{profile:r,loading:!1});case C:return Object(U.a)(Object(U.a)({},e),{},{error:r,loading:!1});case T:return Object(U.a)(Object(U.a)({},e),{},{profile:null,loading:!1});default:return e}},review:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case R:return Object(U.a)(Object(U.a)({},e),{},{reviews:r,loading:!1});case I:return Object(U.a)(Object(U.a)({},e),{},{review:r,loading:!1});case A:return Object(U.a)(Object(U.a)({},e),{},{reviews:[r].concat(Object(xe.a)(e.reviews)),loading:!1});case _:return Object(U.a)(Object(U.a)({},e),{},{reviews:e.reviews.filter((function(e){return e._id!==r})),loading:!1});case L:return Object(U.a)(Object(U.a)({},e),{},{error:r,loading:!1});case D:return Object(U.a)(Object(U.a)({},e),{},{reviews:e.reviews.map((function(e){return e._id===r.id?Object(U.a)(Object(U.a)({},e),{},{likes:r.likes}):e})),loading:!1});default:return e}},like:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case G:return Object(U.a)(Object(U.a)({},e),{},{likes:[r].concat(Object(xe.a)(e.likes)),loading:!1});case N:return Object(U.a)(Object(U.a)({},e),{},{error:r,loading:!1});default:return e}}}),Se=[me.a],Ee=Object(Oe.createStore)(ke,{},Object(fe.composeWithDevTools)(Oe.applyMiddleware.apply(void 0,Se))),Te=function(){return Object(M.jsxs)("div",{className:"about",children:[Object(M.jsxs)("div",{className:"about-item",children:[Object(M.jsx)("h1",{children:"Bethany Folino"}),Object(M.jsx)("p",{children:"Bethany is a software developer interested in functionality and making apps that simultaneously entertain and help people. She enjoys playing games like Animal Crossing, Hollow Knight, and Super Smash Bros. A few of her favorite TV series are Psych, Doctor Who, and Steins;Gate. Some of her favorite movies are Now You See Me, Spiderman: Enter the Spider-Verse, and the Back to the Future trilogy. This application search component allows users to filter their search results by movie, TV series, or game in order to help them more easily find what they want to see or play."})]}),Object(M.jsxs)("div",{className:"about-item",children:[Object(M.jsx)("h1",{children:"Rebekah Miller"}),Object(M.jsx)("p",{children:"Rebekah is a Software Developer interested in accessibility for the visually impaired. She enjoys playing Super Mario Bros. and watching Batman movies. This application features images with alt tags, which permit a screen reader to tell a visually impaired user what is contained in the image."})]}),Object(M.jsxs)("div",{className:"about-item",children:[Object(M.jsx)("h1",{children:"Jacob Short"}),Object(M.jsx)("p",{children:"Jacob is a young and inspiring software developer, aimed directly at the functionality and the structure of the application. He spends his free time playing Call of Duty and watching intense dramas whether TV Series, or Movies. This application features a back end utilizing MongoDB, to be able to store our users' data which makes it easier for us as devs to handle and store our users' precious and valuable information."})]}),Object(M.jsxs)("div",{className:"about-item",children:[Object(M.jsx)("h1",{children:"Nathan Jolteus"}),Object(M.jsx)("p",{children:"Nathan is an aspiring software developer, hoping to do quite a bit of front end web development. He spends his free time playing Mobile Legends and watching funny YouTube videos. This application features bootstrap, which adds flavor to the application and makes it more visually appealing."})]})]})};localStorage.token&&B(localStorage.token);var Ce=function(){return Object(r.useEffect)((function(){Ee.dispatch(F())}),[]),Object(M.jsx)(u.a,{store:Ee,children:Object(M.jsx)(l.a,{basename:"/Kapstone-Project-3",children:Object(M.jsxs)(r.Fragment,{children:[Object(M.jsx)(V,{}),Object(M.jsx)(J.b,{exact:!0,path:"/",component:W}),Object(M.jsx)(X,{}),Object(M.jsxs)(J.d,{children:[Object(M.jsx)(J.b,{exact:!0,path:"/register",component:Q}),Object(M.jsx)(J.b,{exact:!0,path:"/login",component:z}),Object(M.jsx)(pe,{exact:!0,path:"/dashboard",component:de}),Object(M.jsx)(pe,{exact:!0,path:"/profile",component:he}),Object(M.jsx)(pe,{exact:!0,path:"/about",component:Te})]})]})})})};s.a.render(Object(M.jsx)(n.a.StrictMode,{children:Object(M.jsx)(Ce,{})}),document.getElementById("root"))},66:function(e,t,a){},67:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.646d8b20.chunk.js.map