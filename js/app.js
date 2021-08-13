import NEWS_API_KEY from "./apikey.js"


gsap.from('.section__article--first', { duration: 1, x: '-100vw', delay: 0.5, ease: 'power.in' })
gsap.from('.section__article--second', { duration: 1, x: '200vw', delay: 0.5, ease: 'power.in' })
gsap.from('.section__article--third', { duration: 1, x: '-100vw', delay: 0.5, ease: 'power.in' })
gsap.from('.section__article--fourth', { duration: 1, x: '200vw', delay: 0.5, ease: 'power.in' })

const searchForm = document.getElementById('search')
const input = document.getElementById('input')
const newsList = document.getElementById('news-list')

searchForm.addEventListener('submit', getNews)

function getNews(e) {

    if (input.value === '') {
        alert("Please type in a topic.")
        return
    }
    e.preventDefault()
    newsList.innerHTML = '';


    let topic = input.value
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${NEWS_API_KEY}`

    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.style.textDecoration = "none"
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a)
            newsList.appendChild(li)
        })
    }).catch((error) => {

    })


}