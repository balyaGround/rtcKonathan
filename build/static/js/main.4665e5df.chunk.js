(this.webpackJsonpwebrtc=this.webpackJsonpwebrtc||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(50),i=n.n(r),a=(n(59),n(20)),s=n(21),d=n(54),l=n(53),u=n(51),b=n.n(u),j=n(7),f=n(15),p=n(52),m=(n(90),n(34)),h=n.n(m),O=n(19),g=n.n(O),x=n(2),v={width:220,height:200,facingMode:"user"},w=function(){var e=o.a.useRef(null),t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],i=n[1],a=o.a.useCallback((function(){var t=e.current.getScreenshot();i(t);var n=g.a.storage(),c=t.split(",")[1];n.ref("FormPhotos/user.jpeg").putString(c,"base64",{contentType:"image/jpeg"}).then((function(){console.log("Image uploaded")})).catch((function(e){return console.log(e)}))}),[e]);return Object(x.jsxs)("div",{className:"webcam-container",children:[Object(x.jsx)("div",{className:"webcam-img",children:""==r?Object(x.jsx)(h.a,{audio:!1,height:200,ref:e,screenshotFormat:"image/jpeg",width:220,videoConstraints:v}):Object(x.jsx)("img",{src:r})}),Object(x.jsx)("div",{children:""!=r?Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),i("")},className:"webcam-btn",children:"Retake Image"}):Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),a()},children:"Capture"})})]})};n(102);function k(){var e=Object(p.a)(),t=e.register,n=e.getValues,c=e.handleSubmit,o=e.formState.errors;return console.log(o),Object(x.jsx)("div",{className:"home-container",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"text",children:[Object(x.jsx)("h1",{children:"Application Form"}),Object(x.jsxs)("form",{className:"form",onSubmit:c((function(e){console.log(e),g.a.firestore().collection("form").add({fullname:n("fullname"),id:n("id"),email:n("email"),tel:n("tel"),gender:n("gender"),dob:n("dob")}),alert("Form submitted")})),children:[Object(x.jsx)("input",Object(f.a)({type:"text",placeholder:"Full name"},t("fullname",{required:!0,maxLength:80}))),Object(x.jsx)("input",Object(f.a)({type:"number",placeholder:"ID number"},t("id",{required:!0,maxLength:16,minLength:16}))),Object(x.jsx)("input",Object(f.a)({type:"text",placeholder:"Email"},t("email",{required:!0,pattern:/^\S+@\S+$/i}))),Object(x.jsx)("input",Object(f.a)({type:"tel",placeholder:"Mobile number"},t("tel",{required:!0,minLength:6,maxLength:12}))),Object(x.jsxs)("select",Object(f.a)(Object(f.a)({},t("gender",{required:!0})),{},{children:[Object(x.jsx)("option",{value:"Male",children:"Male"}),Object(x.jsx)("option",{value:"Female",children:"Female"})]})),Object(x.jsx)("input",Object(f.a)({type:"date",placeholder:"Date of Birth"},t("dob",{required:!0}))),Object(x.jsx)("div",{className:"photo-container",children:Object(x.jsx)(w,{})}),Object(x.jsx)("input",{type:"submit"})]})]})})})}n(103);var C=function(){var e=o.a.useState(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)("div",{className:"button",children:[Object(x.jsx)("input",{type:"submit",value:"Form",onClick:function(){return c(!0)}}),n?Object(x.jsx)(k,{}):null]})},S={apiKey:"AIzaSyBK4_ckiJfuDrGH2naN07SmruemW2EjRPM",authDomain:"webrtc-dd6e4.firebaseapp.com",databaseURL:"https://webrtc-dd6e4-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"webrtc-dd6e4",storageBucket:"webrtc-dd6e4.appspot.com",messagingSenderId:"143154930393",appId:"1:143154930393:web:1465b41294f95cb5f8d4c8",measurementId:"G-XV6LN18P27"},y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).componentDidMount=function(){g.a.initializeApp(S),c.socket=b.a.connect("https://e7f9-139-192-176-231.ngrok.io/webrtcPeer",{path:"/webrtc",query:{}}),c.socket.on("connection-success",(function(e){console.log(e)})),c.socket.on("offerOrAnswer",(function(e){c.textref.value=JSON.stringify(e),c.pc.setRemoteDescription(new RTCSessionDescription(e))})),c.socket.on("candidate",(function(e){c.pc.addIceCandidate(new RTCIceCandidate(e))}));c.pc=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),c.pc.onicecandidate=function(e){e.candidate&&c.sendToPeer("candidate",e.candidate)},c.pc.oniceconnectionstatechange=function(e){console.log(e)},c.pc.ontrack=function(e){c.remoteVideoref.current.srcObject=e.streams[0]};navigator.mediaDevices.getUserMedia({video:!0,options:{mirror:!0}}).then((function(e){window.localStream=e,c.localVideoref.current.srcObject=e,c.pc.addStream(e)})).catch((function(e){console.log("getUserMedia Error: ",e)}))},c.sendToPeer=function(e,t){c.socket.emit(e,{socketID:c.socket.id,payload:t})},c.createOffer=function(){console.log("Offer"),c.pc.createOffer({offerToReceiveVideo:1}).then((function(e){c.pc.setLocalDescription(e),c.sendToPeer("offerOrAnswer",e)}))},c.createAnswer=function(){console.log("Answer"),c.pc.createAnswer({offerToReceiveVideo:1}).then((function(e){c.pc.setLocalDescription(e),c.sendToPeer("offerOrAnswer",e)}))},c.setRemoteDescription=function(){var e=JSON.parse(c.textref.value);c.pc.setRemoteDescription(new RTCSessionDescription(e))},c.addCandidate=function(){c.candidates.forEach((function(e){console.log(JSON.stringify(e)),c.pc.addIceCandidate(new RTCIceCandidate(e))}))},c.localVideoref=o.a.createRef(),c.remoteVideoref=o.a.createRef(),c.socket=null,c.candidates=[],c}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("video",{style:{width:240,height:240,margin:5,backgroundColor:"black"},ref:this.localVideoref,autoPlay:!0,muted:!0}),Object(x.jsx)("video",{style:{width:240,height:240,margin:5,backgroundColor:"black"},ref:this.remoteVideoref,autoPlay:!0}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:this.createOffer,children:"Offer"}),Object(x.jsx)("button",{onClick:this.createAnswer,children:"Answer"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(C,{})]})}}]),n}(c.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),D()},59:function(e,t,n){},90:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.4665e5df.chunk.js.map