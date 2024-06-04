import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// class ShowLocation extends React.Component {
//   render() {
//     console.log(this.props.location);
//     console.log(this.props.history);
//     console.log(this.props.match);
//     const redirectToContact = () => {
//       this.props.history.push("/contact");
//     };
//     return (
//       <>
//         <h1 style={{ textAlign: "center" }}>WithRouter</h1>
//         <button onClick={redirectToContact}>Contact</button>
//       </>
//     );
//   }
// }
const ShowLocation = (props) => {
  const redirectToContact = () => {
    props.history.push("/contact");
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>WithRouter</h1>
      <button onClick={redirectToContact}>Contact</button>
    </>
  );
};
const ShowLocationWithRouter = withRouter(ShowLocation);
export default ShowLocationWithRouter;
