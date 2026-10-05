import type { LicenseConfig } from "../types/licenseConfig";
import licenseData from "../data/cms/license.json";

// 文章许可证配置（可在后台 /admin 中修改）
export const licenseConfig: LicenseConfig = licenseData as unknown as LicenseConfig;
