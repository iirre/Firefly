import type { SponsorConfig } from "../types/sponsorConfig";
import sponsorData from "../data/cms/sponsor.json";

// 打赏配置（可在后台 /admin 中修改）
export const sponsorConfig: SponsorConfig = sponsorData as unknown as SponsorConfig;
