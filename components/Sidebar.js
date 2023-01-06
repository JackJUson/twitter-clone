import SidebarLink from "./SidebarLink";
import { EllipsisHorizontalIcon, HomeIcon } from "@heroicons/react/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardDocumentIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div
      className="hidden sm:flex flex-col items-center xl:items-start
    xl:w-[340px] p-2 fixed h-full"
    >
      <div
        className="flex items-center justify-center w-14 h-14 hover__animation 
      p-0 xl:ml-24"
      >
        <img
          src="https://icon-library.com/images/twitter-icon-svg/twitter-icon-svg-28.jpg"
          alt=""
          width={30}
          height={30}
        />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardDocumentIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
      <button
        className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white
        rounded-full w-56 h-[52px] text-lg font-bold tracking-wide shadow-md
        hover:bg-[#1a8cd8]"
      >
        Tweet
      </button>

      <div className="text-[#d9d9d9] flex items-center justify-center xl:ml-auto
           hover__animation xl:-mr-5 mt-auto">
        <img
          src="https://avatars.githubusercontent.com/u/108652931?v=4"
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Jackson 1234</h4>
          <p className="text-[#6e767d]">@Jackson1234</p>
        </div>
        <EllipsisHorizontalIcon className="h-7 hidden xl:inline ml-8" />
      </div>
    </div>
  );
}
export default Sidebar;
