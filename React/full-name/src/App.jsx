import { useState } from "react";
export default function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  function handleFirst(e) {
    setFormData((prev) => ({ ...prev, firstName: e.target.value }));
  }

  function handleLast(e) {
    setFormData((prev) => ({ ...prev, lastName: e.target.value }));
  }

  return (
    <>
      <form action="#">
        <input onChange={handleFirst} type="text" placeholder="First Name" />
        <input onChange={handleLast} type="text" placeholder="Last Name" />
        <p>
          Full Name: {formData.firstName} {formData.lastName}
        </p>
      </form>
    </>
  );
}
