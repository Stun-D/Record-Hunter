const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Flash,
		C3.Behaviors.bound,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnFall,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Platform.Acts.SetIgnoreInput
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{platformmap: 0},
	{Flash: 0},
	{BoundToLayout: 0},
	{playeranim: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{playerbox: 0},
	{Keyboard: 0},
	{State: 0},
	{enemy: 0},
	{edgemarker: 0},
	{Sine: 0},
	{pickup: 0},
	{txtscore: 0},
	{trapMap: 0},
	{record: 0},
	{zone1Button: 0},
	{zone1buttonpressed: 0},
	{zone1Door: 0},
	{zone2Button: 0},
	{zone2ButtonPressed: 0},
	{zone2door: 0},
	{trapMap2: 0},
	{zone3lever: 0},
	{zone3leverused: 0},
	{zone3Door: 0},
	{trapMap3: 0},
	{trapMap4: 0},
	{YouWin: 0},
	{Score: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	platformmap: class extends self.ITilemapInstance {},
	playeranim: class extends self.ISpriteInstance {},
	playerbox: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	enemy: class extends self.ISpriteInstance {},
	edgemarker: class extends self.ISpriteInstance {},
	pickup: class extends self.ISpriteInstance {},
	txtscore: class extends self.ITextInstance {},
	trapMap: class extends self.ITilemapInstance {},
	record: class extends self.ISpriteInstance {},
	zone1Button: class extends self.ISpriteInstance {},
	zone1buttonpressed: class extends self.ISpriteInstance {},
	zone1Door: class extends self.ISpriteInstance {},
	zone2Button: class extends self.ISpriteInstance {},
	zone2ButtonPressed: class extends self.ISpriteInstance {},
	zone2door: class extends self.ISpriteInstance {},
	trapMap2: class extends self.ITilemapInstance {},
	zone3lever: class extends self.ISpriteInstance {},
	zone3leverused: class extends self.ISpriteInstance {},
	zone3Door: class extends self.ISpriteInstance {},
	trapMap3: class extends self.ITilemapInstance {},
	trapMap4: class extends self.ITilemapInstance {},
	YouWin: class extends self.ITextInstance {}
}