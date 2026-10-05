import type { SpineModelConfig, Live2DWidgetConfig } from "../types/pioConfig";
import spineData from "../data/cms/pio-spine.json";
import live2dData from "../data/cms/pio-live2d.json";

// Spine 看板娘配置（可在后台 /admin 中修改）
export const spineModelConfig: SpineModelConfig = spineData as unknown as SpineModelConfig;

// Live2D 看板娘配置（可在后台 /admin 中修改）
export const live2dWidgetConfig: Live2DWidgetConfig = live2dData as unknown as Live2DWidgetConfig;
