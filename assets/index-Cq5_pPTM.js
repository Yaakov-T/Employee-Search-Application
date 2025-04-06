(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(){const s=()=>{const e=document.getElementById("searchInput").value;alert(`Search term: ${e}`),console.log("Search term:",e)},r=()=>{const e=Math.floor(Math.random()*1e3);alert(`Random number: ${e}`);const t=document.getElementById("randomNumber");t&&(t.innerText="Random Number: "+e),console.log("Random number:",e)},o=document.getElementById("searchButton"),n=document.getElementById("randomButton");o&&o.addEventListener("click",s),n&&n.addEventListener("click",r)}const a=document.querySelector("#app");a&&(a.innerHTML=`
        <div class="container">
            <div class="card">
                <h2>User Search</h2>
                <input type="text" id="searchInput" class="input" placeholder="Enter search term">
                <div>
                    <button class="button" id="searchButton">Search</button>
                    <button class="button" id="randomButton">Random Search</button>
                </div>
                <p id="randomNumber" class="random-number"></p>
            </div>
        </div>
    `,d());
