const orders = [
  { id: "#1001", user: "John Doe", amount: "$250", status: "Completed" },
  { id: "#1002", user: "Sarah Lee", amount: "$180", status: "Pending" },
  { id: "#1003", user: "Michael Smith", amount: "$420", status: "Completed" },
  { id: "#1004", user: "Emma Brown", amount: "$95", status: "Cancelled" },
]
export default function RecentOrders(){
    return(
        <div className="table-card">
            <h3>Recent Orders</h3>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order=>(
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.user}</td>
                            <td>{order.amount}</td>
                            <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}