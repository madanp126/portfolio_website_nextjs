import Link from "next/link";

export default function Sidebar(){
    return(
        <aside className="w-64 bg-gray-700 text-white min-h-screen p-6 space-y-6">
            <Link href="/" className="block hover:text-blue-400">
            Home
            </Link>
            <Link href="/dashboard" className="block hover:text-blue-400">
            Dashboard
            </Link>
            <Link href="/reports" className="bloxk hover:text-blue-400">
            Reports</Link>


        </aside>
    );
}