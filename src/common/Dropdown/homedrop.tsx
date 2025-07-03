export default function HomeDrop(){
    return(
        <div className="flex flex-col px-4 py-2 space-y-2 bg-white">
          <a href="home" className="hover:text-gray-300">Home</a>
          <a href="about" className="hover:text-gray-300">About</a>
          <a href="dashboard" className="hover:text-gray-300">Services</a>
          <a href="signUp" className="hover:text-gray-300">SignUP</a>
          <a href="login" className="hover:text-gray-300">Login</a>
        </div>

    )
}