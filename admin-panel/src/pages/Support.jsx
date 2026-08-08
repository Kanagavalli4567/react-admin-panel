import { useState } from "react";

function Support() {
  const [tickets, setTickets] = useState([
    {
      id: 101,
      subject: "Payment issue",
      user: "Rahul",
      status: "Open",
      priority: "High",
    },
    {
      id: 102,
      subject: "Order not received",
      user: "Priya",
      status: "Pending",
      priority: "Medium",
    },
    {
      id: 103,
      subject: "Account problem",
      user: "Arun",
      status: "Resolved",
      priority: "Low",
    },
  ]);

  const updateStatus = (id, status) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id
          ? { ...ticket, status }
          : ticket
      )
    );
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Support</h1>
          <p>Manage customer support tickets.</p>
        </div>
      </div>

      <div className="content-card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ticket</th>
                <th>User</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <strong>
                      #{ticket.id}
                    </strong>
                    <p>{ticket.subject}</p>
                  </td>

                  <td>{ticket.user}</td>

                  <td>
                    <span className="priority">
                      {ticket.priority}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status ${ticket.status.toLowerCase()}`}
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td>
                    <select
                      value={ticket.status}
                      onChange={(e) =>
                        updateStatus(
                          ticket.id,
                          e.target.value
                        )
                      }
                    >
                      <option>Open</option>
                      <option>Pending</option>
                      <option>Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Support;