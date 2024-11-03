import LeftNavbar from "@/components/leftnavbar/LeftNavbar";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex-grow max-w-7xl mx-auto">
        {" "}
        <LeftNavbar />
      </main>
    </div>
  );
}
