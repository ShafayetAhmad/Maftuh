import LeftNavbar from "@/components/leftnavbar/LeftNavbar";
import Post from "@/components/post/Post";
import PostCreator from "@/components/postcreator/PostCreator";
import RightSidebar from "@/components/rightsidebar/RightSidebar";

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto">
      <LeftNavbar />

      <main className="flex-grow max-w-2xl mx-auto border-l border-r border-gray-200">
        <PostCreator></PostCreator>
        <div>
          <Post
            username="John Doe"
            handle="johndoe"
            timestamp="2h"
            content="This is a sample post content for Twitter clone."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
          <Post
            username="Jane Smith"
            handle="janesmith"
            timestamp="4h"
            content="Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component.Here's another sample post to showcase the component."
            avatarUrl="/public/icon_m.jpg"
          />
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}
