import React from "react";

const Item = props => {
  return (
    <li>
      <dl>
        <dt>
          <img src={props.thumbnail} alt={props.thumbnail} />
        </dt>
        <dd>
          <h3>{props.title}</h3>
          <p>{props.blogname}</p>
          <article>{props.contents}</article>
          <a href={props.url}>링크 바로가기</a>
        </dd>
      </dl>
    </li>
  );
};

export default Item;