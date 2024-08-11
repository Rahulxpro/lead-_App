import React from "react";

const DeleteLead = ({ leads, deleteLead }) => {
  const handleDelete = (email) => {
    deleteLead(email);
  };

  return (
    <div>
      <h3>Delete Lead</h3>
      <ul>
        {leads.map((lead) => (
          <li key={lead.email}>
            {lead.email} - {lead.name}
            <button onClick={() => handleDelete(lead.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteLead;
