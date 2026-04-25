/* empty css                      */import{a as q,S as E,i as c}from"./assets/vendor-6PfGVvHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",$="55511157-7a64d58fac1bd8bae601b6272",B=15;async function m(s,t){return(await q.get(P,{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:B,page:t}})).data}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".load-more-btn"),R=new E(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img
            src="${o}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <div class="gallery-info">
          <p><b>Likes</b><span>${r}</span></p>
          <p><b>Views</b><span>${a}</span></p>
          <p><b>Comments</b><span>${w}</span></p>
          <p><b>Downloads</b><span>${S}</span></p>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),R.refresh()}function M(){f.innerHTML=""}function b(){g.classList.add("visible")}function L(){g.classList.remove("visible")}function v(){y.classList.add("visible")}function l(){y.classList.remove("visible")}const A=document.querySelector(".form"),O=document.querySelector(".load-more-btn");let u="",n=1,d=0;const p=15;A.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.query.value.trim();if(t){u=t,n=1,M(),l(),b();try{const o=await m(u,n);if(d=o.totalHits,o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits),o.hits.length<p||n*p>=d?l():v()}catch(o){c.error({message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{L()}}});O.addEventListener("click",async()=>{n+=1,b(),l();try{const s=await m(u,n);h(s.hits);const t=document.querySelector(".gallery-item");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}n*p>=d?(l(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch(s){c.error({message:`Something went wrong: ${s.message}`,position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
