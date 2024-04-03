import{SvelteComponent,add_flush_callback,append_hydration,assign,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,claim_text,construct_svelte_component,create_component,destroy_component,detach,element,empty,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,noop,safe_not_equal,space,subscribe,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import{onMount}from"../../web_modules/svelte/index.mjs";import Login from"./login.js";import Head from"./head.js";import Header from"./header.js";import Footer from"./footer.js";function create_if_block(e){let t,i,s,o;function a(t){e[8](t)}var n=e[7].menu;function r(e){let t={user:e[4]};return e[0]!==void 0&&(t.content=e[0]),{props:t}}return n&&(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert_hydration(e,s,n),o=!0},p(e,o){const c={};if(o&16&&(c.user=e[4]),!i&&o&1&&(i=!0,c.content=e[0],add_flush_callback(()=>i=!1)),o&128&&n!==(n=e[7].menu)){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(c)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let a,r,j,s,c,g,p,m,i,b,_,o,l,v,t,h,u,f;r=new Head({props:{title:e[0].filename,env:e[5]}});let n=e[4]&&e[7].isAuthenticated&&create_if_block(e);function x(t){e[9](t)}let w={user:e[4]};e[6]!==void 0&&(w.hash=e[6]),i=new Login({props:w}),binding_callbacks.push(()=>bind(i,"hash",x)),l=new Header({});const y=[e[0].fields,{allContent:e[2]},{allLayouts:e[3]},{content:e[0]}];var d=e[1];function O(){let t={};for(let e=0;e<y.length;e+=1)t=assign(t,y[e]);return{props:t}}return d&&(t=construct_svelte_component(d,O(e))),u=new Footer({}),{c(){a=element("html"),create_component(r.$$.fragment),j=space(),s=element("body"),c=element("a"),g=text("Click To Skip To Main Content"),p=space(),n&&n.c(),m=space(),create_component(i.$$.fragment),_=space(),o=element("main"),create_component(l.$$.fragment),v=space(),t&&create_component(t.$$.fragment),h=space(),create_component(u.$$.fragment),this.h()},l(e){a=claim_element(e,"HTML",{lang:!0});var d,f,y,b=children(a);claim_component(r.$$.fragment,b),j=claim_space(b),s=claim_element(b,"BODY",{}),d=children(s),c=claim_element(d,"A",{class:!0,"aria-label":!0,href:!0}),y=children(c),g=claim_text(y,"Click To Skip To Main Content"),y.forEach(detach),p=claim_space(d),n&&n.l(d),m=claim_space(d),claim_component(i.$$.fragment,d),_=claim_space(d),o=claim_element(d,"MAIN",{id:!0}),f=children(o),claim_component(l.$$.fragment,f),v=claim_space(f),t&&claim_component(t.$$.fragment,f),h=claim_space(f),claim_component(u.$$.fragment,f),f.forEach(detach),d.forEach(detach),b.forEach(detach),this.h()},h(){attr(c,"class","skip"),attr(c,"aria-label","skip to main content"),attr(c,"href","#main"),attr(o,"id","main"),attr(a,"lang","en")},m(e,d){insert_hydration(e,a,d),mount_component(r,a,null),append_hydration(a,j),append_hydration(a,s),append_hydration(s,c),append_hydration(c,g),append_hydration(s,p),n&&n.m(s,null),append_hydration(s,m),mount_component(i,s,null),append_hydration(s,_),append_hydration(s,o),mount_component(l,o,null),append_hydration(o,v),t&&mount_component(t,o,null),append_hydration(o,h),mount_component(u,o,null),f=!0},p(e,[a]){const c={};a&1&&(c.title=e[0].filename),a&32&&(c.env=e[5]),r.$set(c),e[4]&&e[7].isAuthenticated?n?(n.p(e,a),a&144&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(s,m)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros());const l={};a&16&&(l.user=e[4]),!b&&a&64&&(b=!0,l.hash=e[6],add_flush_callback(()=>b=!1)),i.$set(l);const u=a&13?get_spread_update(y,[a&1&&get_spread_object(e[0].fields),a&4&&{allContent:e[2]},a&8&&{allLayouts:e[3]},a&1&&{content:e[0]}]):{};if(a&2&&d!==(d=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}d?(t=construct_svelte_component(d,O(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,o,h)):t=null}else d&&t.$set(u)},i(e){if(f)return;transition_in(r.$$.fragment,e),transition_in(n),transition_in(i.$$.fragment,e),transition_in(l.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(u.$$.fragment,e),f=!0},o(e){transition_out(r.$$.fragment,e),transition_out(n),transition_out(i.$$.fragment,e),transition_out(l.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(u.$$.fragment,e),f=!1},d(e){e&&detach(a),destroy_component(r),n&&n.d(),destroy_component(i),destroy_component(l),t&&destroy_component(t),destroy_component(u)}}}function instance(e,t,n){let r,a=noop,c=()=>(a(),a=subscribe(o,e=>n(7,r=e)),o);e.$$.on_destroy.push(()=>a());let{content:s,layout:l,allContent:d,allLayouts:u,user:o,env:h}=t;c();let i;onMount(async()=>{n(6,i=window.location.hash)});function m(e){s=e,n(0,s)}function f(e){i=e,n(6,i)}return e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,l=e.layout),"allContent"in e&&n(2,d=e.allContent),"allLayouts"in e&&n(3,u=e.allLayouts),"user"in e&&c(n(4,o=e.user)),"env"in e&&n(5,h=e.env)},[s,l,d,u,o,h,i,r,m,f]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,allContent:2,allLayouts:3,user:4,env:5})}}export default Component