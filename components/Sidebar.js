import SidebarLink from "./SideBarLink"

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start
    xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hover__animation 
      p-0 xl:ml-24">
        <img src="https://icon-library.com/images/twitter-icon-svg/twitter-icon-svg-28.jpg" alt="" width={30} height={30}/>
      </div>
      <div className="space-y-2.5">
        <SidebarLink />
        <SidebarLink />
        <SidebarLink />
      </div>
    </div>
  )
}
export default Sidebar
