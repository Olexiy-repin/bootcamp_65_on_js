// https://jsonplaceholder.typicode.com/
class t{static BASE_URL="https://jsonplaceholder.typicode.com";constructor(){this.page=1}fetchPosts(){return fetch(`${t.BASE_URL}/posts?_page=${this.page}&_limit=20`).then(t=>{if(!t.ok)throw Error(t.status);return t.json()})}}/* 
<li class="posts__item">
    <h2 class="posts__title">{{this.title}}</h2>
    <p class="posts__text">{{this.body}}</p>
    <p class="posts__id">id: {{this.id}}</p>
</li>
*/const e=t=>t.map(t=>`
        <li class="posts__item">
            <h2 class="posts__title">${t.title}</h2>
            <p class="posts__text">${t.body}</p>
            <p class="posts__id">id: ${t.id}</p>
        </li>
        `).join(""),s=document.querySelector(".js-posts"),o=document.querySelector(".js-load-more"),c=new t;console.log(c),c.fetchPosts().then(t=>{console.log(t),s.innerHTML=e(t),o.classList.remove("is-hidden")}).catch(t=>{console.log(t)});const i=t=>{c.page+=1,c.fetchPosts().then(t=>{if(0===t.length){o.classList.add("is-hidden"),o.removeEventListener("click",i);return}s.insertAdjacentHTML("beforeend",e(t))}).catch()};o.addEventListener("click",i),fetch("https://api.unsplash.com/?client_id=LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc&query=cat&page=1&per_page=10");//# sourceMappingURL=pagination.6e0e49d1.js.map

//# sourceMappingURL=pagination.6e0e49d1.js.map
