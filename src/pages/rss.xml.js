import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { config } from "@/site";

export async function GET(context) {
    const posts = await getCollection("blog");
    return rss({
        title: config.title,
        description: config.description,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
        })),
    });
}
