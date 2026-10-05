import type { GalleryConfig } from "../types/galleryConfig";
import galleryData from "../data/cms/gallery.json";

// 相册配置（可在后台 /admin 中修改）
// 注意：在 public/gallery/ 下创建对应 id 的目录并放入图片
export const galleryConfig: GalleryConfig = galleryData as unknown as GalleryConfig;
