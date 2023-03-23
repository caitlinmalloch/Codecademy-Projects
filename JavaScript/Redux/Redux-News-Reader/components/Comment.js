import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCommentsForArticleId,
  selectComments,
  isLoadingComments,
} from "../comments/commentsSlice.js";
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice.js";

export default function Comment({ comment }) {
  const { id, text } = comment;
  return (
    <li key={id} className="comment-container">
      <span>{text}</span>
    </li>
  );
}
