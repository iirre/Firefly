import type { ProfileConfig } from "../types/profileConfig";
import profData from "../data/cms/profile.json";

// 个人资料配置（可在后台 /admin 中修改）
export const profileConfig: ProfileConfig = {
	avatar: profData.avatar,
	name: profData.name,
	bio: profData.bio,
	links: profData.links,
};
