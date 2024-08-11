import React, { useState } from "react";
import CreateLead from "./components/CreateLead";
import UpdateLead from "./components/UpdateLead";
import DeleteLead from "./components/DeleteLead";
import SearchLead from "./components/SearchLead";
import SortLeads from "./components/SortLead";
import "./App.css";

const App = () => {
  const [leads, setLeads] = useState([]);

  const addLead = (lead) => {
    setLeads([...leads, lead]);
  };

  const updateLead = (updatedLead) => {
    setLeads(
      leads.map((lead) =>
        lead.email === updatedLead.email ? updatedLead : lead
      )
    );
  };

  const deleteLead = (email) => {
    setLeads(leads.filter((lead) => lead.email !== email));
  };

  return (
    <div className="container">
      <h1>Lead Management Application</h1>
      <CreateLead addLead={addLead} />
      <UpdateLead leads={leads} updateLead={updateLead} />
      <DeleteLead leads={leads} deleteLead={deleteLead} />
      <SearchLead leads={leads} />
      <SortLeads leads={leads} />
    </div>
  );
};

export default App;
