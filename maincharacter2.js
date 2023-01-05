class MainCharacter {
    constructor(game) {
       this.game = game;
       this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/pokemonMC.png"), 125, 6, 18, 40, 2, 0.2);

       this.x = 12;
       this.y = 190;
       this.speed = 25;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 310) this.x = 12;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}