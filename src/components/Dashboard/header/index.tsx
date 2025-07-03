//import ProfileDrop from "@/common/Dropdown/profiledrop";
import Hamburger from "@/common/Button/hamburger";
import ProfileImage from "./profile/profileImage";

 export default function Header(){
 return(
 <header className="bg-white shadow-md p-4 flex items-center justify-between">
          {/* <div className=""><Hamburger/></div> */}
          <div className="text-lg font-semibold">Welcome back!</div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">User Name</span>
            <div className=" h-10 flex items-center justify-center bg-gray-100">
              <ProfileImage />
            </div>
            {/* <img 
            src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" /> */}
          </div>
          
        </header>
 )
 }