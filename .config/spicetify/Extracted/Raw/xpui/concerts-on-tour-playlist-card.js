"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7427],{62820:(t,e,a)=>{a.r(e),a.d(e,{OnTourPlaylistCard:()=>b,default:()=>b});var r=a(68045),n=a(93163),s=a(59496),i=a(76229),l=a(10022),c=a(28485),o=a(32043),u=a(4637);const d=(0,s.memo)((t=>{const{uri:e,pathname:a,onClick:r,...n}=t,d=(0,l.o)(),h=(0,o.g)(),f=(0,s.useContext)(c.DJ),m=(0,s.useCallback)((t=>{d({intent:"navigate",type:"click",targetUri:e}),r?.(t)}),[d,e,r]),x={referrer:f||h.getReferrer()};return(0,u.jsx)(i.rU,{...n,to:{pathname:a},state:x,onClick:m})})),h="OY58H9mX1WFQsW7RLQl0",f="tNh3W7imBCa8Yp0CS0rF",m="k30gFYUEDBj0Rs5Mqroo",x="BefqJa4WI690UuQdyvH4";const p=/^spotify:artist:([a-zA-Z0-9]+):concerts$/,v=/^spotify:concert:([a-zA-Z0-9]+)$/,b=t=>{const e=function(t){if(!t||"concerts-flp"!==t.type)return null;const{tour_title:e,tour_location:a,tour_artwork_url:r,tour_cta_text:n,tour_nav_uri:s,tour_subtitle:i,tour_date:l}=t.attributes;return e&&a&&r&&n&&s?{title:e,location:a,imageUrl:r,ctaText:n,navUri:s,subtitle:i,date:l}:null}(t.formatListData);if(!e)return null;const a=(t=>{const[,e]=t.match(p)||[];if(e)return`/artist/${e}/concerts`;const[,a]=t.match(v)||[];return a&&`/concert/${a}`})(e.navUri);return a?(0,u.jsx)("section",{children:(0,u.jsxs)(d,{uri:e.navUri,pathname:a,className:h,title:e.ctaText,children:[(0,u.jsx)("img",{className:m,src:e.imageUrl,alt:""}),e.date&&(0,u.jsx)("div",{className:f,children:(0,u.jsx)(r.D,{as:"h5",variant:"minuetBold",children:e.date})}),(0,u.jsxs)("div",{className:x,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(r.D,{as:"h2",variant:"ballad",weight:"bold",children:e.title}),(0,u.jsx)(r.D,{as:"div",variant:"mesto",children:e.location})]}),(0,u.jsx)("div",{children:(0,u.jsx)(n.D,{as:"span",buttonSize:"sm",children:e.ctaText})})]})]})}):null}}}]);
//# sourceMappingURL=concerts-on-tour-playlist-card.js.map