import React from 'react';
import "../../style/UserProfile/Orders.css"
import { useState } from 'react';

function Orders() {
    const [query, setQuery] = useState("")

    const orders = [
        {
            id: 1,
            link: 'Order #1234',
            status: 'order placed',
            paymentStatus: 'Paid',
            moreDetails: 'View Details',
        },
        {
            id: 2,
            link: 'Order #5678',
            status: 'order delivered',
            paymentStatus: 'Paid',
            moreDetails: 'View Details',
        },
        {
            id: 3,
            link: 'Order #9012',
            status: 'finish',
            paymentStatus: 'Not Paid',
            moreDetails: 'View Details',
        },
        {
            id: 4,
            link: 'Order #9042',
            status: 'finish',
            paymentStatus: 'Paid',
            moreDetails: 'View Details',
        },];

    const getStatusConfig = (status) => {
        switch (status) {
            case 'order placed':
                return {
                    circles: [true, false, false],
                    thickCircleIndex: 0,
                    statusNames: ['Sifariş verilib ', 'Sifariş qeydə alınıb ', 'Təhvil verilib'],
                };
            case 'order delivered':
                return {
                    circles: [true, true, false],
                    thickCircleIndex: 2,
                    statusNames: ['Sifariş verilib ', 'Sifariş qeydə alınıb ', 'Təhvil verilib'],
                };
            case 'finish':
                return {
                    circles: [true, true, true],
                    thickCircleIndex: 2,
                    statusNames: ['Sifariş verilib ', 'Sifariş qeydə alınıb ', 'Təhvil verilib'],
                };
            default:
                return {
                    circles: [false, false, false],
                    thickCircleIndex: -1,
                    statusNames: ['', '', ''],
                };
        }
    };

    return (
        <div>
            <div className="mb-3">
                <input type="text" onChange={event => setQuery(event.target.value)} className="form-control" placeholder="Search" />
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Payment Status</th>
                            <th>More Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.filter(order => {
                            if (query === "") {

                                return order;

                            } else if (order.link.toLowerCase().includes(query.toLowerCase())) {
                                return order;
                            }
                            else if (order.paymentStatus.toLowerCase().includes(query.toLowerCase())) {
                                return order;
                            }

                        }).map((order) => (
                            <tr key={order.id}>
                                <td>{order.link}</td>
                                <td>
                                    <div className="progress-indicator">
                                        {getStatusConfig(order.status).circles.map((circle, index) => (
                                            <div
                                                key={index}
                                                className={`progress-circle ${circle ? 'active' : ''
                                                    } ${index === getStatusConfig(order.status).thickCircleIndex ? 'thick' : ''}`}
                                            >
                                                <i style={{ fontSize: "25px", color: 'white' }} class="bi bi-check-lg"></i>

                                                <span className="status-name" style={{ 'color': '#878787' }}>
                                                    {getStatusConfig(order.status).statusNames[index]}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="progress-line" />
                                    </div>
                                </td>
                                <td>{order.paymentStatus}</td>
                                <td>{order.moreDetails}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;