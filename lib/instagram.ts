export type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};

type RawPost = InstagramPost & { media_type: string };

export async function getInstagramPosts(count: number): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,timestamp&access_token=${token}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) {
      console.error(`Instagram API error: ${res.status}`);
      return [];
    }
    const data = (await res.json()) as { data: RawPost[] };
    return data.data
      .filter((p) => p.media_type === "IMAGE")
      .slice(0, count)
      .map(({ id, media_url, permalink, timestamp }) => ({
        id,
        media_url,
        permalink,
        timestamp,
      }));
  } catch (err) {
    console.error("Instagram fetch failed:", err);
    return [];
  }
}
