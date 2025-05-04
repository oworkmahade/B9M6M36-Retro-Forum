const loadDiscussCards = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/posts"
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    console.log(data);
    const postsList = data.posts;
    console.log(postsList[0].comment_count);
  } catch (error) {
    console.error("Error loading discuss cards:", error);
  }
};

loadDiscussCards();
