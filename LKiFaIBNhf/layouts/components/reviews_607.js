import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[5]=t[n],s}function create_each_block(e){let n,t,h,u,g,s,a=e[5].title+"",d,f,o,r=e[5].quote+"",m,p,i,c=e[5].name+"",l,v;return{c(){n=element("li"),t=element("img"),g=space(),s=element("h3"),d=text(a),f=space(),o=element("p"),m=text(r),p=space(),i=element("span"),l=text(c),v=space(),this.h()},l(e){n=claim_element(e,"LI",{class:!0});var h,b,j,u=children(n);t=claim_element(u,"IMG",{class:!0,src:!0,alt:!0,"aria-hidden":!0,width:!0,height:!0,loading:!0,decoding:!0}),g=claim_space(u),s=claim_element(u,"H3",{class:!0}),h=children(s),d=claim_text(h,a),h.forEach(detach),f=claim_space(u),o=claim_element(u,"P",{class:!0}),b=children(o),m=claim_text(b,r),b.forEach(detach),p=claim_space(u),i=claim_element(u,"SPAN",{class:!0}),j=children(i),l=claim_text(j,c),j.forEach(detach),v=claim_space(u),u.forEach(detach),this.h()},h(){attr(t,"class","cs-icon"),src_url_equal(t.src,h=e[4].url)||attr(t,"src",h),attr(t,"alt",u=e[4].alt),attr(t,"aria-hidden","true"),attr(t,"width","40"),attr(t,"height","38"),attr(t,"loading","lazy"),attr(t,"decoding","async"),attr(s,"class","cs-h3"),attr(o,"class","cs-item-text"),attr(i,"class","cs-name"),attr(n,"class","cs-item")},m(e,a){insert_hydration(e,n,a),append_hydration(n,t),append_hydration(n,g),append_hydration(n,s),append_hydration(s,d),append_hydration(n,f),append_hydration(n,o),append_hydration(o,m),append_hydration(n,p),append_hydration(n,i),append_hydration(i,l),append_hydration(n,v)},p(e,n){n&16&&!src_url_equal(t.src,h=e[4].url)&&attr(t,"src",h),n&16&&u!==(u=e[4].alt)&&attr(t,"alt",u),n&8&&a!==(a=e[5].title+"")&&set_data(d,a),n&8&&r!==(r=e[5].quote+"")&&set_data(m,r),n&8&&c!==(c=e[5].name+"")&&set_data(l,c)},d(e){e&&detach(n)}}}function create_fragment(e){let o,s,n,l,h,m,a,d,f,r,u,p,i,c=e[3],t=[];for(let n=0;n<c.length;n+=1)t[n]=create_each_block(get_each_context(e,c,n));return{c(){o=element("section"),s=element("div"),n=element("div"),l=element("span"),h=text(e[0]),m=space(),a=element("h2"),d=text(e[1]),f=space(),r=element("p"),u=text(e[2]),p=space(),i=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(c){o=claim_element(c,"SECTION",{id:!0});var g,v,b,j,y,_,w=children(o);s=claim_element(w,"DIV",{class:!0}),v=children(s),n=claim_element(v,"DIV",{class:!0}),g=children(n),l=claim_element(g,"SPAN",{class:!0}),b=children(l),h=claim_text(b,e[0]),b.forEach(detach),m=claim_space(g),a=claim_element(g,"H2",{class:!0}),j=children(a),d=claim_text(j,e[1]),j.forEach(detach),f=claim_space(g),r=claim_element(g,"P",{class:!0}),y=children(r),u=claim_text(y,e[2]),y.forEach(detach),g.forEach(detach),p=claim_space(v),i=claim_element(v,"UL",{class:!0}),_=children(i);for(let e=0;e<t.length;e+=1)t[e].l(_);_.forEach(detach),v.forEach(detach),w.forEach(detach),this.h()},h(){attr(l,"class","cs-topper"),attr(a,"class","cs-title"),attr(r,"class","cs-text"),attr(n,"class","cs-content"),attr(i,"class","cs-card-group"),attr(s,"class","cs-container"),attr(o,"id","reviews-607")},m(e,c){insert_hydration(e,o,c),append_hydration(o,s),append_hydration(s,n),append_hydration(n,l),append_hydration(l,h),append_hydration(n,m),append_hydration(n,a),append_hydration(a,d),append_hydration(n,f),append_hydration(n,r),append_hydration(r,u),append_hydration(s,p),append_hydration(s,i);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(i,null)},p(e,[n]){if(n&1&&set_data(h,e[0]),n&2&&set_data(d,e[1]),n&4&&set_data(u,e[2]),n&24){c=e[3];let s;for(s=0;s<c.length;s+=1){const o=get_each_context(e,c,s);t[s]?t[s].p(o,n):(t[s]=create_each_block(o),t[s].c(),t[s].m(i,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=c.length}},i:noop,o:noop,d(e){e&&detach(o),destroy_each(t,e)}}}function instance(e,t,n){let{title:s,subtitle:o,description:i,reviews:a,icon:r}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"subtitle"in e&&n(1,o=e.subtitle),"description"in e&&n(2,i=e.description),"reviews"in e&&n(3,a=e.reviews),"icon"in e&&n(4,r=e.icon)},[s,o,i,a,r]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,subtitle:1,description:2,reviews:3,icon:4})}}export default Component