import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let s,r,a,c,m,n,i,l,f,o,d,p,t,u,h;return{c(){s=element("div"),r=element("div"),a=element("span"),c=text(e[0]),m=space(),n=element("picture"),i=element("source"),f=space(),o=element("source"),p=space(),t=element("img"),this.h()},l(l){s=claim_element(l,"DIV",{id:!0});var d,h,g,u=children(s);r=claim_element(u,"DIV",{class:!0}),h=children(r),a=claim_element(h,"SPAN",{class:!0}),g=children(a),c=claim_text(g,e[0]),g.forEach(detach),h.forEach(detach),m=claim_space(u),n=claim_element(u,"PICTURE",{class:!0}),d=children(n),i=claim_element(d,"SOURCE",{media:!0,srcset:!0}),f=claim_space(d),o=claim_element(d,"SOURCE",{media:!0,srcset:!0}),p=claim_space(d),t=claim_element(d,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),d.forEach(detach),u.forEach(detach),this.h()},h(){attr(a,"class","cs-int-title"),attr(r,"class","cs-container"),attr(i,"media","(max-width: 600px)"),attr(i,"srcset",l=e[2].url),attr(o,"media","(min-width: 601px)"),attr(o,"srcset",d=e[1].url),attr(t,"loading","lazy"),attr(t,"decoding","async"),src_url_equal(t.src,u=e[1].url)||attr(t,"src",u),attr(t,"alt",h=e[1].alt),attr(t,"width","1280"),attr(t,"height","568"),attr(t,"aria-hidden","true"),attr(n,"class","cs-background"),attr(s,"id","banner-712")},m(e,l){insert_hydration(e,s,l),append_hydration(s,r),append_hydration(r,a),append_hydration(a,c),append_hydration(s,m),append_hydration(s,n),append_hydration(n,i),append_hydration(n,f),append_hydration(n,o),append_hydration(n,p),append_hydration(n,t)},p(e,[n]){n&1&&set_data(c,e[0]),n&4&&l!==(l=e[2].url)&&attr(i,"srcset",l),n&2&&d!==(d=e[1].url)&&attr(o,"srcset",d),n&2&&!src_url_equal(t.src,u=e[1].url)&&attr(t,"src",u),n&2&&h!==(h=e[1].alt)&&attr(t,"alt",h)},i:noop,o:noop,d(e){e&&detach(s)}}}function instance(e,t,n){let{title:s,image:o,imageM:i}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"image"in e&&n(1,o=e.image),"imageM"in e&&n(2,i=e.imageM)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,image:1,imageM:2})}}export default Component