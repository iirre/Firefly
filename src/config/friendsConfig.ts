import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";
import friendsData from "../data/cms/friends.json";

const fd = friendsData as unknown as { page: FriendsPageConfig; list: FriendLink[] };

// 友链页面配置（可在后台 /admin 中修改）
export const friendsPageConfig: FriendsPageConfig = fd.page;

// 友链配置（可在后台 /admin 中修改）
export const friendsConfig: FriendLink[] = fd.list;

// 获取已启用的友链（按权重排序）
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);
	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}
	return friends.sort((a, b) => b.weight - a.weight);
};
