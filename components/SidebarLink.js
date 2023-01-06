function SidebarLink({ text, Icon, active }) {
  return (
    <div className={``}>
      <Icon className="h-7 text-white" />
      <span>{text}</span>
    </div>
  );
}
export default SidebarLink;
