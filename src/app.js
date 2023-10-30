const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    // let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    let detailedPlayers = []
    players.map((player , i  )=>{
        
        let hero_or_villain = i%2==0 ? "hero" : "villain"
        let obj =  {
            name : player,
            strength : getRandomStrength(), 
            image: `./images/super-${i+1}.png`,
            type: hero_or_villain,
        }
        detailedPlayers.push(obj)
    })
    // console.log(detailedPlayers);
    return detailedPlayers;
}
// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment = players.filter(player=>player.type==type).map((players,i)=>{
        return `<div class="player">
        <img src="${players.image}" alt="">
        <div class="name">${players.name}</div>
        <div class="strength">${players.strength}</div>
    </div>`
}
    ).join('');

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}