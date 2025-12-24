function Table({ links, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => (
          <tr key={index}>
            <td>{link.name}</td>
            <td>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
            </td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
