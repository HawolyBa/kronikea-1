import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Row, Col, Image, Divider, Space } from "antd";

import { dummy } from "../../../utils/dummy";
import {
  getCharacter,
  getUserCharacters,
} from "../../../redux/actions/charactersActions";
import Comments from "../../../components/chapter/Comments";
import CharacterCard from "../../../components/common/CharacterCard";
import LoadingScreen from "../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../components/hoc/RedirectComp";
import { useAuth } from "../../../hooks/userHooks";
import WithLink from "../../../components/hoc/withLink";

const Character = (props) => {
  const { character, loading, charaExists, userCharacters } = props;
  const router = useRouter();
  const auth = useAuth();

  const [relatives, setRelatives] = React.useState([]);

  React.useEffect(() => {
    props.getCharacter(router.query.id);
  }, [router.query.id]);

  React.useEffect(() => {
    if (character.authorId && character.public) {
      props.getUserCharacters(character.authorId);
    }
  }, [character]);

  React.useEffect(() => {
    if (userCharacters.length > 0 && character.relatives.length > 0) {
      setRelatives(
        character.relatives
          .map((c) => ({
            firstname: userCharacters.find((char) => char.id === c.character_id)
              .firstname,
            lastname: userCharacters.find((char) => char.id === c.character_id)
              .lastname,
            image: userCharacters.find((char) => char.id === c.character_id)
              .image,
            id: userCharacters.find((char) => char.id === c.character_id).id,
            relation: c.relation,
            public: userCharacters.find((char) => char.id === c.character_id)
              .public,
          }))
          .filter((c) => (auth.user.uid !== character.authorId ? c.public : c))
      );
    }
  }, [userCharacters]);

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type="404" condition={charaExists}>
        <RedirectComp
          type="403"
          condition={character.public || character.authorId === auth.user.uid}
        >
          <div className="main-character">
            <section className="character-page">
              <div className="character-meta">
                <Link href="/profile/1">
                  <a>
                    <Space align="center">
                      <div className="avatar">
                        <img src={dummy.person} alt={character.authorName} />
                      </div>
                      <h5>{character.authorName}</h5>
                    </Space>
                  </a>
                </Link>
                <div className="like-btn">
                  <Space size={5} align="center">
                    <ion-icon name="heart"></ion-icon>
                    <span>Like</span>
                  </Space>
                </div>
              </div>
              <h2>{`${character.firstname} ${
                character.lastname && character.lastname
              }`}</h2>
              <div className="character-image">
                <div className="img-container">
                  <Image
                    src={character.image}
                    width={"100%"}
                    height={600}
                    alt="character"
                  />
                </div>
              </div>
              <div className="character-description">
                <h3 className="desc-title">Biography</h3>
                <p>{character.description}</p>
              </div>
              <Divider />
              <div className="character-relationships">
                <h3 className="desc-title">Relationships</h3>
                <Row gutter={[16, 16]}>
                  {relatives?.map((r) => (
                    <Col md={8} lg={6} key={r.id}>
                      <WithLink link={`/character/${r.id}`}>
                        <CharacterCard type="show" character={r} />
                      </WithLink>
                    </Col>
                  ))}
                </Row>
              </div>
            </section>
            <section className="character-feedback">
              <h3 className="side-heading">Feedback</h3>
              <Comments />
            </section>
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  character: state.characters.character,
  loading: state.characters.loading,
  charaExists: state.characters.charaExists,
  userCharacters: state.characters.userCharacters,
});

export default connect(mapStateToProps, {
  getCharacter,
  getUserCharacters,
})(Character);
