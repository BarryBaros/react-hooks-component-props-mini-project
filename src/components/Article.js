import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let emoji = "";
    let count = 0;
    if (minutes < 30) {
        emoji = " ☕️ ";
        count = Math.ceil(minutes / 5);
    } else {
        emoji = "🍱";
        count = Math.ceil(minutes / 10);
    }

    const emojiString = emoji.repeat(count);

    return (
      <article>
        <h3>{title}</h3>
        <small>
          {" "}
          {date} • {emojiString} {minutes} min read
        </small>
        <p> {preview} </p>
      </article>
    );
}

export default Article;