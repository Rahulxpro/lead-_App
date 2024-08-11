import React, { useState } from "react";

const SortLeads = ({ leads }) => {
  const [sortKey, setSortKey] = useState("name");

  const sortedLeads = leads.sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return -1;
    if (a[sortKey] > b[sortKey]) return 1;
    return 0;
  });

  return (
    <div>
      <h3>Sort Leads</h3>
      <select onChange={(e) => setSortKey(e.target.value)}>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="product">Product</option>
      </select>
      <ul>
        {sortedLeads.map((lead) => (
          <li key={lead.email}>
            {lead.name} - {lead.email} - {lead.product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortLeads;
