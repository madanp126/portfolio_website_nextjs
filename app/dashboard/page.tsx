export default function Dashboard(){
    return(
        <div>
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-gray-900">Sales: 10rs</div>
            <div className="bg-white p-4 rounded-xl shadow text-gray-900">Users: 150</div>
            <div className="bg-white p-4 rounded-xl shadow text-gray-900">Revenue: 45,0000rs</div>

        </div>
        </div>
    );
}