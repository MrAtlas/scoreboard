import React, { memo, useState } from "react";

import Counter from "./Counter";
import Icon from "./Icon";

const Player = ({ removePlayer, id, name, score, changeScore, isHighScore }) => {

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                <Icon isHighScore={isHighScore} />
                {name}
            </span>

            <Counter
                score={score}
                changeScore={changeScore}
                id={id}
            />
        </div>
    );
}

export default memo(Player);