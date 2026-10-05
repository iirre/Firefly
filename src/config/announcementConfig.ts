import type { AnnouncementConfig } from "../types/announcementConfig";
import annJson from "../data/cms/announcement.json?raw";
const annData = JSON.parse(annJson);

// 公告配置（可在后台 /admin 中修改）
export const announcementConfig: AnnouncementConfig = {
	title: annData.title,
	content: annData.content,
	closable: annData.closable,
	link: annData.link,
};
