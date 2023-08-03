import React from "react";

const DisableBodyScroll = () => {
  function componentDidMount() {
    document.body.classList.add("overflow-y-hidden");
  }

  function componentWillUnmount() {
    document.body.classList.remove("overflow-y-hidden");
  }

  componentDidMount();
  componentWillUnmount();
  return false;
};

export default DisableBodyScroll;

// class DisableBodyScroll extends Component {
//   componentDidMount() {
//     document.body.classList.add("overflow-y-hidden");
//   }

//   componentWillUnmount() {
//     document.body.classList.remove("overflow-y-hidden");
//   }

//   render() {
//     return false;
//   }
// }

// export default DisableBodyScroll;
