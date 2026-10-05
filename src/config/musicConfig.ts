import type { MusicPlayerConfig } from "../types/musicConfig";
import musicJson from "../data/cms/music.json?raw";
const musicData = JSON.parse(musicJson);

// 音乐播放器配置（数据部分可在后台 /admin 中修改）
export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: musicData.showInNavbar,
	showInSidebar: musicData.showInSidebar,
	mode: musicData.mode,
	volume: musicData.volume,
	playMode: musicData.playMode,
	showLyrics: musicData.showLyrics,
	meting: musicData.meting,
	local: musicData.local,
};
