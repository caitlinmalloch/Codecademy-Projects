import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectVisibleIDs,
  flipCard,
  selectMatchedIDs,
  resetCards,
} from "../../boardSlice";

let cardLogo =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();

  // flip card action
  const flipHandler = (id) => {
    dispatch(flipCard(id));
  };

  const tryAgainHandler = () => {
    dispatch(resetCards());
  };

  let cardStyle = "resting";
  let click = () => flipHandler(id);

  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = "matched";
  }

  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = tryAgainHandler;
  }

  // no match
  if (visibleIDs.length >= 2 && !matchedIDs.includes(id)) {
    cardStyle = "no-match";
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
