import "./Tag.scss";
const Tag = ({ tags }) => {
  //  // Divise la chaîne de caractères de tags en un tableau de tags distincts
  //  const tagsArray = tags[0].split(" ");
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
