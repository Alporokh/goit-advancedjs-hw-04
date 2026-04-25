/* empty css                      */import{a as q,S as E,i as c}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const P="https://pixabay.com/api/",$="55511157-7a64d58fac1bd8bae601b6272",B=15;async function m(s,t){return(await q.get(P,{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:B,page:t}})).data}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".load-more-btn"),R=new E(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img
            src="${r}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <div class="gallery-info">
          <p><b>Likes</b><span>${o}</span></p>
          <p><b>Views</b><span>${a}</span></p>
          <p><b>Comments</b><span>${w}</span></p>
          <p><b>Downloads</b><span>${S}</span></p>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),R.refresh()}function M(){f.innerHTML=""}function b(){g.classList.add("visible")}function L(){g.classList.remove("visible")}function v(){y.classList.add("visible")}function l(){y.classList.remove("visible")}const A=document.querySelector(".search-form"),O=document.querySelector(".load-more-btn");let u="",n=1,d=0;const p=15;A.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.query.value.trim();if(t){u=t,n=1,M(),l(),b();try{const r=await m(u,n);if(d=r.totalHits,r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(r.hits),r.hits.length<p||n*p>=d?l():v()}catch(r){c.error({message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{L()}}});O.addEventListener("click",async()=>{n+=1,b(),l();try{const s=await m(u,n);h(s.hits);const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}n*p>=d?(l(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch(s){c.error({message:`Something went wrong: ${s.message}`,position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
