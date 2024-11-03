import HomeContentComp from "@/components/homecontentcomp/HomeContentComp";
import LeftNavbar from "@/components/leftnavbar/LeftNavbar";
import RightSidebar from "@/components/rightsidebar/RightSidebar";

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto">
      <LeftNavbar />

      <main className="flex-grow max-w-2xl mx-auto border-l border-r border-gray-200">
        <HomeContentComp></HomeContentComp>
      </main>

      <RightSidebar />
    </div>
  );
}
