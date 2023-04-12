
import { error } from "@sveltejs/kit";


export const prerender = true;

export async function load({ fetch, params, setHeaders }) { 

  const fetchArticle = async () => {
    const { url } = params;
    const response = await fetch(
      `${'https://cms.samespace.com'}/items/docs?filter[url][_eq]=${url}&filter[status][_eq]=published&fields[]=id,title,url,video,content,topic.title,subtitle,topic.url,topic.color,related_docs.title,related_docs.id,related_docs.url,related_videos`
    );
    const articleData = await response.json();

    

    if (!articleData || !articleData.data || !articleData.data.length > 0) {
      throw error(404, {
        message: "it looks like you've stumbled upon a dead end.",
      });
    }

    return articleData.data[0];
  };

  return {
    article: fetchArticle(),
  };
}
