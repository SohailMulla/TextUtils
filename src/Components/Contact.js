import React from "react";

export default function Contact(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.heading}</h1>
      <h1 className="my-3"> Contact Us !!</h1>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Entre Your Name."
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            color: props.mode === "dark" ? "white" : "#343a40",
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Entre Your Email."
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            color: props.mode === "dark" ? "white" : "#343a40",
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Your Phone Number.
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Entre Your Number"
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            color: props.mode === "dark" ? "white" : "#343a40",
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Describe what you want to contact us for here
        </label>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            color: props.mode === "dark" ? "white" : "#343a40",
          }}
          id="myBox"
          rows="5"
        ></textarea>
      </div>

      <input  className="btn btn-primary" type="submit" value="Submit" ></input>
    </div>
  );
}
