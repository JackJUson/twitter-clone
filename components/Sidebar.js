import SidebarLink from "./SideBarLink";
import { HomeIcon } from "@heroicons/react/24/solid";
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
    </div>
  );
}
export default Sidebar;
