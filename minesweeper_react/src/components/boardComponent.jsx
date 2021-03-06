import React, { Component } from "react";
import Block from "./blockComponent";
import "./boarComponent.css";

class Board extends Component {
  render() {
    const { matrix, onDig, onFlag, shake } = this.props;
    return (
      <div className={"board " + (shake ? "shake" : "")}>
        {matrix.map((row, i) => {
          return (
            <div key={i} className="row">
              {row.map((block, j) => {
                return (
                  <Block
                    key={j}
                    value={block.value}
                    isMarked={block.isMarked}
                    clicked={block.clicked}
                    onDig={onDig}
                    onFlag={onFlag}
                    iIndex={i}
                    jIndex={j}
                  ></Block>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
