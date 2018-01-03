import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm(`Are you sure you don't want to see ${props.artist}?`)
  }

  let submit = event => {
    console.log("Form Submitted");
    event.preventDefault();
  }

  return(
    <div>
      <div className="boxed">
        <i className = "fa fa-times" areia-hidden="true" onClick={handleExit}/>
      </div>
      <div id="element_to_pop_up">
      <h3>You won tickets to see {props.artist}!!!</h3>
      </div>
        <p>Please enter your email so we can send you the tickets</p>
        <form>
          <label htmlFor="email">Name:</label>
          <input id="field" type="text" name="email" placeholder="Your email here:"/>
          <input id="submission" type="submit" value="CLAIM YOUR PRIZE HERE"/>
        </form>
    </div>
  );
};

export default Popup;
