class Background {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Backgrounds/Newbarktown_map.png"), 0, 0, 500, 500, 1, 0.02);


    };

    update() {
        

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./Backgrounds/Newbarktown_map.png"),0,0, 512, 512);
    };
}