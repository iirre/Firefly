import type { ProfileConfig } from "../types/profileConfig";
import profData from "../data/cms/profile.json";

// 个人资料配置（可在后台 /admin 中修改）
export const profileConfig: ProfileConfig = profData as unknown as ProfileConfig;
