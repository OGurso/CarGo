import React from "react";

import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import AuthUserContext from "./context";
import Landing from "../Landing";

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        (authUser) => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.LANDING);
          }
        },
        () => this.props.history.push(ROUTES.LANDING)
      );
    }
    componentWillUnmount() {
      this.listener();
    }
    render() {
      return (
        <AuthUserContext.Consumer>
          {(authUser) =>
            condition(authUser) ? <Component {...this.props} /> : <Landing />
          }
        </AuthUserContext.Consumer>
      );
    }
  }
  return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;

// import React, { useContext, useEffect } from 'react';

// import { withRouter } from 'react-router-dom';
// import { withFirebase } from '../Firebase';
// import * as ROUTES from '../../constants/routes';
// import AuthUserContext from './context';
// import { LANDING } from "./../../constants/routes";

// const withAuthorization = condition => Component => {

//     const WithAuthorization = (props) => {
//         //const authUser = useContext(AuthUserContext);

//         useEffect(() => {
//             const listener = props.firebase.onAuthUserListener(
//                 authUser => {
//                     if (!condition(authUser)) {
//                         this.props.history.push(ROUTES.SIGN_IN);
//                     }
//                 },
//                 () => this.props.history.push(ROUTES.SIGN_IN),
//             );
//             return () => {
//                 listener()
//             };
//         }, []);
//         return (
//             <AuthUserContext.Consumer>
//                 {authUser =>
//                     condition(authUser) ? <Component {...props} /> : null
//                 }
//             </AuthUserContext.Consumer >);
//     }
//     return withRouter(withFirebase(WithAuthorization))
//     /*
//     class WithAuthorization extends React.Component {
//         componentDidMount() {
//             this.listener = this.props.firebase.onAuthUserListener(
//                 authUser => {
//                     if (!condition(authUser)) {
//                         this.props.history.push(ROUTES.SIGN_IN);
//                     }
//                 },
//                 () => this.props.history.push(ROUTES.SIGN_IN),
//             );

//         }
//         componentWillUnmount() {
//             this.listener();
//         }
//         render() {
//             return (
//                 <AuthUserContext.Consumer>
//                     {authUser =>
//                         condition(authUser) ? <Component {...this.props} /> : null
//                     }
//                 </AuthUserContext.Consumer >);
//         }
//     }

//     return withRouter(withFirebase(WithAuthorization));
// };
// */
// }
// export default withAuthorization;
