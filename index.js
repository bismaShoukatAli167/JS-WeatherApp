 var weather = prompt(
  "🌤️ Bisma-shoukat.github.io says:\n\n" +
  "Please choose the weather:\n" +
  "1. 🌞 Summer\n" +
  "2. 🍂 Autumn\n" +
  "3. ❄️ Winter\n" +
  "4. 🌸 Spring\n\n" +
  ' Note: Please write only the name shown above.'
);

 if (weather === "welcome") {
  document.writeln(`
    <div id="welcomeScreen" class="welcomeScreen">
      <h1>Welcome to the beautiful weather app!</h1>
      <p>Made with love by Bisma Shoukat</p>
    </div>
  `);

}else if(weather === "summer"){
    document.writeln(
     `
     <div class="summer-bg">
  <div class="weather-card">
    <div class="first hero">
  <img class="hero-profile-img" src="./image/caed-gif.gif" alt="">
  <div class="hero-description-bk"></div>
  <div class="hero-logo">
    <img src="./image/summer-img.jpg" alt="">
  </div>
  <div class="hero-description">
    <p>"Endless skies,sakty air,and sunshine in my soul- welcome summer".</p>
  </div>
  <div  class="hero-date">
    <p>🌡 𝟯𝟮°C | 𝗦𝘂𝗻𝗻𝘆  </p>
    <p>☀️ 𝗛𝗼𝘁 & 𝗕𝗿𝗲𝗲𝘇𝘆</p>
  </div>
</div>


  </div>
</div>
     
     `
);
}  else if(weather === "winter"){
    document.writeln(
     `
     <div class="winter-bg">
  <div class="weather-card">
   <div class="second hero">
  <img class="hero-profile-img" src="./image/winter-img.webp" alt="">
  <div class="hero-description-bk"></div>

  <div class="hero-date">
  <p>🌡 -2°C | Chilly & Freezing</p>
  <p>🌨️ Snowfall Expected</p>
</div>
  <div class="hero-description">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
 

</div>
  </div>
</div>
 `
 )
  }else if(weather === "autumn"){
    document.writeln(
     `
     <div class="autumn-bg">
  <div class="weather-card">

<div class="card-list">
        <a href="#" class="card-item">
            <img src="./image/autumn-card.gif" alt="Card Image">
            <span class="developer">AutumnVibes</span>
            <h3>"Sweater weather and golden memories – it's Autumn's magic.".</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>
  </div>
 </div> 
     `
)
  } else if(weather === "spring"){
    document.writeln(
      `
     <div class="spring-bg">
      <div class="weather-card">
<div class="card-list">
        <a href="#" class="card-color">
            <img src="./image/spring card.gif" alt="Card Image">
            <span class="developer">coolvibes</span>
            <h3>Step into Spring, where style blooms with every breeze.".</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
              
            </div>
        </a>
  </div>
 </div> 
</div>
         
   ` 
   )
  }
  else{
    document.writeln(

      `
      <div class="error-container">
  <img src="./image/error-bg.gif" alt="">
 </div> 
      `
    )
  }











    