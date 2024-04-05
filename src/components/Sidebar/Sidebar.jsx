import { useContext, useState } from "react";
import { HistoryIcon, MenuIcon, MessageCircleIcon, PlusIcon, SettingsIcon } from "lucide-react";
import { MdOutlineQuestionMark } from "react-icons/md";
import "./Sidebar.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { onSend, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSend(prompt)
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
  };

  return (
    <div className={`sidebar inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px]`}>
      <div className="top">
        <MenuIcon
          className="icon block ml-[10px] cursor-pointer rounded-[100%]"
          onClick={toggleSidebar}
        />
        <div onClick={()=>newChat()}
          className="mt-[50px] inline-flex center items-center gap[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-gray-500 cursor-pointer"
        >
          <PlusIcon className="icon" />
          {isOpen ? <p className="delay-100">New Chat</p> : null}
        </div>
        {isOpen && prevPrompt ? (
          <div className="flex flex-col">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            {prevPrompt.map((item, index) => (
              <div key={index} onClick={()=>loadPrompt(item)} className="recent-entry">
                <MessageCircleIcon className="icon" />
                <p className="delay-100 truncate">{item.slice(0,18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="recent-entry bottom-item">
          <MdOutlineQuestionMark className="icon" />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className="recent-entry bottom-item">
          <HistoryIcon className="icon" />
          {isOpen ? <p>Activity</p> : null}
        </div>
        <div className="recent-entry bottom-item">
          <SettingsIcon className="icon" />
          {isOpen ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
