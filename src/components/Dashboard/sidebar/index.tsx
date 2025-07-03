export default function SideBar(){
    return(
        <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-4 font-bold text-xl border-b text-center justify-center">Dashboard</div>
                <nav className="p-4">
                  <ul className="text-center justify-center">
                    <li className="mb-2"><a href="/home" className="text-gray-700 hover:text-blue-500">Home</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Analytics</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Settings</a></li>
                  </ul>
                </nav>
              </aside>
    )
}