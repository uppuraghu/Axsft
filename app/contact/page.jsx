
"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({});

  async function submit(e) {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form)
    });
    alert("Enquiry sent!");
  }

  return (
    <form onSubmit={submit} style={{ padding: 40 }}>
      <h2>Contact AXSFT</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} /><br/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} /><br/>
      <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})} /><br/>
      <textarea placeholder="Message" onChange={e=>setForm({...form,message:e.target.value})} /><br/>
      <button type="submit">Submit</button>
    </form>
  );
}
