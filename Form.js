class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput('')
        this.button = createButton('play')
        this.greting = createElement('h2')
    }
    display(){
       
        this.title.html("car racing game")
        this.title.position(150,0)
        
        this.input.position(150,160)
        
        this.button.position(250,200)
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = input.value()
            playerCount += 1
            player.index.playerCount
            player.update()
            player.updateCount(playerCount)
            this.greting.html("hello" + player.name)
            this.greting.position(130,100)
        })
    }
}