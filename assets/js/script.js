(function(win, doc) {

   let banner =  new Splide(".banner", {
        type: "loop",
        autoplay: true,
        arrows:'slider',
        interval: 3000,
        pauseOnHover:true,
        "cover":true,
    })
    banner.mount()

    let lastGames = new Splide(".estatis__last-games", {
        type: "loop",
        perPage: 4,
        focus: "center",
        autoplay: true,
        arrows:'slider',
        interval: 2000,
        pauseOnHover:true,
    })
    lastGames.mount()

    
})(window, document);