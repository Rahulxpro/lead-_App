import React, { useState } from "react";

const UpdateLead = ({ leads, updateLead }) => {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleSelect = (e) => {
    const lead = leads.find((lead) => lead.email === e.target.value);
    setSelectedLead(lead);
  };

  const handleChange = (e) => {
    setSelectedLead({ ...selectedLead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLead(selectedLead);
    setSelectedLead(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleSelect}>
        <option value="">Select Lead to Update</option>
        {leads.map((lead) => (
          <option key={lead.email} value={lead.email}>
            {lead.email}
          </option>
        ))}
      </select>

      {selectedLead && (
        <>
          <input
            type="text"
            name="name"
            value={selectedLead.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="number"
            value={selectedLead.number}
            onChange={handleChange}
            required
          />
          <select
            name="product"
            value={selectedLead.product}
            onChange={handleChange}
          >
            <option value="A">Product A</option>
            <option value="B">Product B</option>
            <option value="C">Product C</option>
          </select>
          <button type="submit">Update Lead</button>
        </>
      )}
    </form>
  );
};

export default UpdateLead;
