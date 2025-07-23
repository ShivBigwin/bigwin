export default function HomeDrop(){
    return(
        <div className="flex flex-col px-4 py-20 h-60 space-y-1 text-black bg-white">
          <a href="home" className="hover:text-gray-300">Home</a>
          <a href="about" className="hover:text-gray-300">About</a>
          <a href="lender" className="hover:text-gray-300">Lender</a>
          <a href="borrower" className="hover:text-gray-300">Borrower</a>
          <a href="resources" className="hover:text-gray-300">Resources</a>
          <a href="login" className="hover:text-gray-300">Login</a>
        </div>

    )
}