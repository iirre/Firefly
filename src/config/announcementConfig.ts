import type { AnnouncementConfig } from "../types/announcementConfig";
import annData from "../data/cms/announcement.json";

// 公告配置（可在后台 /admin 中修改）
export const announcementConfig: AnnouncementConfig = annData as unknown as AnnouncementConfig;
