import PostsList from "@/components/posts/List-Posts";
import CreateTopicForm from "@/components/topics/Create-Topic-Form";
import TopicList from "@/components/topics/Topic-List";
import { fetchAllPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

// TODO: revalidate homepage after every 15 secs

export default function Home() {
  return (
    <section className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 border rounded">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostsList fetchPosts={() => fetchAllPosts()}></PostsList>
      </div>

      <aside className="text-center flex flex-col gap-4">
        <CreateTopicForm></CreateTopicForm>

        <article className="border shadow py-2 px-2 rounded-lg">
          <h3 className="text-xl">Topics</h3>
          <Divider className="my-2"></Divider>
          <TopicList></TopicList>
        </article>
      </aside>
    </section>
  );
}
