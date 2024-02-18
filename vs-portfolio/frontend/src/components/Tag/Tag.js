import "./Tag.scss";
const Tag = ({ tags }) => {
  return (
    <div className="Tag">
      <ul>
        {tags.map((tag, index) => (
          <li key={index} className="TagItem">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
