import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";
import friendsJson from "../data/cms/friends.json?raw";
const friendsData = JSON.parse(friendsJson);

// 友链页面配置（可在后台 /admin 中修改）
export const friendsPageConfig: FriendsPageConfig = {
	title: friendsData.page.title,
	description: friendsData.page.description,
	showCustomContent: friendsData.page.showCustomContent,
	showComment: friendsData.page.showComment,
	randomizeSort: friendsData.page.randomizeSort,
};

// 友链配置（可在后台 /admin 中修改）
export const friendsConfig: FriendLink[] = friendsData.list;
