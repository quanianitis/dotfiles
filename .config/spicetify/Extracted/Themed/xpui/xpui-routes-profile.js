"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2499],{65111:(e,a,i)=>{i.d(a,{P:()=>g});var t=i(59496),r=i(57759),o=i(34194),s=i(89161),l=i(20295),n=i(90742),d=i(19),u=i(67363),c=i(44762),m=i(4637);const g=t.memo((function(e){const{images:a,name:i,uri:g,onClick:p,isHero:h,testId:f,index:v,requestId:x,color:b}=e;let y;const k=(0,t.useCallback)((()=>(0,m.jsx)(n.x,{isCircular:!0,isHero:h,images:a,color:b,FallbackComponent:e=>(0,m.jsx)(r.a,{iconSize:64,...e})})),[b,a,h]),I=(0,t.useCallback)((()=>h?(0,m.jsx)(u.k,{children:o.ag.get("card.tag.profile")}):o.ag.get("card.tag.profile")),[h]);return y=h?(0,m.jsx)(d.Z,{index:v,onClick:p,headerText:i,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:k,renderSubHeaderContent:I,testId:f,requestId:x}):(0,m.jsx)(l.C,{index:v,onClick:p,headerText:i,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:k,renderSubHeaderContent:I,testId:f,requestId:x}),(0,m.jsx)(s._,{menu:(0,m.jsx)(c.I,{uri:g}),children:y})}))},6829:(e,a,i)=>{i.d(a,{T:()=>c});var t=i(46779),r=i(58138),o=i(3444),s=i(95518),l=i(49188);const n="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer";var u=i(4637);const c=function({onClick:e,name:a,images:i,canEdit:c,placeholderType:m,shape:g=l.Kc.SQUARE,dragUri:p=""}){const[h,f]=(0,r.RH)(i),v=(0,o.VO)(h,f)===o.KO.loaded,x=(0,t.O1)([p],a);return(0,u.jsxs)("div",{className:n,"data-testid":`${m}-image`,draggable:!!p,onDragStart:x,children:[(0,u.jsx)(l.Oe,{loading:"eager",name:a,images:i,placeholderType:m,shape:g}),c&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(s.F,{overlay:v,onClick:e,rounded:g===l.Kc.CIRCLE})})]})}},55954:(e,a,i)=>{i.r(a),i.d(a,{default:()=>wa});var t=i(59496),r=i(92053),o=i(2962),s=i(8662),l=i(84875),n=i.n(l),d=i(34194),u=i(65111),c=i(88645),m=i(32674),g=i(222),p=i(81803);const h="umiKMm5NVr5UeBJCHS6U",f="jzhwZKbfx4vrC_MYd_7c",v="MWWPQQjbjRfoGdPD8D68",x="rMpf7sfaPDcj387_52fA",b="kWCnF32FrVtGHmTy8QeV",y="uJxNEI2k7x8UCDdMKELt",k="wDIZ2yYKjfGI68I4cZ98";var I=i(4637);const j=e=>{const{uri:a}=e,{data:i,loading:t,error:r}=(0,g.J)(p.n5.getFollowers,[a]),o=i?.profiles;return t?(0,I.jsx)(c.h,{hasError:null!==r,errorMessage:d.ag.get("error.not_found.title.page")}):(0,I.jsx)(m.P,{className:n()("contentSpacing",v),title:d.ag.get("followers"),total:o?.length,showAll:!0,children:o?.map(((e,a)=>(0,I.jsx)(u.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},_=e=>{const{uri:a}=e,{data:i,loading:t,error:r}=(0,g.J)(p.n5.getFollowing,[a]),o=i?.profiles;return t?(0,I.jsx)(c.h,{hasError:null!==r,errorMessage:d.ag.get("error.not_found.title.page")}):(0,I.jsx)(m.P,{className:n()("contentSpacing",v),title:d.ag.get("following"),total:o?.length,showAll:!0,children:o?.map(((e,a)=>(0,I.jsx)(u.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};var N=i(90641),P=i(68045),w=i(62438),S=i(19244),R=i(10707),C=i(16288),T=i(91388),O=i(44762),A=i(5748),D=i(6829),U=i(49188),E=i(23706),M=i(97054),F=i(74684),W=i(37764),L=i(61331),H=i(44517),J=i(93163),K=i(32454),B=i(58138),Q=i(3444);const G="F8_EX1AeKxXNSeh1qiHq",z="valcBm4lLe9qFBcg0sFY",V="tAIzXn8C9KriGwGuBfWg",Z="PsrXxenHUFXYM1ub1xWw",q="U_VWfeeLWnDPhUTxCmrQ",$=function({onClickEdit:e,onClickRemove:a,name:i,images:t}){const[r,o]=(0,B.RH)(t),s=(0,Q.VO)(r,o)===Q.KO.loaded;return(0,I.jsxs)("div",{className:G,children:[(0,I.jsx)(U.Oe,{loading:"eager",name:i,images:t,placeholderType:"user",shape:U.Kc.CIRCLE}),(0,I.jsxs)("div",{className:n()(z,{[Z]:s}),children:[(0,I.jsx)("button",{className:V,"aria-haspopup":"true",onClick:e,type:"button",children:(0,I.jsx)(P.D,{variant:"ballad",children:d.ag.get("user.edit-details.choose-photo")})}),(0,I.jsx)("div",{className:n()(q,"icon"),children:(0,I.jsx)(K.y,{iconSize:48,"aria-hidden":!0})}),(0,I.jsx)("button",{className:V,onClick:a,type:"button",children:(0,I.jsx)(P.D,{variant:"ballad",children:d.ag.get("user.edit-details.remove-photo")})})]})]})};var X=i(7137),Y=i(90176),ee=(i(74185),i(47327),i(88365),i(50421));const ae={paths:""},ie={encode(e,a=ee.Writer.create()){for(const i of e.paths)a.uint32(10).string(i);return a},decode(e,a){const i=e instanceof Uint8Array?new ee.Reader(e):e;let t=void 0===a?i.len:i.pos+a;const r={...ae};for(r.paths=[];i.pos<t;){const e=i.uint32();if(e>>>3==1)r.paths.push(i.string());else i.skipType(7&e)}return r},fromJSON(e){const a={...ae};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const i of e.paths)a.paths.push(String(i));return a},fromPartial(e){const a={...ae};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const i of e.paths)a.paths.push(i);return a},toJSON(e){const a={};return e.paths?a.paths=e.paths.map((e=>e)):a.paths=[],a}};i(90036);var te=i(29168),re=i(55872).lW;const oe={value:0},se={value:!1},le={value:""};const ne={encode:(e,a=ee.Writer.create())=>(a.uint32(8).int32(e.value),a),decode(e,a){const i=e instanceof Uint8Array?new ee.Reader(e):e;let t=void 0===a?i.len:i.pos+a;const r={...oe};for(;i.pos<t;){const e=i.uint32();if(e>>>3==1)r.value=i.int32();else i.skipType(7&e)}return r},fromJSON(e){const a={...oe};return void 0!==e.value&&null!==e.value?a.value=Number(e.value):a.value=0,a},fromPartial(e){const a={...oe};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=0,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},de={encode:(e,a=ee.Writer.create())=>(a.uint32(8).bool(e.value),a),decode(e,a){const i=e instanceof Uint8Array?new ee.Reader(e):e;let t=void 0===a?i.len:i.pos+a;const r={...se};for(;i.pos<t;){const e=i.uint32();if(e>>>3==1)r.value=i.bool();else i.skipType(7&e)}return r},fromJSON(e){const a={...se};return void 0!==e.value&&null!==e.value?a.value=Boolean(e.value):a.value=!1,a},fromPartial(e){const a={...se};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=!1,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},ue={encode:(e,a=ee.Writer.create())=>(a.uint32(10).string(e.value),a),decode(e,a){const i=e instanceof Uint8Array?new ee.Reader(e):e;let t=void 0===a?i.len:i.pos+a;const r={...le};for(;i.pos<t;){const e=i.uint32();if(e>>>3==1)r.value=i.string();else i.skipType(7&e)}return r},fromJSON(e){const a={...le};return void 0!==e.value&&null!==e.value?a.value=String(e.value):a.value="",a},fromPartial(e){const a={...le};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value="",a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}};ee.util.Long!==te&&(ee.util.Long=te,(0,ee.configure)());const ce=globalThis;ce.atob,ce.btoa;const me={maxWidth:0,maxHeight:0,url:""},ge={},pe={},he={encode:(e,a=ee.Writer.create())=>(a.uint32(8).int32(e.maxWidth),a.uint32(16).int32(e.maxHeight),a.uint32(26).string(e.url),a),decode(e,a){const i=e instanceof Uint8Array?new ee.Reader(e):e;let t=void 0===a?i.len:i.pos+a;const r={...me};for(;i.pos<t;){const e=i.uint32();switch(e>>>3){case 1:r.maxWidth=i.int32();break;case 2:r.maxHeight=i.int32();break;case 3:r.url=i.string();break;default:i.skipType(7&e)}}return r},fromJSON(e){const a={...me};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=Number(e.maxWidth):a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=Number(e.maxHeight):a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=String(e.url):a.url="",a},fromPartial(e){const a={...me};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=e.maxWidth:a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=e.maxHeight:a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=e.url:a.url="",a},toJSON(e){const a={};return void 0!==e.maxWidth&&(a.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(a.maxHeight=e.maxHeight),void 0!==e.url&&(a.url=e.url),a}},fe={encode(e,a=ee.Writer.create()){void 0!==e.username&&void 0!==e.username&&ue.encode({value:e.username},a.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&ue.encode({value:e.name},a.uint32(18).fork()).ldelim();for(const i of e.images)he.encode(i,a.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&de.encode({value:e.verified},a.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&de.encode({value:e.editProfileDisabled},a.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&de.encode({value:e.reportAbuseDisabled},a.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&de.encode({value:e.abuseReportedName},a.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&de.encode({value:e.abuseReportedImage},a.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&de.encode({value:e.hasSpotifyName},a.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&de.encode({value:e.hasSpotifyImage},a.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&ne.encode({value:e.color},a.uint32(90).fork()).ldelim(),a},decode(e,a){const i=e instanceof Uint8Array?new ee.Reader(e):e;let t=void 0===a?i.len:i.pos+a;const r={...ge};for(r.images=[];i.pos<t;){const e=i.uint32();switch(e>>>3){case 1:r.username=ue.decode(i,i.uint32()).value;break;case 2:r.name=ue.decode(i,i.uint32()).value;break;case 3:r.images.push(he.decode(i,i.uint32()));break;case 4:r.verified=de.decode(i,i.uint32()).value;break;case 5:r.editProfileDisabled=de.decode(i,i.uint32()).value;break;case 6:r.reportAbuseDisabled=de.decode(i,i.uint32()).value;break;case 7:r.abuseReportedName=de.decode(i,i.uint32()).value;break;case 8:r.abuseReportedImage=de.decode(i,i.uint32()).value;break;case 9:r.hasSpotifyName=de.decode(i,i.uint32()).value;break;case 10:r.hasSpotifyImage=de.decode(i,i.uint32()).value;break;case 11:r.color=ne.decode(i,i.uint32()).value;break;default:i.skipType(7&e)}}return r},fromJSON(e){const a={...ge};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=String(e.username):a.username=void 0,void 0!==e.name&&null!==e.name?a.name=String(e.name):a.name=void 0,void 0!==e.images&&null!==e.images)for(const i of e.images)a.images.push(he.fromJSON(i));return void 0!==e.verified&&null!==e.verified?a.verified=Boolean(e.verified):a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=Boolean(e.editProfileDisabled):a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=Boolean(e.abuseReportedName):a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=Boolean(e.abuseReportedImage):a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=Boolean(e.hasSpotifyName):a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=Boolean(e.hasSpotifyImage):a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=Number(e.color):a.color=void 0,a},fromPartial(e){const a={...ge};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=e.username:a.username=void 0,void 0!==e.name&&null!==e.name?a.name=e.name:a.name=void 0,void 0!==e.images&&null!==e.images)for(const i of e.images)a.images.push(he.fromPartial(i));return void 0!==e.verified&&null!==e.verified?a.verified=e.verified:a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=e.editProfileDisabled:a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=e.reportAbuseDisabled:a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=e.abuseReportedName:a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=e.abuseReportedImage:a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=e.hasSpotifyName:a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=e.hasSpotifyImage:a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=e.color:a.color=void 0,a},toJSON(e){const a={};return void 0!==e.username&&(a.username=e.username),void 0!==e.name&&(a.name=e.name),e.images?a.images=e.images.map((e=>e?he.toJSON(e):void 0)):a.images=[],void 0!==e.verified&&(a.verified=e.verified),void 0!==e.editProfileDisabled&&(a.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(a.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(a.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(a.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(a.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(a.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(a.color=e.color),a}},ve={encode:(e,a=ee.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&ie.encode(e.mask,a.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&fe.encode(e.userProfile,a.uint32(18).fork()).ldelim(),a),decode(e,a){const i=e instanceof Uint8Array?new ee.Reader(e):e;let t=void 0===a?i.len:i.pos+a;const r={...pe};for(;i.pos<t;){const e=i.uint32();switch(e>>>3){case 1:r.mask=ie.decode(i,i.uint32());break;case 2:r.userProfile=fe.decode(i,i.uint32());break;default:i.skipType(7&e)}}return r},fromJSON(e){const a={...pe};return void 0!==e.mask&&null!==e.mask?a.mask=ie.fromJSON(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=fe.fromJSON(e.userProfile):a.userProfile=void 0,a},fromPartial(e){const a={...pe};return void 0!==e.mask&&null!==e.mask?a.mask=ie.fromPartial(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=fe.fromPartial(e.userProfile):a.userProfile=void 0,a},toJSON(e){const a={};return void 0!==e.mask&&(a.mask=e.mask?ie.toJSON(e.mask):void 0),void 0!==e.userProfile&&(a.userProfile=e.userProfile?fe.toJSON(e.userProfile):void 0),a}},xe=`${X.XA}/identity`;async function be(e,a,{name:i,imageUploadToken:t}){void 0!==i&&await async function(e,a,i){const t=ve.encode(ve.fromPartial({mask:{paths:["name"]},userProfile:null!==i?{name:i}:{}}));await e.build().withHost(xe).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,Y.C)(a))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(t.finish()).withoutMarket().send()}(e,a,i),void 0!==t&&(null!==t?await async function(e,a,i){await e.build().withHost(xe).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,Y.C)(a))}/${i}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,a,t):await async function(e,a){await e.build().withHost(xe).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,Y.C)(a))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,a))}var ye=i(21182);const ke={type:"error",get message(){return d.ag.get("user.edit-details.error.file-size-exceeded",10)}},Ie={type:"error",get message(){return d.ag.get("user.edit-details.error.too-small",300,300)}},je={type:"error",get message(){return d.ag.get("user.edit-details.error.missing-name")}},_e={type:"error",get message(){return d.ag.get("user.edit-details.error.failed-to-save")}},Ne={type:"error",get message(){return d.ag.get("user.edit-details.error.file-upload-failed")}};function Pe(e){return{type:"setLoading",loading:e}}function we(e){return{type:"setMessage",message:e}}function Se(e,a){switch(a.type){case"setName":return{...e,name:a.name};case"setMessage":return{...e,message:a.message,loading:!1};case"setLoading":return{...e,loading:a.loading,message:null};case"setImageData":return{...e,imageData:a.data,removeImage:!1};case"setImageToken":return{...e,imageToken:a.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}var Re=i(76872),Ce=i(21253),Te=i(17062);const Oe="XwNfIrI6_hCa_9_T2cQB",Ae="so0bdX3oZH6YW5_nGxIR",De="aM3plU4zzDqjWlvUHGYb",Ue="zHeo4VUxytwm6Ptr0QyA",Ee="vAeyAmeLkDEDKdL9Hou0",Me="dnmzO6yYKkxUV8jl7O1Z",Fe="oN9QVvJKEtdTH3HGfCu1",We="uj7hczcCH1dZpse8Kfmi",Le="wvLAEV5wF5C5ej6rvimT",He="gAQfzAUp1FuSXODeZJfP",Je="dMhJaxli87_22jb_3d9x",Ke="MDb7QhAtHeyM4gKj8j8t",Be="zGbjZMZ1DTx4futEbN9l",Qe=t.memo((function({uri:e,name:a,image:i,onClose:r,shouldOpenImagePicker:o}){const[s,l]=(0,Ce.Hs)(),[u,c]=function({name:e,image:a}){return(0,t.useReducer)(Se,{loading:!1,message:null,name:e,image:a})}({name:a,image:i}),m=(0,t.useMemo)((()=>{const e=u.imageData||u.image;return e?[{url:e,width:300,height:300}]:[]}),[u.image,u.imageData]);(0,t.useEffect)((()=>{o&&l()}),[l,o]);const g=(0,t.useCallback)((e=>{e===Ce.Hy.FILE_TOO_BIG?c(we(ke)):e===Ce.Hy.IMAGE_TOO_SMALL&&c(we(Ie))}),[c]),p=(0,t.useCallback)((()=>{c({type:"removeImage"})}),[c]),h=(0,t.useCallback)((async a=>{a.preventDefault();if(0!==u.name.trim().length){c(Pe(!0));try{const a=u.removeImage?null:u.imageToken;await async function(e,{name:a,imageUploadToken:i}){await be(ye.b.getInstance(),e,{name:a,imageUploadToken:i})}(e,{name:u.name,imageUploadToken:a}),r({name:u.name,image:u.imageData||u.image})}catch(e){c(we(_e))}}else c(we(je))}),[c,r,u.image,u.imageData,u.imageToken,u.name,u.removeImage,e]);return(0,I.jsx)(Re.Z,{isOpen:!0,contentLabel:d.ag.get("user.edit-details.title"),onRequestClose:()=>r(),children:(0,I.jsxs)("div",{className:Oe,children:[(0,I.jsxs)("div",{className:De,children:[(0,I.jsx)(P.D,{as:"h1",variant:"canon",children:d.ag.get("user.edit-details.title")}),(0,I.jsx)("button",{className:Ue,onClick:()=>r(),"aria-label":d.ag.get("close"),children:(0,I.jsx)(L.k,{iconSize:16})})]}),u.message&&(0,I.jsx)(Te.X,{isErrorMessage:"error"===u.message.type,message:u.message.message}),(0,I.jsxs)("form",{className:Ae,onSubmit:h,children:[(0,I.jsx)(Ce.uL,{isOpen:s,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:a,imageDataUrl:i}=e;if(c(we(null)),c({type:"setImageData",data:i}),a)try{c(Pe(!0));const e=await async function(e){const a=await ye.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!a.body)throw new Error("No upload token recieved");return a.body.uploadToken}(a);c({type:"setImageToken",token:e}),c(Pe(!1))}catch{c(we(Ne))}},onError:g}),(0,I.jsxs)("div",{className:Ee,children:[(0,I.jsx)($,{name:a,images:m,onClickEdit:l,onClickRemove:p}),u.loading&&(0,I.jsx)("div",{className:Me,children:(0,I.jsx)(H.T,{})})]}),(0,I.jsxs)("div",{className:We,children:[(0,I.jsx)("label",{htmlFor:"user-edit-name",className:Le,children:(0,I.jsx)(P.D,{variant:"finaleBold",className:He,children:d.ag.get("user.edit-details.name-label")})}),(0,I.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:n()(Fe,Je),onChange:e=>{c(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:d.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:u.name})]}),(0,I.jsx)("div",{className:Ke,children:(0,I.jsx)(J.D,{colorSet:"invertedLight",onClick:h,disabled:u.loading,children:d.ag.get("save")})}),(0,I.jsx)(P.D,{as:"p",variant:"finaleBold",className:Be,children:d.ag.get("image-upload.legal-disclaimer")})]})]})})}));var Ge=i(76946);var ze=i(10022),Ve=i(60960),Ze=i(54838),qe=i(97034),$e=i(76879),Xe=i(12187),Ye=i(59673),ea=i(54816),aa=i(64120),ia=i(89161),ta=i(16988),ra=i(49706);const oa=({imageUriOrUrl:e="",desiredMosaicSize:a=300}={})=>{if(!e)return"";if(e.startsWith("spotify:")){const[,i,...t]=e.split(":");if("image"===i)return`https://i.scdn.co/image/${t[0]}`;if("mosaic"===i)return`https://mosaic.scdn.co/${a}/${t.join("")}`}return e};var sa=i(46351),la=i(58063),na=i(59149),da=i(7881),ua=i(89662),ca=i(70134);const ma=t.memo((function({tracks:e,hasHeaderRow:a=!1,nrTracksVisible:i,uri:r}){const o=(0,Y.C)(r),l=(0,s.qC)(o,"tracks").toURI(),n=(0,t.useMemo)((()=>i?e.slice(0,i):e),[i,e]),{usePlayContextItem:u}=(0,ca.n)({uri:l,pages:[{items:e.map((e=>({type:Ge.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),c=(0,t.useCallback)(((e,a)=>{const i=(0,ra.X)(e?.album?.images,{desiredSize:40});return(0,I.jsx)(na.SS,{index:a,uri:(0,da.$)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:i?.url||"",contextUri:l,usePlayContextItem:u},a+e.uri)}),[l,u]),m=(0,t.useMemo)((()=>[la.QD.INDEX,la.QD.TITLE,la.QD.ALBUM,la.QD.DURATION]),[]),g=(0,t.useCallback)((e=>e.uri),[]);return(0,I.jsx)(ua.ZP,{value:"user-top-tracks-tracklist",children:(0,I.jsx)(la.Pv,{ariaLabel:d.ag.get("top_tracks_this_month"),renderRow:c,nrTracks:n.length,tracks:n,resolveUri:g,hasHeaderRow:a,columns:m})})}),((e,a)=>e.tracks===a.tracks)),ga=t.memo((function({tracks:e,title:a,tagline:i,seeAllUri:r,className:o,uri:s,spec:l}){const n=(0,ta.$P)(),d=(0,t.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]),u=(0,t.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]);if(!e||0===e.length)return null;const c=e.length>4;return(0,I.jsxs)("section",{className:o,children:[(0,I.jsx)(sa.r,{title:a,tagline:i,seeAllUri:r,hasMoreElements:c,onClickTitle:d,onClickSeeAll:u}),(0,I.jsx)(ta.Nh,{spec:l,children:(0,I.jsx)(ma,{tracks:e,uri:s,nrTracksVisible:4})})]})}),((e,a)=>e.tracks===a.tracks));function pa(e,a){switch(a.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}var ha=i(92507),fa=i(19139);const va=18e5,xa=3e5,ba=({uri:e})=>{const a=(0,N.v9)(Ye.Gf),i=(0,N.v9)(Ye.A$),o=(0,N.I0)(),[l,m]=(0,$e.H)(e),v=(0,t.useMemo)((()=>(0,ra.X)(i)),[i]),[{isModalOpen:b,modalVariant:y,shouldOpenImagePicker:k},j]=function(){const[e,a]=(0,t.useReducer)(pa,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,a]}(),_=(0,ze.o)(),L=!(0,Ze.k)(),H=(0,Ve.g)(),J=(()=>{const e=(0,N.v9)((e=>e.session?.user));return e?{type:Ge.p.USER,uri:e.uri,username:e.id,displayName:e.display_name??null,images:e.images.map((({url:e,width:a,height:i})=>({url:e,width:a||void 0,height:i||void 0}))),optInTrialPremiumOnlyMarket:Boolean(e.policies?.opt_in_trial_premium_only_market)}:null})()?.uri,{data:K,loading:B}=(0,g.J)(p.n5.getProfile,[{uri:e,playlists:10,artists:10,episodes:10}],{cacheTime:va,staleTime:xa}),Q=K?.public_playlists,G=K?.is_verified,z=!!J&&(0,s.U4)(e,J),V=K?.recently_played_artists,Z=z?v?.url||"":K?.image_url||"",q=(0,Y.C)(e),$=(0,N.v9)(Xe.C7),X=(z?a:K?.name)||"",ee=(0,qe.Z)(K?.image_url||null),{userId:ae=""}=(0,r.UO)(),{spec:ie,logger:te}=(0,ta.fU)(w.createDesktopProfileEventFactory,{data:{uri:e,identifier:ae}}),re=(0,t.useMemo)((()=>ie.sectionTopTracksFactory()),[ie]),oe=!H&&(!1!==K?.show_follows||z),{data:se,loading:le}=(0,g.J)(p.n5.getFollowing,[e],{enabled:oe,cacheTime:va,staleTime:xa}),ne=se?.profiles,{data:de,loading:ue}=(0,g.J)(p.n5.getFollowers,[e],{enabled:oe,cacheTime:va,staleTime:xa}),ce=de?.profiles,{data:me,loading:ge}=(0,g.J)(p.n5.getUserTopArtists,[],{enabled:z,cacheTime:va,staleTime:xa}),{data:pe,loading:he}=(0,g.J)(p.n5.getUserTopTracks,[],{enabled:z&&!$,cacheTime:va,staleTime:xa}),fe=me?.body,ve=pe?.body,xe=(0,t.useCallback)((()=>{_({targetUri:e,intent:l?"unfollow":"follow",type:"click"});const a=ie.actionBarFactory().followButtonFactory();l?(m(!1),te.logInteraction(a.hitUnfollow({itemToBeUnfollowed:e}))):(m(!0),te.logInteraction(a.hitFollow({itemToBeFollowed:e})))}),[l,te,_,m,ie,e]),be=(0,t.useCallback)((e=>{j({type:"CLOSE_MODAL"}),e&&(o((0,ea.dL)(e.name)),o((0,ea.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[j,o]),ye=(0,t.useCallback)((()=>{j({type:"OPEN_MODAL"});const e=ie.headerFactory().usernameFactory().hitUiReveal();te.logInteraction(e)}),[te,j,ie]),ke=(0,t.useCallback)((()=>{j({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=ie.headerFactory().profileImageFactory().hitUiReveal();te.logInteraction(e)}),[te,j,ie]),Ie=(0,t.useMemo)((()=>[{url:Z}]),[Z]),je=(0,t.useCallback)((()=>{const e=ie.headerFactory().usernameFactory().hitUiReveal();te.logInteraction(e)}),[te,ie]),_e=(0,t.useCallback)(((e,a)=>{if(!a)return;const i=ie.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});te.logInteraction(i)}),[te,ie]),Ne=(0,t.useCallback)(((e,a)=>{if(!a)return;const i=ie.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});te.logInteraction(i)}),[te,ie]),Pe=(0,t.useCallback)((()=>{const e=ie.actionBarFactory().contextMenuButtonFactory().hitUiReveal();te.logInteraction(e)}),[te,ie]);if(!K||B||le||ue||he||ge)return(0,I.jsx)(c.h,{hasError:!1,errorMessage:d.ag.get("error.not_found.title.page")});const we=n()("contentSpacing",f),Se=oe&&!!ce?.length,Re=oe&&!!ne?.length;return(0,I.jsxs)("div",{className:h,children:[(0,I.jsx)(A.$,{children:X}),(0,I.jsxs)(U.gF,{backgroundColor:ee,children:[(0,I.jsx)(M.W,{children:(0,I.jsx)(F.i,{text:X})}),(0,I.jsx)(ia._,{menu:(0,I.jsx)(O.I,{uri:K.uri}),children:(0,I.jsx)("div",{className:x,children:(0,I.jsx)(D.T,{canEdit:z,name:X,images:Ie,onClick:ke,placeholderType:"user",shape:U.Kc.CIRCLE})})}),(0,I.jsxs)(U.sP,{children:[(0,I.jsx)(P.D,{variant:"mestoBold",children:G?(0,I.jsx)(ha.S,{text:d.ag.get("card.tag.profile")}):d.ag.get("card.tag.profile")}),(0,I.jsx)(ia._,{menu:(0,I.jsx)(O.I,{uri:K.uri}),children:(0,I.jsx)(U.xd,{canEdit:z,editTitle:d.ag.get("playlist.edit-details.title"),onClick:ye,children:X})}),(0,I.jsx)(U.QS,{totalFollowers:K.followers_count,totalFollowing:K.following_count,publicPlaylists:K.total_public_playlists_count,userUri:e,onCreatorClick:je,onTotalFollowersClick:_e,onTotalFollowingClick:Ne})]})]}),(0,I.jsx)(S.o,{backgroundColor:ee,children:(0,I.jsxs)(S.F,{children:[!z&&(0,I.jsx)(E.r,{children:(0,I.jsx)(W.e,{isFollowing:Boolean(l),onClick:xe,disabled:L})}),(0,I.jsx)(aa.y,{menu:(0,I.jsx)(O.I,{uri:K.uri,onEditProfileCallback:ye}),children:(0,I.jsx)(R.z,{label:d.ag.get("more.label.context",X),onClick:Pe})})]})}),(0,I.jsxs)(ta.Nh,{spec:ie,children:[z&&(0,I.jsxs)(I.Fragment,{children:[fe?.items.length&&(0,I.jsx)(fa.q,{className:we,total:fe?.total||0,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,s.QK)(q,["top","artists"]).toURI(),id:"top-artists",index:0,children:fe.items.map(((e,a)=>(0,I.jsx)(C.I,{index:a,uri:e.uri,name:e.name,images:e.images},e.uri)))}),(0,I.jsx)(ga,{className:we,title:d.ag.get("top_tracks_this_month"),tagline:d.ag.get("only_visible_to_you"),seeAllUri:(0,s.QK)(q,["top","tracks"]).toURI(),uri:e,tracks:ve?.items,spec:re})]}),(0,I.jsx)(fa.q,{className:we,total:K.total_public_playlists_count,title:d.ag.get("public_playlists"),seeAllUri:(0,s.QK)(q,["playlists"]).toURI(),id:"playlists",index:1,children:Q?.map(((e,a)=>(0,I.jsx)(T.Z,{index:a,uri:e.uri,name:e.name,images:[{url:oa({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):""},e.uri)))}),V?.length?(0,I.jsx)(fa.q,{className:we,total:V?.length,title:d.ag.get("recently_played_artists"),seeAllUri:(0,s.QK)(q,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:2,children:V?.map(((e,a)=>(0,I.jsx)(C.I,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,Se?(0,I.jsx)(fa.q,{className:we,title:d.ag.get("followers"),total:ce?.length,seeAllUri:(0,s.QK)(q,["followers"]).toURI(),id:"followers",index:3,children:ce?.map(((e,a)=>(0,I.jsx)(u.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,Re?(0,I.jsx)(fa.q,{className:we,title:d.ag.get("following"),total:ne?.length,seeAllUri:(0,s.QK)(q,["following"]).toURI(),id:"following",index:4,children:ne?.map(((e,a)=>(0,I.jsx)(u.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,z&&b&&("editProfile"===y?(0,I.jsx)(Qe,{uri:e,name:X,image:Z,onClose:be,shouldOpenImagePicker:k}):null)]})]})},ya=e=>{const{uri:a}=e,{data:i,loading:t,error:r}=(0,g.J)(p.n5.getPlaylists,[{uri:a}]),{public_playlists:o,total_public_playlists_count:s=0}=i||{};return t?(0,I.jsx)(c.h,{hasError:null!==r,errorMessage:d.ag.get("error.not_found.title.page")}):(0,I.jsx)(m.P,{className:n()("contentSpacing",v),total:s,title:d.ag.get("public_playlists"),showAll:!0,children:o?.map(((e,a)=>(0,I.jsx)(T.Z,{index:a,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?d.ag.get("user.followers",e.followers_count):"",images:[{url:oa({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},ka=e=>{const{uri:a}=e,{data:i,loading:t,error:r}=(0,g.J)(p.n5.getRecentlyPlayedArtists,[{uri:a,limit:50}]),o=i?.artists;return t?(0,I.jsx)(c.h,{hasError:null!==r,errorMessage:d.ag.get("error.not_found.title.page")}):(0,I.jsx)(m.P,{className:n()("contentSpacing",v),total:o?.length,title:d.ag.get("recently_played_artists"),showAll:!0,children:o?.map(((e,a)=>(0,I.jsx)(C.I,{index:a,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},Ia=()=>{const{data:e,loading:a,error:i}=(0,g.J)(p.n5.getUserTopArtists),t=e?.body;return a?(0,I.jsx)(c.h,{hasError:null!==i,errorMessage:d.ag.get("error.not_found.title.page")}):t?(0,I.jsx)(m.P,{className:n()("contentSpacing",v),total:t.items.length,title:d.ag.get("top_artists_this_month"),tagline:d.ag.get("only_visible_to_you"),showAll:!0,children:t.items.map(((e,a)=>(0,I.jsx)(C.I,{index:a,uri:e.uri,name:e.name,images:e.images},e.uri)))}):null},ja=({uri:e})=>{const{data:a,loading:i,error:t}=(0,g.J)(p.n5.getProfile,[{uri:e}]);return a&&!i&&(a?.is_current_user||!1)?(0,I.jsx)(Ia,{}):(0,I.jsx)(c.h,{hasError:null!==t,errorMessage:d.ag.get("error.not_found.title.page")})},_a=({uri:e})=>{const{data:a,loading:i,error:t}=(0,g.J)(p.n5.getUserTopTracks,[{offset:0,limit:50}]),r=a?.body;return i?(0,I.jsx)(c.h,{hasError:null!==t,errorMessage:d.ag.get("error.not_found.title.page")}):r?(0,I.jsxs)("div",{className:n()("contentSpacing",v,b),children:[(0,I.jsxs)("div",{className:y,children:[(0,I.jsx)(P.D,{as:"h1",variant:"canon",className:k,children:d.ag.get("top_tracks_this_month")}),(0,I.jsx)(P.D,{as:"p",variant:"mesto",children:d.ag.get("only_visible_to_you")})]}),(0,I.jsx)(ma,{tracks:r.items,uri:e,hasHeaderRow:!0})]}):null},Na=({uri:e})=>{const{data:a,loading:i,error:t}=(0,g.J)(p.n5.getProfile,[{uri:e}]);return a&&!i&&(a?.is_current_user||!1)?(0,I.jsx)(_a,{uri:e}):(0,I.jsx)(c.h,{hasError:null!==t,errorMessage:d.ag.get("error.not_found.title.page")})};var Pa=i(18819);const wa=(0,t.memo)((function(){const{userId:e=""}=(0,r.UO)(),a=decodeURIComponent(e),i=(0,s.QK)(a).toURI();return(0,I.jsx)("section",{children:(0,I.jsxs)(r.Z5,{children:[(0,I.jsx)(r.AW,{path:"playlists",element:(0,I.jsx)(Pa.K,{pageId:o.Wg.PROFILE_PLAYLISTS,children:(0,I.jsx)(ya,{uri:i})})}),(0,I.jsx)(r.AW,{path:"top/tracks",element:(0,I.jsx)(Pa.K,{pageId:o.Wg.PROFILE_TOP_TRACKS,children:(0,I.jsx)(Na,{uri:i})})}),(0,I.jsx)(r.AW,{path:"top/artists",element:(0,I.jsx)(Pa.K,{pageId:o.Wg.PROFILE_TOP_ARTISTS,children:(0,I.jsx)(ja,{uri:i})})}),(0,I.jsx)(r.AW,{path:"recently-played-artists",element:(0,I.jsx)(Pa.K,{pageId:o.Wg.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,I.jsx)(ka,{uri:i})})}),(0,I.jsx)(r.AW,{path:"following",element:(0,I.jsx)(Pa.K,{pageId:o.Wg.PROFILE_FOLLOWING,children:(0,I.jsx)(_,{uri:i})})}),(0,I.jsx)(r.AW,{path:"followers",element:(0,I.jsx)(Pa.K,{pageId:o.Wg.PROFILE_FOLLOWERS,children:(0,I.jsx)(j,{uri:i})})}),(0,I.jsx)(r.AW,{path:"/",element:(0,I.jsx)(Pa.K,{pageId:o.Wg.PROFILE,children:(0,I.jsx)(ba,{uri:i})})})]})})}))},7881:(e,a,i)=>{i.d(a,{$:()=>t});const t=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-profile.js.map