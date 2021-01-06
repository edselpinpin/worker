(this.webpackJsonpworkorder=this.webpackJsonpworkorder||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(3),c=a.n(r),i=a(26),n=a.n(i),l=(a(106),a(107),a(25)),o=a(10),d=a(11),m=a(13),j=a(12),h=a(24),u=a(164),b=a(165),O=a(166),x=a(167),f=a(168),p=a(169),g=a(170),v=a(96),N=a(75),y=a(97),w=a(27),C=a(33),E=a(0),M=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).toggleNav=s.toggleNav.bind(Object(h.a)(s)),s.state={isNavOpen:!1,isModalOpen:!1},s.toggleNav=s.toggleNav.bind(Object(h.a)(s)),s}return Object(d.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsxs)(E.b.Provider,{value:{color:"white"},children:[Object(s.jsx)(u.a,{fluid:!0,style:{margin:0},id:"jumbotron",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h2",{children:"The Worker"}),Object(s.jsx)("h5",{children:"Work Order Tracker App"})]})})})}),Object(s.jsx)(b.a,{dark:!0,sticky:"top",expand:"md",id:"navhead",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(O.a,{onClick:this.toggleNav}),Object(s.jsxs)(x.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(s.jsxs)(f.a,{navbar:!0,children:[Object(s.jsx)(p.a,{children:Object(s.jsxs)(l.b,{className:"nav-link",to:"/",children:[Object(s.jsx)(v.a,{})," Home"]})}),Object(s.jsx)(p.a,{children:Object(s.jsxs)(l.b,{className:"nav-link",to:"/workorder",children:[Object(s.jsx)(N.a,{})," Work Order"]})}),Object(s.jsx)(p.a,{children:Object(s.jsxs)(l.b,{className:"nav-link",to:"/invoice",children:[Object(s.jsx)(N.b,{})," Invoice"]})}),Object(s.jsx)(p.a,{children:Object(s.jsxs)(l.b,{className:"nav-link",to:"/customer",children:[Object(s.jsx)(y.a,{})," Customer"]})}),Object(s.jsx)(p.a,{children:Object(s.jsxs)(l.b,{className:"nav-link",to:"/service",children:[Object(s.jsx)(w.b,{})," Service/Tech"]})}),Object(s.jsx)(p.a,{children:Object(s.jsxs)(l.b,{className:"nav-link",to:"/settings",children:[Object(s.jsx)(C.b,{})," Settings"]})})]}),Object(s.jsx)("span",{className:"navbar-text  ml-auto",children:Object(s.jsx)(g.a,{outline:!0,onClick:this.toggleModal,children:"Login"})})]})]})})]})})}}]),a}(r.Component),S=a(14),R=a(21),k=(a(37),a(38),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={columnDefs:[{headerName:"WO #",field:"workorderNum",maxWidth:100,sortable:!0,filter:!0},{headerName:"Promise Date",field:"promiseDate",maxWidth:150,sortable:!0,filter:!0},{headerName:"First Name",field:"firstName",maxWidth:150,sortable:!0,filter:!0},{headerName:"Last Name",field:"lastName",maxWidth:150,sortable:!0,filter:!0},{headerName:"Mobile",field:"mobile"}],rowData:[]},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsxs)("div",{style:{height:230,width:"100%"},className:"ag-theme-fresh",children:[Object(s.jsx)("hr",{}),Object(s.jsx)(R.AgGridReact,{columnDefs:this.state.columnDefs,rowSelection:"single",rowData:this.state.rowData}),Object(s.jsx)("hr",{})]})})}}]),a}(r.Component)),D=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={columnDefs:[{headerName:"TechID",field:"techid",maxWidth:100,sortable:!0,filter:!0},{headerName:"First Name",field:"firstName",maxWidth:150,sortable:!0,filter:!0},{headerName:"Last Name",field:"lastName",maxWidth:150,sortable:!0,filter:!0},{headerName:"Count",field:"woCount"}],rowData:[]},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsxs)("div",{style:{height:230,width:"100%"},className:"ag-theme-fresh",children:[Object(s.jsx)("hr",{}),Object(s.jsx)(R.AgGridReact,{columnDefs:this.state.columnDefs,rowSelection:"single",rowData:this.state.rowData}),Object(s.jsx)("hr",{})]})})}}]),a}(r.Component);var F=function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 mt-3",children:Object(s.jsx)("h4",{children:"At a glance"})}),Object(s.jsxs)("div",{className:"col-md-6 col-xs-12 mt-3",children:[Object(s.jsx)("h6",{children:"Past due Work Order(s)"}),Object(s.jsx)(k,{})]}),Object(s.jsxs)("div",{className:"col-md-6 col-xs-12 mt-3",children:[Object(s.jsx)("h6",{children:"Work Order(s) due Today"}),Object(s.jsx)(k,{})]})]}),Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsxs)("div",{className:"col-md-6 col-xs-12  mt-5",children:[Object(s.jsx)("h6",{children:"Technician's Workload"}),Object(s.jsx)(D,{})]})})]})})};var L=function(){return Object(s.jsx)("div",{className:"workorder",children:Object(s.jsx)("h1",{children:"Work Order"})})};var A=function(){return Object(s.jsx)("div",{classname:"invoice",children:Object(s.jsx)("h1",{children:"Invoice Work Order"})})},q=a(7),z=a(176),T=a(174),W=a(175),_=a(171),V=a(173),I=a(19),G="LOGIN_FAILURE",Z="LOGIN_SUCCESS",H="ADD_PROFILE",P="REMOVE_PROFILE",B="REMOVE_DB_PROFILE",U="SET_DB_PROFILE",J="ADD_CUSTOMER",$="EDIT_CUSTOMER",Y="VIEW_CUSTOMER",K="DELETE_CUSTOMER",Q="FETCH_CUSTOMER",X="FETCH_CUSTOMER_FAILED",ee="ADD_SERVICE",te="EDIT_SERVICE",ae="VIEW_SERVICE",se="DELETE_SERVICE",re="FETCH_SERVICE",ce="FETCH_SERVICE_FAILED",ie="ADD_TECH",ne="EDIT_TECH",le="VIEW_TECH",oe="DELETE_TECH",de="FETCH_TECH",me="FETCH_TECH_FAILED",je="http://localhost:3001",he=function(){return function(e){return fetch(je+"/customer",{method:"GET",headers:{"Content-type":"application/javascript"}}).then((function(e){return e})).then((function(e){return e.json()})).then((function(t){return e(ue(t))})).catch((function(e){return console.log("Customer fetch error ".concat(e))}))}},ue=function(e){return{type:Q,payload:e}},be=function(e){return{type:re,payload:e}},Oe=function(e){return{type:de,payload:e}},xe=a(172),fe=function(e){return e&&e.length},pe=function(e){return function(t){return!t||t.length<=e}},ge=function(e){return function(t){return t&&t.length>=e}},ve=function(e){return!isNaN(+e)},Ne=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ye=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={touched:{firstname:!1,lastname:!1,street:!1,city:!1,state:!1,zip:!1,mobile:!1,email:!1}},s}return Object(d.a)(a,[{key:"handleSubmitAdd",value:function(e){this.props.addCustomer(e.firstname,e.lastname,e.street,e.city,e.state,e.zip,e.mobile,e.email),this.props.toggleModalAdd()}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(q.LocalForm,{onSubmit:function(t){return e.handleSubmitAdd(t)},children:[Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"firstname",md:3,children:"First Name"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"FirstName",className:"form-control",validators:{required:fe,minLength:ge(2),maxLength:pe(15)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".firstname",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"lastname",md:3,children:"Last Name"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:fe,minLength:ge(2),maxLength:pe(15)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".lastname",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"street",md:3,children:"Street"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".street",id:"street",name:"street",placeholder:"Street",className:"form-control",validators:{required:fe,minLength:ge(10)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".street",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 characters"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"city",md:3,children:"City"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".city",id:"city",name:"city",placeholder:"City",className:"form-control",validators:{required:fe}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".city",show:"touched",component:"div",messages:{required:"Required"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"state",md:3,children:"state"}),Object(s.jsxs)(V.a,{md:4,children:[Object(s.jsx)(q.Control.text,{model:".state",id:"state",name:"state",placeholder:"State",className:"form-control",validators:{required:fe,minLength:ge(2)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".state",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"zip",md:3,children:"Zip"}),Object(s.jsxs)(V.a,{md:4,children:[Object(s.jsx)(q.Control.text,{model:".zip",id:"zip",name:"zip",placeholder:"Zip",className:"form-control",validators:{required:fe,isNumber:ve,minLength:ge(5)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".state",show:"touched",component:"div",messages:{required:"Required",isNumber:"Zip code should be numeric",minLength:"Must be 5 digit numberic code"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"mobile",md:3,children:"Mobile"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".mobile",id:"mobile",name:"mobile",placeholder:"Mobile",className:"form-control",default:"CA",validators:{required:fe,minLength:ge(10),isNumber:ve}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".mobile",show:"touched",component:"div",messages:{required:"Required",sNumber:"Must be 10 digit number",minLength:"Must be a min 10 numbers"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"email",md:3,children:"Email"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:fe,validEmail:Ne}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}})]})]}),Object(s.jsx)(_.a,{className:"form-group",children:Object(s.jsx)(V.a,{md:{size:5},children:Object(s.jsx)(g.a,{outline:!0,type:"submit",color:"dark",children:"Submit"})})})]})})}}]),a}(r.Component),we=function(e){return e&&e.length},Ce=function(e){return function(t){return!t||t.length<=e}},Ee=function(e){return function(t){return t&&t.length>=e}},Me=function(e){return!isNaN(+e)},Se=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},Re=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={firstname:"",lastname:"",street:"",city:"",state:"",zip:"",mobile:"",email:"",touched:{firstname:!0,lastname:!0,street:!0,city:!0,state:!0,zip:!0,mobile:!0,email:!0}},s}return Object(d.a)(a,[{key:"handleSubmitAdd",value:function(e){this.props.toggleModalEdit()}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(q.LocalForm,{onSubmit:function(t){return e.handleSubmitAdd(t)},children:[Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"firstname",md:3,children:"First Name"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"FirstName",className:"form-control",defaultValue:this.props.selectedRow.firstname,validators:{required:we,minLength:Ee(2),maxLength:Ce(15)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".firstname",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"lastname",md:3,children:"Last Name"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",defaultValue:this.props.selectedRow.lastname,validators:{required:we,minLength:Ee(2),maxLength:Ce(15)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".lastname",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"street",md:3,children:"Street"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".street",id:"street",name:"street",placeholder:"Street",className:"form-control",defaultValue:this.props.selectedRow.street,validators:{required:we,minLength:Ee(10)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".street",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 characters"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"city",md:3,children:"City"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".city",id:"city",name:"city",placeholder:"City",className:"form-control",defaultValue:this.props.selectedRow.city,validators:{required:we}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".city",show:"touched",component:"div",messages:{required:"Required"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"state",md:3,children:"state"}),Object(s.jsxs)(V.a,{md:4,children:[Object(s.jsx)(q.Control.text,{model:".state",id:"state",name:"state",placeholder:"State",className:"form-control",defaultValue:this.props.selectedRow.state,validators:{required:we,minLength:Ee(2)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".state",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"zip",md:3,children:"Zip"}),Object(s.jsxs)(V.a,{md:4,children:[Object(s.jsx)(q.Control.text,{model:".zip",id:"zip",name:"zip",placeholder:"Zip",className:"form-control",defaultValue:this.props.selectedRow.zip,validators:{required:we,isNumber:Me,minLength:Ee(5)}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".zip",show:"touched",component:"div",messages:{required:"Required",isNumber:"Zip code should be numeric",minLength:"Must be 5 digit numberic code"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"mobile",md:3,children:"Mobile"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".mobile",id:"mobile",name:"mobile",placeholder:"Mobile",className:"form-control",defaultValue:this.props.selectedRow.mobile,validators:{required:we,minLength:Ee(10),isNumber:Me}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".mobile",show:"touched",component:"div",messages:{required:"Required",sNumber:"Must be 10 digit number",minLength:"Must be a min 10 numbers"}})]})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"email",md:3,children:"Email"}),Object(s.jsxs)(V.a,{md:8,children:[Object(s.jsx)(q.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",defaultValue:this.props.selectedRow.email,validators:{required:we,validEmail:Se}}),Object(s.jsx)(q.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}})]})]}),Object(s.jsx)(_.a,{className:"form-group",children:Object(s.jsx)(V.a,{md:{size:5},children:Object(s.jsx)(g.a,{outline:!0,type:"submit",color:"dark",children:"Submit"})})})]})})}}]),a}(r.Component),ke=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={firstname:"",lastname:"",street:"",city:"",state:"",zip:"",mobile:"",email:"",touched:{firstname:!1,lastname:!1,street:!1,city:!1,state:!1,zip:!1,mobile:!1,email:!1}},s}return Object(d.a)(a,[{key:"handleSubmitView",value:function(e){this.props.toggleModalEdit()}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(q.LocalForm,{children:[Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"firstname",md:3,children:"First Name"}),Object(s.jsx)(V.a,{md:8,children:Object(s.jsx)(q.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"FirstName",className:"form-control",value:this.props.selectedRow.firstname})})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"lastname",md:3,children:"Last Name"}),Object(s.jsx)(V.a,{md:8,children:Object(s.jsx)(q.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",value:this.props.selectedRow.lastname})})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"street",md:3,children:"Street"}),Object(s.jsx)(V.a,{md:8,children:Object(s.jsx)(q.Control.text,{model:".street",id:"street",name:"street",placeholder:"Street",className:"form-control",value:this.props.selectedRow.street})})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"city",md:3,children:"City"}),Object(s.jsx)(V.a,{md:8,children:Object(s.jsx)(q.Control.text,{model:".city",id:"city",name:"city",placeholder:"City",className:"form-control",value:this.props.selectedRow.city})})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"state",md:3,children:"state"}),Object(s.jsx)(V.a,{md:4,children:Object(s.jsx)(q.Control.text,{model:".state",id:"state",name:"state",placeholder:"State",className:"form-control",value:this.props.selectedRow.state})})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"zip",md:3,children:"Zip"}),Object(s.jsx)(V.a,{md:4,children:Object(s.jsx)(q.Control.text,{model:".zip",id:"zip",name:"zip",placeholder:"Zip",className:"form-control",value:this.props.selectedRow.zip})})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"mobile",md:3,children:"Mobile"}),Object(s.jsx)(V.a,{md:8,children:Object(s.jsx)(q.Control.text,{model:".mobile",id:"mobile",name:"mobile",placeholder:"Mobile",className:"form-control",value:this.props.selectedRow.mobile})})]}),Object(s.jsxs)(_.a,{className:"form-group",children:[Object(s.jsx)(xe.a,{htmlFor:"email",md:3,children:"Email"}),Object(s.jsx)(V.a,{md:8,children:Object(s.jsx)(q.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",value:this.props.selectedRow.email})})]})]})})}}]),a}(r.Component),De=a(44),Fe=a(45),Le={fetchCustomer:function(){return he()},addCustomer:function(e,t,a,s,r,c,i,n){return function(e,t,a,s,r,c,i,n){return function(l){return fetch(je+"/customer",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({firstname:e,lastname:t,street:a,city:s,state:r,zip:c,mobile:i,email:n})}).then((function(e){return e.text()})).then((function(e){alert(e),l(he())})).catch((function(e){alert("Add customer error"+e)}))}}(e,t,a,s,r,c,i,n)},resetCustomerForm:function(){return q.actions.reset("customerForm")}},Ae=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onButtonClick=function(){var e=s.gridApi.getSelectedNodes().map((function(e){return e.data})).map((function(e){return e.custno+""+e.firstname+e.lastname})).join(", ");alert("Selected Node: ".concat(e))},s.onGridReady=function(e){s.api=e.api,s.columnApi=e.columnApi},s.state={columnDefs:[{headerName:"Customer No",field:"custid",maxWidth:100,sortable:!0,filter:!0,checkboxSelection:!0},{headerName:"First Name",field:"firstname",maxWidth:150,sortable:!0,filter:!0},{headerName:"Last Name",field:"lastname",maxWidth:150,sortable:!0,filter:!0},{headerName:"Street",field:"stree",maxWidth:150,sortable:!0,filter:!0},{headerName:"City",field:"city",maxWidth:150,sortable:!0,filter:!0},{headerName:"State",field:"state",maxWidth:150,sortable:!0,filter:!0},{headerName:"Zip",field:"zip",maxWidth:150,sortable:!0,filter:!0},{headerName:"Mobile #",field:"mobile",maxWidth:150,sortable:!0,filter:!0},{headerName:"Email",field:"email",sortable:!0,filter:!0}],isModalOpenAdd:!1,isModalOpenDel:!1,isModlaOpenView:!1,isModlaOpenEdit:!1,viewform:!1,selectedRow:{firstname:"",lastname:"",street:"",city:"",state:"",zip:"",mobile:"",email:""},rowdata:s.props.customer.customer},s.toggleModalAdd=s.toggleModalAdd.bind(Object(h.a)(s)),s.toggleModalDel=s.toggleModalDel.bind(Object(h.a)(s)),s.toggleModalView=s.toggleModalView.bind(Object(h.a)(s)),s.toggleModalEdit=s.toggleModalEdit.bind(Object(h.a)(s)),s.updateSelectedRow=s.updateSelectedRow.bind(Object(h.a)(s)),s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCustomer()}},{key:"toggleModalAdd",value:function(){this.setState({isModalOpenAdd:!this.state.isModalOpenAdd})}},{key:"updateSelectedRow",value:function(){var e=this;this.gridApi.getSelectedNodes().map((function(e){return e.data})).forEach((function(t){e.setState({selectedRow:Object.assign({},e.state.selectedRow,{custid:t.custid,firstname:t.firstname,lastname:t.lastname,street:t.street,city:t.city,state:t.state,zip:t.zip,mobile:t.mobile,email:t.email})}),console.log(e.state.selectedRow.firstName)}))}},{key:"toggleModalEdit",value:function(){this.setState({isModalOpenEdit:!this.state.isModalOpenEdit}),this.updateSelectedRow()}},{key:"toggleModalDel",value:function(){this.updateSelectedRow(),this.setState({isModalOpenDel:!this.state.isModalOpenDel})}},{key:"toggleModalView",value:function(){this.setState({isModalOpenView:!this.state.isModalOpenView}),this.updateSelectedRow()}},{key:"handleSubmitAdd",value:function(e){alert("Customer posted"),this.toggleModalAdd()}},{key:"handleSubmitEdit",value:function(e){alert("Customer posted")}},{key:"handleSubmitDel",value:function(e){alert("Customer deleted"),this.updateSelectedRow(),this.toggleModalDel()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("div",{className:"col-12 mt-2",children:Object(s.jsx)("h4",{children:"Customer"})}),Object(s.jsx)("div",{style:{height:300,width:"100%"},className:"ag-theme-fresh",children:Object(s.jsx)(R.AgGridReact,{columnDefs:this.state.columnDefs,rowData:this.props.customer.customer,rowSelection:"single",onGridReady:function(t){return e.gridApi=t.api}})}),Object(s.jsxs)("div",{class:"row mt-1",children:[Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",onClick:this.toggleModalAdd,children:Object(s.jsx)(De.a,{})}),"  ",Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",onClick:this.toggleModalEdit,children:Object(s.jsx)(C.a,{})}),"  ",Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",onClick:this.toggleModalDel,children:Object(s.jsx)(Fe.a,{})}),"    "]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",onClick:this.toggleModalView,children:Object(s.jsx)(w.a,{})}),"    "]})]}),Object(s.jsx)("div",{}),Object(s.jsxs)(z.a,{isOpen:this.state.isModalOpenAdd,toggle:this.toggleModalAdd,children:[Object(s.jsx)(T.a,{toggle:this.toggleModalAdd,children:"Add Customer"}),Object(s.jsx)(W.a,{children:Object(s.jsx)(ye,{addCustomer:this.props.addCustomer,toggleModalAdd:this.toggleModalAdd})})]}),Object(s.jsxs)(z.a,{isOpen:this.state.isModalOpenEdit,toggleModalEdit:this.toggleModalEdit,children:[Object(s.jsx)(T.a,{toggle:this.toggleModalEdit,children:"Edit Customer"}),Object(s.jsx)(W.a,{children:Object(s.jsx)(Re,{toggleModalEdit:this.toggleModalEdit,selectedRow:this.state.selectedRow})})]}),Object(s.jsxs)(z.a,{isOpen:this.state.isModalOpenView,toggleModalEdit:this.toggleModalView,children:[Object(s.jsx)(T.a,{toggle:this.toggleModalView,children:"View Customer"}),Object(s.jsx)(W.a,{children:Object(s.jsx)(ke,{toggleModalEdit:this.toggleModalView,selectedRow:this.state.selectedRow})})]}),Object(s.jsx)(z.a,{isOpen:this.state.isModalOpenDel,toggle:this.toggleModalDel,children:Object(s.jsxs)(q.LocalForm,{onSubmit:function(t){return e.handleSubmitDel(e.state.custno)},children:[Object(s.jsx)(T.a,{toggle:this.toggleModalDel,children:"Delete Customer"}),Object(s.jsxs)(W.a,{children:[Object(s.jsxs)("span",{children:["Are you want to delete customer ",this.state.selectedRow.custid," ?"]}),Object(s.jsx)(_.a,{className:"form-group mt-2",children:Object(s.jsx)(V.a,{md:{size:5},children:Object(s.jsx)(g.a,{outline:!0,type:"submit",color:"dark",children:"Yes"})})})]})]})})]})}}]),a}(r.Component),qe=Object(I.connect)((function(e){return{customer:e.customer}}),Le)(Ae),ze=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={columnDefs:[{headerName:"WO #",field:"workorderNum",maxWidth:100,sortable:!0,filter:!0},{headerName:"Promised Date",field:"promiseDate",maxWidth:150,sortable:!0,filter:!0},{headerName:"Brand",field:"brand",maxWidth:150,sortable:!0,filter:!0},{headerName:"Model",field:"model",maxWidth:150,sortable:!0,filter:!0},{headerName:"Amount",field:"amount"}],rowData:[]},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("div",{className:"col-12 mt-2",children:Object(s.jsx)("h4",{children:"WO History"})}),Object(s.jsx)("div",{style:{height:300,width:"100%"},className:"ag-theme-fresh",children:Object(s.jsx)(R.AgGridReact,{columnDefs:this.state.columnDefs,rowSelection:"single",rowData:this.state.rowData})}),Object(s.jsx)("div",{className:"col-4 mt-1",children:Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(w.a,{})})})]})}}]),a}(r.Component);a(162);var Te=function(e){return console.log(e.customer),Object(s.jsxs)("div",{className:"container",id:"customer",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-8 mt-3",children:Object(s.jsx)(qe,{})}),Object(s.jsx)("div",{className:"col mt-3",children:Object(s.jsx)(ze,{})})]}),Object(s.jsx)("div",{className:"row"})]})},We={fetchService:function(){return function(e){return fetch(je+"/service",{method:"GET",headers:{"Content-type":"application/javascript"}}).then((function(e){console.log(e)})).then((function(e){return e.json()})).then((function(t){return e(be(t))})).catch((function(e){return console.log("Service Menu  fetch error ".concat(e))}))}}},_e=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onButtonClick=function(){var e=s.gridApi.getSelectedNodes().map((function(e){return e.data})).map((function(e){return e.custno+""+e.firstname+e.lastname})).join(", ");alert("Selected Node: ".concat(e))},s.onGridReady=function(e){s.api=e.api,s.columnApi=e.columnApi,s.api.sizeColumnsToFit()},s.state={columnDefs:[{headerName:"Service Code",field:"serviceCode",maxWidth:140,sortable:!0,filter:!0,checkboxSelection:!0,pinned:"left"},{headerName:"Service Name",field:"serviceName",maxWidth:200,sortable:!0,filter:!0},{headerName:"Price",field:"price",maxWidth:150,sortable:!0,filter:!0}],rowdata:null},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchService()}},{key:"render",value:function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsxs)("div",{class:"container",children:[Object(s.jsx)("div",{className:"col-12 mt-2",children:Object(s.jsx)("h4",{children:"Service Menu"})}),Object(s.jsx)("div",{style:{height:300,width:"100%"},className:"ag-theme-fresh",children:Object(s.jsx)(R.AgGridReact,{columnDefs:this.state.columnDefs,rowSelection:"single",rowData:this.props.service.service,onGridReady:this.onGridReady})}),Object(s.jsxs)("div",{className:"row mt-1",children:[Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(De.a,{})}),"  ",Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(C.a,{})}),"  ",Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(Fe.a,{})}),"    "]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(w.a,{})}),"    "]})]})]})})}}]),a}(r.Component),Ve=Object(I.connect)((function(e){return{service:e.service}}),We)(_e),Ie={fetchTech:function(){return function(e){return fetch(je+"/tech",{method:"GET",headers:{"Content-type":"application/javascript"}}).then((function(e){return e})).then((function(e){return e.json()})).then((function(t){return e(Oe(t))})).catch((function(e){return console.log("Tech fetch error ".concat(e))}))}}},Ge=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onButtonClick=function(){var e=s.gridApi.getSelectedNodes().map((function(e){return e.data})).map((function(e){return e.custno+""+e.firstname+e.lastname})).join(", ");alert("Selected Node: ".concat(e))},s.onGridReady=function(e){s.api=e.api,s.columnApi=e.columnApi,s.api.sizeColumnsToFit()},s.state={columnDefs:[{headerName:"Tech Code",field:"techcode",maxWidth:100,sortable:!0,filter:!0,checkboxSelection:!0,pinned:"left"},{headerName:"First Name",field:"firstname",sortable:!0,filter:!0},{headerName:"Last Name",field:"lastname",maxWidth:150,sortable:!0,filter:!0}],rowdata:[]},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchTech()}},{key:"render",value:function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsxs)("div",{class:"container",children:[Object(s.jsx)("div",{className:"col-12 mt-2",children:Object(s.jsx)("h4",{children:"Technicians"})}),Object(s.jsx)("div",{style:{height:300,width:"100%"},className:"ag-theme-fresh",children:Object(s.jsx)(R.AgGridReact,{columnDefs:this.state.columnDefs,rowSelection:"single",rowData:this.props.tech.tech,onGridReady:this.onGridReady})}),Object(s.jsxs)("div",{className:"row mt-1",children:[Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(De.a,{})}),"  ",Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(C.a,{})}),"  ",Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(Fe.a,{})}),"    "]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)(g.a,{outline:!0,size:"md",type:"submit",color:"dark",children:Object(s.jsx)(w.a,{})}),"    "]})]})]})})}}]),a}(r.Component),Ze=Object(I.connect)((function(e){return{tech:e.tech}}),Ie)(Ge);var He=function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-6 col-xs-12 mt-3",children:Object(s.jsx)(Ve,{})}),Object(s.jsx)("div",{className:"col mt-3",children:Object(s.jsx)(Ze,{})})]})})})};var Pe=function(){return Object(s.jsx)("div",{className:"service",children:Object(s.jsx)("h1",{children:"System Settings"})})},Be=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(M,{}),Object(s.jsxs)(S.c,{children:[Object(s.jsx)(S.a,{path:"/",exact:!0,component:F}),Object(s.jsx)(S.a,{path:"/workorder",component:L}),Object(s.jsx)(S.a,{path:"/invoice",component:A}),Object(s.jsx)(S.a,{path:"/customer",component:Te}),Object(s.jsx)(S.a,{path:"/service",component:He}),Object(s.jsx)(S.a,{path:"/settings",component:Pe})]})]})})}}]),a}(r.Component),Ue=a(6),Je=a(29),$e=a(99),Ye=a(100),Ke=a.n(Ye),Qe={is_authenticated:!1,profile:null},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(Ue.a)(Object(Ue.a)({},e),{},{is_authenticated:!0});case G:return Object(Ue.a)(Object(Ue.a)({},e),{},{is_authenticated:!1});case H:return Object(Ue.a)(Object(Ue.a)({},e),{},{profile:t.payload});case P:return Object(Ue.a)(Object(Ue.a)({},e),{},{profile:null});case U:return Object(Ue.a)(Object(Ue.a)({},e),{},{db_profile:t.payload});case B:return Object(Ue.a)(Object(Ue.a)({},e),{},{db_profile:null});default:return e}},et={customer:[],custview:[]},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(Ue.a)(Object(Ue.a)({},e),{},{customer:t.payload});case X:return Object(Ue.a)(Object(Ue.a)({},e),{},{customer:[]});case J:return Object(Ue.a)(Object(Ue.a)({},e),{},{profile:t.payload});case K:return Object(Ue.a)(Object(Ue.a)({},e),{},{profile:null});case $:return Object(Ue.a)(Object(Ue.a)({},e),{},{profile:t.payload});case Y:return Object(Ue.a)(Object(Ue.a)({},e),{},{custview:t.payload});default:return e}},at={service:[]},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(Ue.a)(Object(Ue.a)({},e),{},{service:t.payload});case ce:return Object(Ue.a)(Object(Ue.a)({},e),{},{service:[]});case ee:return Object(Ue.a)(Object(Ue.a)({},e),{},{service:t.payload});case te:case se:return Object(Ue.a)(Object(Ue.a)({},e),{},{service:null});case ae:return Object(Ue.a)(Object(Ue.a)({},e),{},{service:t.payload});default:return e}},rt={tech:[]},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(Ue.a)(Object(Ue.a)({},e),{},{tech:t.payload});case me:return Object(Ue.a)(Object(Ue.a)({},e),{},{tech:[]});case ie:return Object(Ue.a)(Object(Ue.a)({},e),{},{tech:t.payload});case oe:return Object(Ue.a)(Object(Ue.a)({},e),{},{tech:null});case ne:case le:return Object(Ue.a)(Object(Ue.a)({},e),{},{tech:t.payload});default:return e}},it={custid:"",firstname:"",lastname:"",street:"",city:"",state:"",zip:"",mobile:"",email:""},nt=Object(Je.createStore)(Object(Je.combineReducers)(Object(Ue.a)({customer:tt,service:st,Auth:Xe,tech:ct},Object(q.createForms)({customerForm:it}))),Object(Je.applyMiddleware)($e.a,Ke.a));var lt=function(){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsx)(I.Provider,{store:nt,children:Object(s.jsx)(l.a,{children:Object(s.jsx)("div",{className:"main",children:Object(s.jsx)(Be,{})})})})})},ot=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,177)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),r(e),c(e),i(e)}))};n.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(lt,{})}),document.getElementById("root")),ot()}},[[163,1,2]]]);
//# sourceMappingURL=main.946dcb3a.chunk.js.map