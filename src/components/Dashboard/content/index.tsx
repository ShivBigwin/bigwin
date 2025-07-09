export default function Content(){
    return(
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow h-auto">📊 Card 1</div>
            <div className="bg-white p-4 rounded-lg shadow h-auto">📈 Card 2</div>
            <div className="bg-white p-4 rounded-lg shadow h-auto">⚙️ Card 3</div>
          </div>
        </main>
    )
}