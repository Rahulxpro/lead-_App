import React, { useState } from "react";

const CreateLead = ({ addLead }) => {
  const [lead, setLead] = useState({
    email: "",
    name: "",
    number: "",
    product: "A",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead(lead);
    setLead({ email: "", name: "", number: "", product: "A" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email ID"
        value={lead.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={lead.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="number"
        placeholder="Phone Number"
        value={lead.number}
        onChange={handleChange}
        required
      />
      <select name="product" value={lead.product} onChange={handleChange}>
        <option value="A">Product A</option>
        <option value="B">Product B</option>
        <option value="C">Product C</option>
      </select>
      <button type="submit">Create Lead</button>
    </form>
  );
};

export default CreateLead;
