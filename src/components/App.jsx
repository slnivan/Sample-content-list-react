import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";

import FetchMoreButton from "./FetchMoreButton";

const App = () => {
  const [content, getContent, fetchMore, response] = useLoadContent();

  return (
    <div className="App">
      <Header onSearch={getContent} />
      <h1>Simple content list</h1>
      <ContentList content={content} />
      {/* TODO: Put FetchMoreButton component here */}
      {response.count > content.length ? (
        <FetchMoreButton onClick={fetchMore} />
      ) : null}
    </div>
  );
};

export default App;
