import RecentOrders from "../components/RecentOrders";
import RevenueChart from "../components/RevenueChart";
import StatCard from "../components/StatCard";

export default function Dashboard(){
    const stats=[
        {title:"Revenue",value:"$24,500"},
        {title:"Users",value:"1,240"},
        {title:"Orders",value:"320"},
        {title:"Growth",value:"+12%"},
        
    ]
        
    
    return(
        <div className="dashboard">
            <h1>Overwiew</h1>
            <div className="stats-grid">
                {stats.map((obj,index)=>

                    <StatCard key={index} title={obj.title} value={obj.value}/>
                )}
                
            </div>
            <RevenueChart/>
            <RecentOrders/>
        </div>
    )
}