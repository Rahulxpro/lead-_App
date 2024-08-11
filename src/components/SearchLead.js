import React, { useState } from "react";

const SearchLead = ({ leads }) => {
  const [query, setQuery] = useState("");

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(query.toLowerCase()) ||
      lead.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Search Leads</h3>
      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredLeads.map((lead) => (
          <li key={lead.email}>
            {lead.name} - {lead.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchLead;
