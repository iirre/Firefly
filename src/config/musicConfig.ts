import type { MusicPlayerConfig } from "../types/musicConfig";
import musicData from "../data/cms/music.json";

// 音乐播放器配置（数据部分可在后台 /admin 中修改）
export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: musicData.showInNavbar,
	showInSidebar: musicData.showInSidebar,
	mode: musicData.mode as "meting" | "local",
	volume: musicData.volume,
	playMode: musicData.playMode as "list" | "one" | "random",
	showLyrics: musicData.showLyrics,
	meting: musicData.meting as MusicPlayerConfig["meting"],
	local: musicData.local as MusicPlayerConfig["local"],
};
