import { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function LinkContainer() {
  const [links, setLinks] = useState([]);

  // Add a new link
  const addLink = (link) => {
    setLinks([...links, link]);
  };

  // Delete a link by index
  const deleteLink = (indexToRemove) => {
    setLinks(links.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>Fave Links</h1>
      <p>Add your favorite websites below</p>

      <Form onAddLink={addLink} />
      <Table links={links} onDelete={deleteLink} />
    </div>
  );
}

export default LinkContainer;
