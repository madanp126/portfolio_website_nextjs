import {Card} from "@/src/components/card"

export default function DashboardPage(){
    return(
        <div>
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        <p className="text-gray-600">
            Welcome to admin Dashboard.
        </p>
        <Card title="Revenue">
            Rs.2,50,000
        </Card>
        </div>
    );
}