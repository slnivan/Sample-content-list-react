import ContentItem from "./ContentItem";
import classes from "./index.module.css";

const ContentList = ({ content }) => {
  
  return (
    <ul className={classes.list}>
      {/* TODO: Display content */}
      {content.map((item) => {
        return (
          <ContentItem
            key={Math.random()}
            src={item.image}
            name={item.name}
            status={item.status}
          />
        );
      })}
    </ul>
  );
};

export default ContentList;
