"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7521],{2197:(e,i,t)=>{t.d(i,{n:()=>U});var n=t(59496),a=t(84875),s=t.n(a),r=t(92053),l=t(68045),o=t(7259),u=t(3622),c=t(34194),d=t(17657),m=t(28485),x=t(54226);var g=t(91012),h=t(84093),p=t(99026);const j="main-topBar-contentArea",y="muYk5XIwKmqR9iNibk_f",f="queue-tabBar-headerItem",b="queue-tabBar-moreButton",v="queue-tabBar-moreButtonActive",C="yxf_6IsQEmHjijEBUMTP",k="queue-tabBar-active",N="queue-tabBar-headerItemLink",I="queue-tabBar-header",P="queue-tabBar-chevron";var w=t(4637);const E=({items:e,activeItemId:i})=>(0,w.jsx)(h.v,{children:e.map((e=>e.disabled?(0,w.jsx)(p.s,{disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick,children:e.title},e.uri):(0,w.jsx)(p.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>s()(C,{[k]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var D=t(59503);const U=(0,n.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:a}){const h=(0,n.useRef)(null),[p,C]=(0,n.useState)([]),[U,S]=(0,n.useState)(0),[A,q]=(0,n.useState)([]),O=function(){const[e,i]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,n.useContext)(m.VX),a=(0,d.y1)((e=>{e?.width&&i(e.width)}),250);return(0,x.y)({refOrElement:t,observeOnly:"width",onResize:a}),e}()??1/0,{pathname:R}=(0,r.TH)(),T=i.find((e=>e.to===R));return(0,n.useEffect)((()=>{h.current&&S(h.current.clientWidth)}),[O]),(0,n.useEffect)((()=>{if(!h.current)return;const e=Array.from(h.current.children).map((e=>e.clientWidth));C(e)}),[i]),(0,n.useEffect)((()=>{if(!h.current)return;if(p.slice(0,-1).reduce(((e,i)=>e+i),0)<=U)return void q([]);const e=p.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;p.forEach(((e,n)=>{U>=t+e?t+=e:i.push(n)})),q(i)}),[U,p]),(0,w.jsx)("nav",{className:s()(a,j),"aria-label":t,children:(0,w.jsxs)("ul",{className:e?y:I,ref:h,children:[i.filter(((e,i)=>!A.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,w.jsx)(n.Fragment,{children:i((0,w.jsx)("li",{className:f,children:e.disabled?(0,w.jsx)("div",{className:N,children:(0,w.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,w.jsx)(D.O,{end:!0,className:({isActive:e})=>s()(N,{[k]:e}),to:e.to,onClick:e.handleClick,children:(0,w.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),A.length||0===p.length?(0,w.jsx)("li",{className:f,children:(0,w.jsx)(g.xV,{renderInline:!0,menu:(0,w.jsx)(E,{items:i.filter(((e,i)=>A.includes(i))),activeItemId:T?.itemId}),children:(e,i,t)=>(0,w.jsxs)("button",{className:s()(b,{[v]:T}),type:"button",onClick:i,ref:t,children:[(0,w.jsx)(l.D,{variant:"mestoBold",children:T?T.title:c.ag.get("more")}),e?(0,w.jsx)(o.U,{iconSize:16,className:P,"aria-hidden":"true"}):(0,w.jsx)(u.i,{iconSize:16,className:P,"aria-hidden":"true"})]})})}):null]})})}))},16354:(e,i,t)=>{t.d(i,{I:()=>x});var n=t(92705),a=t(59496),s=t(34194),r=t(2197),l=t(32317),o=t(17222),u=t(38352);const c="queue-tabBar-nav";var d=t(4637);const m=()=>{const e=(0,u.Y)(),i=(0,a.useCallback)((e=>(0,d.jsx)(o.v,{placement:"bottomEnd",arrow:"topStart",title:s.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,a.useMemo)((()=>[{title:s.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:s.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,d.jsx)(l.w,{children:(0,d.jsx)(r.n,{className:c,links:t})})},x=({children:e})=>{const i=(0,n.nF)();return(0,d.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,d.jsx)(m,{})]})}},73336:(e,i,t)=>{t.r(i),t.d(i,{default:()=>je});var n=t(59496),a=t(84875),s=t.n(a),r=t(68045),l=t(65282),o=t(2962),u=t(34194),c=t(5748),d=t(70883),m=t(89662),x=t(32043),g=t(70134),h=t(42314),p=t(48926),j=t(16988),y=t(91677),f=t(4637);const b=({onClick:e})=>(0,f.jsx)(y.P,{onClick:e,buttonSize:"sm",children:u.ag.get("queue.clear-queue")});var v=t(3109),C=t(26627),k=t(93163),N=(t(28713),t(76872));const I="i9rTNwKyT_NMDghd8q65",P="DXBMXJD8Zoj4V8MxIVTB",w="UEtqSfWDubkNdPIaEkfA",E="I_Rc74Je7W4sk6KAVR05",D=n.memo((function({onClose:e,onConfirm:i,isOpen:t,itemCount:a}){const l=(0,n.useCallback)((t=>{i(),e(t)}),[i,e]),o=u.ag.get("queue.confirm-title",a);return(0,f.jsx)(N.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:o,isOpen:t,children:(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)(r.D,{as:"h2",variant:"cello",className:P,children:o}),(0,f.jsx)(r.D,{as:"p",variant:"mesto",className:w,paddingBottom:v.g4V,children:u.ag.get("queue.confirm-message")}),(0,f.jsxs)("div",{className:s()("encore-light-theme",E),children:[(0,f.jsx)(C.o,{onClick:e,children:u.ag.get("queue.cancel-button")}),(0,f.jsx)(k.D,{onClick:l,children:u.ag.get("queue.confirm-button")})]})]})})}));var U=t(48986),S=t(74970);const A=()=>(0,f.jsxs)("div",{className:S.Z.emptyContainer,children:[(0,f.jsx)(U.S,{iconSize:64,"aria-hidden":"true"}),(0,f.jsx)(r.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:S.Z.emptyContainerTitle,children:u.ag.get("queue.empty-title")}),(0,f.jsx)("p",{children:u.ag.get("queue.empty-description")}),(0,f.jsx)(d.default,{to:"/search",className:S.Z.findSomething,children:(0,f.jsx)(k.D,{colorSet:"invertedLight",children:u.ag.get("queue.fine-something")})})]});let q;!function(e){e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp"}(q||(q={}));var O=t(58063),R=t(10022),T=t(7881),Q=t(91995),F=t(76946),M=t(49706),B=t(97820),L=t(14090),_=t(8662),$=t(97223),G=t(99727),Z=t(36982),W=t(22559),z=t(70162),K=t(73375),H=t(13899),X=t(46779),J=t(89161),V=t(44131),Y=t(27344),ee=t(21298),ie=t(48161),te=t(16442),ne=t(31612),ae=t(37042);let se;!function(e){e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad"}(se||(se={}));const re=n.memo((function({uri:e,uid:i,contextUri:t,name:a,duration_ms:s,artists:r,index:l,rowNumberOffset:o,imgUrl:c,isExplicit:d,isPlayable:g,isMOGEFRestricted:h,album:p,type:y,section:b,usePlayContextItem:v,isAutoPlay:C=!1,isEnhanced:k,queueSpec:N}){const I=(0,j.$P)(),P=(0,x.g)(),{triggerPlay:w,togglePlay:E}=v({uid:i,uri:e,index:l}),{spec:D}=(0,j.fU)(L.createDesktopTrackListRowEventFactory,{data:{position:l,reason:"",uri:e}}),{isActive:U,isPlaying:S}=(0,te.$o)(e),A=(0,n.useCallback)(((t,n)=>{i?w({loggingParams:n},(()=>P.skipToNext({uri:e,uid:i}))):w({loggingParams:n})}),[P,w,e,i]),O=(0,n.useCallback)((t=>{i?E({loggingParams:t},(()=>U?S?P.pause():P.resume():P.skipToNext({uri:e,uid:i}))):E({loggingParams:t})}),[P,E,e,i,U,S]),R=y===se.TRACK,T=y===se.EPISODE,Q=y===se.CHAPTER,F=T&&"video"===p?.mediaType,M=y===se.LOCAL,re=y===se.AD,le=r?.map((e=>e.name)).join(u.ag.getSeparator())||"",oe=(0,ie._)(e),ue=(0,ae.k)(e,g,(0,_.dB)(e)),{badges:ce,hasBadges:de}=(0,ne.r)({downloadAvailability:oe,isExplicit:d,isMOGEFRestricted:h,isEnhanced:k});let me;me=T?(0,f.jsx)(G.k,{uri:e,uid:C?void 0:i,showUri:p.uri,contextUri:t}):Q?(0,f.jsx)($.r,{uri:e,uid:C?void 0:i,showUri:p.uri,contextUri:t}):M?(0,f.jsx)(Z.N,{uri:e,uid:C?void 0:i,contextUri:t}):re?null:(0,f.jsx)(W.$,{uri:e,uid:C?void 0:i,albumUri:p.uri,artists:r,contextUri:t});const xe=(0,n.useCallback)(((t,n)=>{const{meta:a,uris:s}=t,r=s.map((e=>({uri:e,uid:null})));let l;l=n===H.W.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},a.section===q.NowPlaying?P.addToQueue(r):a.origin===q.NowPlaying?P.insertIntoQueue(r,l):P.reorderQueue(r,l)}),[P,i,e]),ge=(0,n.useCallback)(((t,n)=>{const{items:a}=t;let s;s=n===H.W.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},P.reorderQueue(a,s)}),[P,i,e]),he=C?[]:[X.aN[_.JM.TRACK],X.aN[_.JM.EPISODE]];return(0,f.jsx)(m.ZP,{value:"row",index:l,children:(0,f.jsx)(J._,{menu:me,children:(0,f.jsxs)(H.c,{uri:e,contextUri:t,index:l,onTriggerPlay:A,isActive:b===q.NowPlaying&&U,ariaRowIndex:l,isPlayable:ue,ageRestricted:h,spec:D,dragMetadata:{name:a,createdBy:le,sectionId:b},onInsert:(i,t,n,a,s)=>{xe({uris:i,dropIndex:t,meta:s},n),N&&I.logInteraction(N.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,i,t,n)=>{ge({items:e,dropIndex:i,meta:n},t),N&&I.logInteraction(N.dragSort())},allowedDropTypes:he,children:[(0,f.jsx)(z.Dd,{ariaColIndex:0,children:(0,f.jsx)(z.Du,{uri:e,playAriaLabel:u.ag.get("tracklist.a11y.play",a,le),isPlaying:b===q.NowPlaying&&S,isActive:b===q.NowPlaying&&U,spec:D,onClick:(e,i)=>{O(i)},children:(0,f.jsx)(z.km,{children:l+o+1})})}),(0,f.jsxs)(z.vZ,{ariaColIndex:1,children:[(0,f.jsx)(z.lD,{src:c,isVideo:F,isEpisode:T||Q}),(0,f.jsxs)(z.vm,{children:[(0,f.jsx)(z.Wh,{titleText:a,children:a}),de&&(0,f.jsxs)(z.g3,{children:[ce.enhanced&&(0,f.jsx)(B._,{iconSize:16,className:K.Z.enhanced,title:u.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":u.ag.get("web-player.enhance.button_text_enhanced")}),ce.download&&(0,f.jsx)(V.G,{size:16}),ce.explicit&&(0,f.jsx)(Y.N,{}),ce.nineteen&&(0,f.jsx)(ee.X,{className:K.Z.nineteen,size:16})]}),(0,f.jsxs)(z.K9,{children:[R&&(0,f.jsx)(z.T6,{artists:r,spec:D}),(T||M)&&!F&&le]})]})]}),(0,f.jsx)(z.UA,{ariaColIndex:2,children:(0,f.jsx)(z.BM,{nonInteractive:M,uri:p.uri,name:p.name,creatorUri:r?.[0]?.uri,spec:D,children:p.name})}),(0,f.jsxs)(z.mU,{ariaColIndex:3,children:[!M&&!Q&&(0,f.jsx)(z.qS,{uri:e,type:y}),(0,f.jsx)(z.A$,{duration:s}),(0,f.jsx)(z.Zv,{menu:me,label:u.ag.get("more.label.track",a,le),spec:D})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index&&e.name===i.name)),le=n.memo((function({tracks:e,ariaLabel:i,contextUri:t,rowNumberOffset:a=0,section:s,usePlayContextItem:r}){const l=(0,R.o)(),o=(0,x.g)(),c=(0,n.useCallback)(((e,i)=>{l({intent:"remove-from-queue",type:"click"}),o.removeFromQueue(e).then(i)}),[o,l]),d=(0,n.useCallback)(((e,i)=>{if((0,Q.iw)(e)){const n=(0,M.X)(e.show?.images,{desiredSize:40});return(0,f.jsx)(re,{index:i,rowNumberOffset:a,imgUrl:n?.url||"",uri:(0,T.$)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:se.EPISODE,section:s,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider},`${i}${a}${e.uid}`)}if((0,Q.G7)(e)){const n=(0,M.X)(e.images||void 0,{desiredSize:40});return(0,f.jsx)(re,{index:i,rowNumberOffset:a,imgUrl:n?.url||"",uri:(0,T.$)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:se.CHAPTER,section:s,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider},`${i}${a}${e.uid}`)}if((0,Q.k6)(e)){const n=(0,M.X)(e.images||void 0,{desiredSize:40});return(0,f.jsx)(re,{index:i,rowNumberOffset:a,imgUrl:n?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??u.ag.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:se.AD,section:s,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${i}${a}${e.uid}`)}if((0,Q.G_)(e)||(0,Q.RB)(e)){const n=(0,M.X)(e?.album?.images,{desiredSize:40}),l=e.type===F.p.TRACK?e:null;return(0,f.jsx)(re,{index:i,rowNumberOffset:a,imgUrl:n?.url||"",uri:(0,T.$)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:l?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:l?.is19PlusOnly??!1,type:l?.isLocal?se.LOCAL:se.TRACK,section:s,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider,isEnhanced:"enhanced_recommendation"===e.metadata?.provider},`${i}${a}${e.uid}`)}return(0,f.jsx)(O.Lb,{height:`${O.dN}px`})}),[a,t,s,r]),m=(0,n.useMemo)((()=>[O.QD.INDEX,O.QD.TITLE,O.QD.ALBUM,O.QD.DURATION]),[]),g=(0,n.useCallback)((e=>e.uri),[]),h=(0,n.useCallback)((e=>e.uid??e.uri),[]);return(0,f.jsx)(O.Pv,{ariaLabel:i,tracks:e,nrTracks:e.length,onRemove:c,renderRow:d,resolveUri:g,resolveUid:h,columns:m})})),oe="rHpv7osDRvs3SUPMpQ_g",ue="DG9CsoFIptJhAneKoo_F",ce="jf2HafzDEI9jn7Yo05eM",de="H3Puuvc2nV0GoZRrfpRS",me="HckHyQocDDePWQL2baOY",xe=()=>{const{uri:e,description:i}=(0,p.$)(),{spec:t,logger:a,UBIFragment:y}=(0,j.fU)(l.createDesktopNowPlayingQueueEventFactory,{data:{identifier:o.Wg.NOWPLAYING_QUEUE,uri:e??""}}),v=(0,n.useMemo)((()=>t.nowPlayingSectionFactory()),[t]),C=(0,n.useMemo)((()=>t.nextInQueueSectionFactory()),[t]),k=(0,n.useMemo)((()=>t.nextFromSectionFactory()),[t]),N=(0,x.g)(),{current:I,nextUp:P,queued:w}=(0,h.W)(),[E,U]=(0,n.useState)(!1),S=(0,n.useCallback)((()=>{U(!1)}),[U]),O=(0,n.useCallback)((()=>{N.clearQueue(),U(!1)}),[N]),R=(0,n.useCallback)((async()=>{let e;const i=C.clearQueueButtonFactory();w.length>0&&(e=i.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:w.length}),a.logInteraction(e)),U(!0)}),[a,C,w]),{usePlayContextItem:T}=(0,g.n)({uri:e??""},{featureIdentifier:"queue"}),Q="autoplay"===I?.provider,F=P.filter((e=>Q?e:"autoplay"!==e.provider)),M=!!w?.length,B=!!F?.length,L=!1===(I||M||B),_=(0,n.useCallback)((async()=>{if(!B)return;const i=t.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});a.logInteraction(i)}),[B,a,t,e]);return L?(0,f.jsx)(A,{}):(0,f.jsxs)("div",{className:oe,children:[(0,f.jsx)(c.$,{children:u.ag.get("queue.page-title")}),(0,f.jsx)(r.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:ue,children:u.ag.get("playback-control.queue")}),I&&e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:u.ag.get("queue.now-playing")}),(0,f.jsx)(y,{spec:v,children:(0,f.jsx)(m.ZP,{value:"now-playing",children:(0,f.jsx)(le,{ariaLabel:u.ag.get("queue.now-playing"),tracks:[I],contextUri:e,section:q.NowPlaying,usePlayContextItem:T})})})]}),M&&e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:s()(me,ce),children:[(0,f.jsx)(r.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:u.ag.get("queue.next-in-queue")}),M&&(0,f.jsx)(b,{onClick:R})]}),(0,f.jsx)(y,{spec:C,children:(0,f.jsx)(m.ZP,{value:"next-in-queue",children:(0,f.jsx)(le,{ariaLabel:u.ag.get("queue.next-in-queue"),tracks:w,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:q.NextInQueue,usePlayContextItem:T})})})]}),B&&e&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:s()(ce,"standalone-ellipsis-one-line"),children:i&&!Q?(0,f.jsxs)(f.Fragment,{children:[u.ag.get("queue.next-from")," ",(0,f.jsx)(d.Link,{className:de,to:e,onClick:_,children:i})]}):u.ag.get("queue.next-up")}),(0,f.jsx)(y,{spec:k,children:(0,f.jsx)(m.ZP,{value:"next-up",children:(0,f.jsx)(le,{ariaLabel:u.ag.get("queue.next-up"),tracks:F,rowNumberOffset:1+(w?.length||0),contextUri:"spotify:app:queue:NextUp",section:q.NextUp,usePlayContextItem:T})})})]}),(0,f.jsx)(D,{itemCount:w?.length||0,isOpen:E,onClose:S,onConfirm:O})]})};var ge=t(16354),he=t(38352),pe=t(97026);const je=()=>(0,he.Y)()?(0,f.jsx)(pe.InstrumentedRedirect,{to:"/history"}):(0,f.jsx)(ge.I,{children:(0,f.jsx)(n.Suspense,{fallback:null,children:(0,f.jsx)(xe,{})})})},7881:(e,i,t)=>{t.d(i,{$:()=>n});const n=e=>e?.linked_from?.uri||e.uri},74970:(e,i,t)=>{t.d(i,{Z:()=>n});const n={emptyContainer:"queue-queuePage-emptyContainer",emptyContainerTitle:"queue-queuePage-emptyContainerTitle",findSomething:"queue-queuePage-findSomething"}}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map