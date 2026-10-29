import { getBlogPostsByCategory } from "../lib/blog-posts";

export const BUY_GUIDE_CARDS = getBlogPostsByCategory("buy");
export const USAGE_GUIDE_CARDS = getBlogPostsByCategory("use");
