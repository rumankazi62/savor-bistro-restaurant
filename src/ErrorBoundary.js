// // ErrorBoundary.js
// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   componentDidCatch(error, info) {
//     this.setState({ hasError: true });
//     // You can log the error to a service or perform other actions here
//   }

//   render() {
//     if (this.state.hasError) {
//       // Render a custom error message or component here
//       return <div>Something went wrong.</div>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
