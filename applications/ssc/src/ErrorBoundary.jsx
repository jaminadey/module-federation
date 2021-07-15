import React from "react";
 
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
 
  componentDidCatch(error, errorInfo) {
 
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
 
    // You can also log the error to an error reporting service
    this.logErrorToMyService(error, errorInfo);
  }
 
  logErrorToMyService(error, errorInfo) {
      console.log(error, errorInfo)
  }
 
  render() {
 
    if (!this.state.errorInfo) {
      // Normally, just render children
      return this.props.children;
    }
 
    // Error path
    const result = (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
    );
 
    return result;
  }
}