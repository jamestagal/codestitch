import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let h,u,n,p,z,S,b,L,N,m,T,D,t,v,d,a,_,k,M,f,l,i,O,x,A,j,c,o,y,E,F,g,r,s,C,w;return{c(){h=element("section"),u=element("div"),n=element("div"),p=element("span"),z=text("GALLERY"),S=space(),b=element("h2"),L=text("View a selection of our recent creations"),N=space(),m=element("p"),T=text(`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Amet minim mollit
          non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.`),D=space(),t=element("div"),v=element("div"),d=element("a"),a=element("img"),M=space(),f=element("div"),l=element("a"),i=element("img"),A=space(),j=element("div"),c=element("a"),o=element("img"),F=space(),g=element("div"),r=element("a"),s=element("img"),this.h()},l(e){h=claim_element(e,"SECTION",{id:!0});var y,_,w,O,x,C,E,k,R,P,H,I,B,V,$=children(h);u=claim_element($,"DIV",{class:!0}),w=children(u),n=claim_element(w,"DIV",{class:!0}),_=children(n),p=claim_element(_,"SPAN",{class:!0}),O=children(p),z=claim_text(O,"GALLERY"),O.forEach(detach),S=claim_space(_),b=claim_element(_,"H2",{class:!0}),x=children(b),L=claim_text(x,"View a selection of our recent creations"),x.forEach(detach),N=claim_space(_),m=claim_element(_,"P",{class:!0}),C=children(m),T=claim_text(C,`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Amet minim mollit
          non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.`),C.forEach(detach),_.forEach(detach),D=claim_space(w),t=claim_element(w,"DIV",{class:!0}),y=children(t),v=claim_element(y,"DIV",{class:!0}),E=children(v),d=claim_element(E,"A",{href:!0,"data-lightbox":!0,"data-image-alt":!0}),k=children(d),a=claim_element(k,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0}),k.forEach(detach),E.forEach(detach),M=claim_space(y),f=claim_element(y,"DIV",{class:!0}),R=children(f),l=claim_element(R,"A",{href:!0,"data-lightbox":!0,"data-image-alt":!0}),P=children(l),i=claim_element(P,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0}),P.forEach(detach),R.forEach(detach),A=claim_space(y),j=claim_element(y,"DIV",{class:!0}),H=children(j),c=claim_element(H,"A",{href:!0,"data-lightbox":!0,"data-image-alt":!0}),I=children(c),o=claim_element(I,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0}),I.forEach(detach),H.forEach(detach),F=claim_space(y),g=claim_element(y,"DIV",{class:!0}),B=children(g),r=claim_element(B,"A",{href:!0,"data-lightbox":!0,"data-image-alt":!0}),V=children(r),s=claim_element(V,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0}),V.forEach(detach),B.forEach(detach),y.forEach(detach),w.forEach(detach),$.forEach(detach),this.h()},h(){attr(p,"class","cs-topper"),attr(b,"class","cs-title"),attr(m,"class","cs-text"),attr(n,"class","cs-content"),attr(a,"loading","lazy"),attr(a,"decoding","async"),src_url_equal(a.src,_=e[0].url)||attr(a,"src",_),attr(a,"alt","Alt Text"),attr(d,"href",k=e[0].url),attr(d,"data-lightbox","gallery"),attr(d,"data-image-alt","Image 1"),attr(v,"class","gallery-item"),attr(i,"loading","lazy"),attr(i,"decoding","async"),src_url_equal(i.src,O=e[0].url)||attr(i,"src",O),attr(i,"alt","Alt Text"),attr(l,"href",x=e[0].url),attr(l,"data-lightbox","gallery"),attr(l,"data-image-alt","Image 2"),attr(f,"class","gallery-item"),attr(o,"loading","lazy"),attr(o,"decoding","async"),src_url_equal(o.src,y=e[0].url)||attr(o,"src",y),attr(o,"alt","Alt Text"),attr(c,"href",E=e[0].url),attr(c,"data-lightbox","gallery"),attr(c,"data-image-alt","Image 3"),attr(j,"class","gallery-item"),attr(s,"loading","lazy"),attr(s,"decoding","async"),src_url_equal(s.src,C=e[0].url)||attr(s,"src",C),attr(s,"alt","Alt Text"),attr(r,"href",w=e[0].url),attr(r,"data-lightbox","gallery"),attr(r,"data-image-alt","Image 4"),attr(g,"class","gallery-item"),attr(t,"class","gallery"),attr(u,"class","cs-container"),attr(h,"id","lightbox-gallery")},m(e,y){insert_hydration(e,h,y),append_hydration(h,u),append_hydration(u,n),append_hydration(n,p),append_hydration(p,z),append_hydration(n,S),append_hydration(n,b),append_hydration(b,L),append_hydration(n,N),append_hydration(n,m),append_hydration(m,T),append_hydration(u,D),append_hydration(u,t),append_hydration(t,v),append_hydration(v,d),append_hydration(d,a),append_hydration(t,M),append_hydration(t,f),append_hydration(f,l),append_hydration(l,i),append_hydration(t,A),append_hydration(t,j),append_hydration(j,c),append_hydration(c,o),append_hydration(t,F),append_hydration(t,g),append_hydration(g,r),append_hydration(r,s)},p(e,[t]){t&1&&!src_url_equal(a.src,_=e[0].url)&&attr(a,"src",_),t&1&&k!==(k=e[0].url)&&attr(d,"href",k),t&1&&!src_url_equal(i.src,O=e[0].url)&&attr(i,"src",O),t&1&&x!==(x=e[0].url)&&attr(l,"href",x),t&1&&!src_url_equal(o.src,y=e[0].url)&&attr(o,"src",y),t&1&&E!==(E=e[0].url)&&attr(c,"href",E),t&1&&!src_url_equal(s.src,C=e[0].url)&&attr(s,"src",C),t&1&&w!==(w=e[0].url)&&attr(r,"href",w)},i:noop,o:noop,d(e){e&&detach(h)}}}function instance(e,t,n){let{image:s}=t;return e.$$set=e=>{"image"in e&&n(0,s=e.image)},[s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{image:0})}}export default Component