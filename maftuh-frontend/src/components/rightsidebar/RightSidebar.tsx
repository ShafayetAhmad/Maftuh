import { FC } from "react";

const RightSidebar: FC = () => {
  return (
    <div className="w-72 p-4 space-y-6">
      <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent outline-none flex-grow text-gray-700"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-4 space-y-4">
        <h2 className="font-bold text-lg">What’s happening</h2>
        <p className="text-sm text-gray-500">#Topic1</p>
        <p className="text-sm text-gray-500">#Topic2</p>
        <p className="text-sm text-gray-500">#Topic3</p>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 space-y-4">
        <h2 className="font-bold text-lg">Who to follow</h2>
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 rounded-full w-8 h-8" />
          <div>
            <p className="text-sm font-bold">User1</p>
            <p className="text-sm text-gray-500">@user1</p>
          </div>
          <button className="ml-auto text-blue-500 font-semibold text-sm">
            Follow
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 rounded-full w-8 h-8" />
          <div>
            <p className="text-sm font-bold">User2</p>
            <p className="text-sm text-gray-500">@user2</p>
          </div>
          <button className="ml-auto text-blue-500 font-semibold text-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
