const TableRow = (props) => {
  const {
    post: { id, title, body },
  } = props;

  return (
    <tr>
      <td className="table__data table__data-id">{id}</td>
      <td className="table__data">{title}</td>
      <td className="table__data">{body}</td>
    </tr>
  );
};

export default TableRow;
