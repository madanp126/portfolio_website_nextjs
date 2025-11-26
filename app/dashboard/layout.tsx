import { Children } from "react"

export default function DashboardLayout({children}:{children: React.ReactNode}){
    return(
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-lg p-5">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <nav className="flex flex-col gap-4">
                    <a href="/dashboard" className="text-gray-700 hover:text-black">Overview</a>
                    <a href="/dashboard/salesPage" className="text-gray-700 hover:text-black">Sales</a>
                    <a href="/dashboard/users" className="text-gray-700 hover:text-black">Users</a>
                </nav>

            </aside>

            <main className="flex-1 p-6"></main>
        </div>
    )
}