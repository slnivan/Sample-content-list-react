import classes from "./contentitem.module.css";
const ContentItem = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.src} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.status}</p>
    </li>
  );
};

export default ContentItem;
