import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong with the 3D model or Canvas component.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error ? this.state.error.toString() : 'Error details unavailable'}
            <br />
            {this.state.errorInfo ? this.state.errorInfo.componentStack : 'Component stack not available'}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
