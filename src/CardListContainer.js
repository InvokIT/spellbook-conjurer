import { connect } from 'react-redux';
import PropTypes from "prop-types";
import CardList from "./CardList";
import { createSpell } from "./actions/spells";

const mapStateToProps = (state, ownProps) => {
  const sorting = state.sorting;
  const spells = state.spells;

  return sorting.map(spellId => spells[spellId]);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateSpellClicked: (e) => dispatch(createSpell())
  };
};

const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

CardListContainer.propTypes = {

};

export default CardListContainer;