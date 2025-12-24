import { useState } from "react";

function Form({ onAddLink }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !url) return;

    onAddLink({ name, url });
    setName("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Website name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button>Add Link</button>
    </form>
  );
}

export default Form;
