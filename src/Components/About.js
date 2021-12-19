import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.heading}</h1>
      <h1 className="my-3"> About Us</h1>
      <p>In computing, the term textutils refers to the theory and practice of automating the creation or manipulation of electronic text. Text usually refers to all the alphanumeric characters specified on the keyboard of the person engaging the practice, but in general text means the abstraction layer immediately above the standard character encoding of the target text. The term processing refers to automated (or mechanized) processing, as opposed to the same manipulation done manually.</p>
      <br></br>
      <h4>Features we caring :</h4>
      <p>
      <strong> • Data changecase:</strong>  TextUtils can help you to change your text or numbers into uppercase and lowercase. Data can be change from the preloaded dictionary, random characters, or random numbers.
      </p>
      <p>
      <strong> • Shuffling Data :</strong>  You can also shuffle or randomize the order of the lines or randomize the characters in each line
      </p>
      <p>
      <strong> • Clean Up Data :</strong> Cleaning up your data is also a breeze. Duplicate data removal per line, removing any unseen whitespace, removing empty lines or just trimming each line of excess space.
      </p>
      <p>
      <strong> • Copy Data :</strong> Copy your data is also a breeze. Duplicate data  per line, , copy lines or just trimming each line of excess space.
      </p>

     
    </div>
  );
}
