const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/pokemonMC.png");
ASSET_MANAGER.queueDownload("./Backgrounds/Newbarktown_map.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	gameEngine.addEntity(new Background(gameEngine));
	gameEngine.addEntity(new MainCharacter(gameEngine));

	gameEngine.start();
});
