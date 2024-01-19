import{SvelteComponent,add_flush_callback,append_hydration,assign,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,claim_text,construct_svelte_component,create_component,destroy_component,detach,element,empty,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,noop,safe_not_equal,space,subscribe,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import{onMount}from"../../web_modules/svelte/index.mjs";import Login from"./login.js";import Head from"./head.js";import Header from"./header.js";import Footer from"./footer.js";function create_if_block(e){let t,i,s,o;function a(t){e[8](t)}var n=e[7].menu;function r(e){let t={user:e[4]};return e[0]!==void 0&&(t.content=e[0]),{props:t}}return n&&(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert_hydration(e,s,n),o=!0},p(e,o){const c={};if(o&16&&(c.user=e[4]),!i&&o&1&&(i=!0,c.content=e[0],add_flush_callback(()=>i=!1)),o&128&&n!==(n=e[7].menu)){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(c)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let o,c,_,s,r,j,p,h,i,b,v,u,g,a,t,f,d,m;c=new Head({props:{title:e[0].filename,env:e[5]}});let n=e[4]&&e[7].isAuthenticated&&create_if_block(e);function x(t){e[9](t)}let w={user:e[4]};e[6]!==void 0&&(w.hash=e[6]),i=new Login({props:w}),binding_callbacks.push(()=>bind(i,"hash",x)),u=new Header({});const y=[e[0].fields,{allContent:e[2]},{allLayouts:e[3]},{content:e[0]}];var l=e[1];function O(){let t={};for(let e=0;e<y.length;e+=1)t=assign(t,y[e]);return{props:t}}return l&&(t=construct_svelte_component(l,O(e))),d=new Footer({}),{c(){o=element("html"),create_component(c.$$.fragment),_=space(),s=element("body"),r=element("a"),j=text("Click To Skip To Main Content"),p=space(),n&&n.c(),h=space(),create_component(i.$$.fragment),v=space(),create_component(u.$$.fragment),g=space(),a=element("main"),t&&create_component(t.$$.fragment),f=space(),create_component(d.$$.fragment),this.h()},l(e){o=claim_element(e,"HTML",{lang:!0});var l,m,y,b=children(o);claim_component(c.$$.fragment,b),_=claim_space(b),s=claim_element(b,"BODY",{}),l=children(s),r=claim_element(l,"A",{class:!0,"aria-label":!0,href:!0}),y=children(r),j=claim_text(y,"Click To Skip To Main Content"),y.forEach(detach),p=claim_space(l),n&&n.l(l),h=claim_space(l),claim_component(i.$$.fragment,l),v=claim_space(l),claim_component(u.$$.fragment,l),g=claim_space(l),a=claim_element(l,"MAIN",{id:!0}),m=children(a),t&&claim_component(t.$$.fragment,m),f=claim_space(m),claim_component(d.$$.fragment,m),m.forEach(detach),l.forEach(detach),b.forEach(detach),this.h()},h(){attr(r,"class","skip"),attr(r,"aria-label","skip to main content"),attr(r,"href","#main"),attr(a,"id","main"),attr(o,"lang","en")},m(e,l){insert_hydration(e,o,l),mount_component(c,o,null),append_hydration(o,_),append_hydration(o,s),append_hydration(s,r),append_hydration(r,j),append_hydration(s,p),n&&n.m(s,null),append_hydration(s,h),mount_component(i,s,null),append_hydration(s,v),mount_component(u,s,null),append_hydration(s,g),append_hydration(s,a),t&&mount_component(t,a,null),append_hydration(a,f),mount_component(d,a,null),m=!0},p(e,[o]){const r={};o&1&&(r.title=e[0].filename),o&32&&(r.env=e[5]),c.$set(r),e[4]&&e[7].isAuthenticated?n?(n.p(e,o),o&144&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(s,h)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros());const d={};o&16&&(d.user=e[4]),!b&&o&64&&(b=!0,d.hash=e[6],add_flush_callback(()=>b=!1)),i.$set(d);const u=o&13?get_spread_update(y,[o&1&&get_spread_object(e[0].fields),o&4&&{allContent:e[2]},o&8&&{allLayouts:e[3]},o&1&&{content:e[0]}]):{};if(o&2&&l!==(l=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}l?(t=construct_svelte_component(l,O(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,a,f)):t=null}else l&&t.$set(u)},i(e){if(m)return;transition_in(c.$$.fragment,e),transition_in(n),transition_in(i.$$.fragment,e),transition_in(u.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(d.$$.fragment,e),m=!0},o(e){transition_out(c.$$.fragment,e),transition_out(n),transition_out(i.$$.fragment,e),transition_out(u.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(d.$$.fragment,e),m=!1},d(e){e&&detach(o),destroy_component(c),n&&n.d(),destroy_component(i),destroy_component(u),t&&destroy_component(t),destroy_component(d)}}}function instance(e,t,n){let r,a=noop,c=()=>(a(),a=subscribe(o,e=>n(7,r=e)),o);e.$$.on_destroy.push(()=>a());let{content:s,layout:l,allContent:d,allLayouts:u,user:o,env:h}=t;c();let i;onMount(async()=>{n(6,i=window.location.hash)});function m(e){s=e,n(0,s)}function f(e){i=e,n(6,i)}return e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,l=e.layout),"allContent"in e&&n(2,d=e.allContent),"allLayouts"in e&&n(3,u=e.allLayouts),"user"in e&&c(n(4,o=e.user)),"env"in e&&n(5,h=e.env)},[s,l,d,u,o,h,i,r,m,f]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,allContent:2,allLayouts:3,user:4,env:5})}}export default Component