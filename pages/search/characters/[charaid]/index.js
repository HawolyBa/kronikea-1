import React from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Divider } from "antd";

import { getCharactersFromSearch } from "../../../../redux/actions/charactersActions";

import LoadingScreen from "../../../../components/hoc/LoadingScreen";
import Pagination from "../../../../components/common/Pagination";

const CharacterSearch = (props) => {
  const router = useRouter();
  const { characters, loading } = props;

  React.useEffect(() => {
    if (router.query.charaid) {
      props.getCharactersFromSearch(router.query.charaid);
    }
  }, [router.query.charaid]);
  return (
    <div className="search-page">
      <h2 className="side-heading">
        Search results for: {router.query.charaid}
      </h2>
      <Divider />

      <LoadingScreen loading={loading}>
        <h4>
          {characters.length} result{characters.length > 1 ? "s" : ""}
        </h4>
        <Pagination
          data={characters}
          type="favorites"
          gutter={"16px"}
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            900: 3,
            1200: 4,
          }}
          itemType={"characters"}
        />
      </LoadingScreen>
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.charactersFromSearch,
  loading: state.characters.loading,
});

export default connect(mapStateToProps, { getCharactersFromSearch })(
  CharacterSearch
);
