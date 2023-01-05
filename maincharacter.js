class MainCharacter {
    constructor(game) {
       this.game = game;
       this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/pokemonMC.png"), 150, 10, 14, 20, 3, 0.7);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 12, 220);
    };
}