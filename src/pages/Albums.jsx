import React from 'react';

export default function Albums(props) {
  return (
    <>
      <h2>Albums</h2>
      {props.match.params.category ? <h3>{props.match.params.category}</h3> : null}
    </>
  );
}