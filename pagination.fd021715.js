!function(){// https://jsonplaceholder.typicode.com/
class e{static BASE_URL="https://jsonplaceholder.typicode.com";constructor(){this.page=1}fetchPosts(){return fetch(`${e.BASE_URL}/posts?_page=${this.page}&_limit=20`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()})}}/* 
<li class="posts__item">
    <h2 class="posts__title">{{this.title}}</h2>
    <p class="posts__text">{{this.body}}</p>
    <p class="posts__id">id: {{this.id}}</p>
</li>
*/let t=e=>e.map(e=>`
        <li class="posts__item">
            <h2 class="posts__title">${e.title}</h2>
            <p class="posts__text">${e.body}</p>
            <p class="posts__id">id: ${e.id}</p>
        </li>
        `).join(""),s=document.querySelector(".js-posts"),o=document.querySelector(".js-load-more"),c=new e;console.log(c),c.fetchPosts().then(e=>{console.log(e),s.innerHTML=t(e),o.classList.remove("is-hidden")}).catch(e=>{console.log(e)});let i=e=>{c.page+=1,c.fetchPosts().then(e=>{if(0===e.length){o.classList.add("is-hidden"),o.removeEventListener("click",i);return}s.insertAdjacentHTML("beforeend",t(e))}).catch()};o.addEventListener("click",i),fetch("https://api.unsplash.com/?client_id=LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc&query=cat&page=1&per_page=10")}();//# sourceMappingURL=pagination.fd021715.js.map

//# sourceMappingURL=pagination.fd021715.js.map
