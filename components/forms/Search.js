import { Input, Select } from "antd";
import React from "react";

const Search = ({ router }) => {
  const [type, setType] = React.useState("stories");
  const [loading, setLoading] = React.useState(false);

  const submitSearch = (search) => {
    setLoading(true);
    router.push(`/search/${type}/${search}`);
  };

  React.useEffect(() => {
    setLoading(false);
  }, [router.query]);

  return (
    <div className="search">
      <Input.Search loading={loading} enterButton onSearch={submitSearch} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="stories">Stories</option>
        <option value="characters">Characters</option>
        <option value="users">Users</option>
      </select>
    </div>
  );
};

export default Search;
