const newHeroButton=document.getElementById('newHero');
const SUPERHERO_TOKEN='1427272801125447'
const BASE_URL=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const heroImg=document.getElementById('heroImg')
const input=document.getElementById('input')
const search=document.getElementById('search')

const getSuperHero=(id,name)=>{
    
    fetch(`https://www.superheroapi.com/api.php/1427272801125447/${id}`)
    .then(response=>response.json())
    .then(json=>{
        const stats=getStatsHTML(json);
        const name1=`<h2>${json.name}</h2>`
        heroImg.innerHTML=`${name1}<img src="${json.image.url}" width=200 height=200/>${stats.toUpperCase()}`

    })
    
}
const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }

const randomNo =()=>{
    let size=731
    let num=Math.floor(Math.random()*size)+1;
    return num;
}
newHeroButton.onclick=()=>{
   
    getSuperHero(randomNo())
}

const getSearchSuperHero=(name)=>{
    fetch(`https://www.superheroapi.com/api.php/1427272801125447/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
       
        const stats=getStatsHTML(json.results[0]);
        console.log(json.results[0].powerstats)
        const name1=`<h2>${json.results[1].name}</h2>`
        heroImg.innerHTML=`${name1}<img src="${json.results[0].image.url}" width=200 height=200/>${stats.toUpperCase()}`

    })
}

search.onclick=()=>{
    getSearchSuperHero(input.value)
}
const getStatsHTML=(charcter)=>{
    const stats=Object.keys(charcter.powerstats).map(stat=>{
        return `<p>${statToEmoji[stat]}${stat}: ${charcter.powerstats[stat]}</p>`
    })
    return stats.join(' ');
  }

// https://www.superheroapi.com/api.php/1427272801125447/search/batman