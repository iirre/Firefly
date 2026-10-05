import type { ProfileConfig } from "../types/profileConfig";
import profJson from "../data/cms/profile.json?raw";
const profData = JSON.parse(profJson);

// 个人资料配置（可在后台 /admin 中修改）
export const profileConfig: ProfileConfig = {
	avatar: profData.avatar,
	name: profData.name,
	bio: profData.bio,
	links: profData.links,
};
