class MainCharacter {
    
    constructor(game) {
       this.game = game;
       this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/pokemonMC.png"), 109, 6, 18, 40, 3, 0.2);

       this.x = 12;
       this.y = 200;
       this.speed = 50;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 325) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/pokemonMC.png"), 164, 6, 18, 40, 2, 0.2);
            this.speed = -50;
        }
        if(this.x < 12) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/pokemonMC.png"), 109, 6, 18, 40, 3, 0.2);
            this.speed = 50;
        }
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}