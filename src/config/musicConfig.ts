import type { MusicPlayerConfig } from "../types/musicConfig";
import musicData from "../data/cms/music.json";

// 音乐播放器配置（数据部分可在后台 /admin 中修改）
export const musicPlayerConfig: MusicPlayerConfig = musicData as unknown as MusicPlayerConfig;
