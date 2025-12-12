import ErrorBoundary from "./ErrorBoundary";

export default class RemoteErrorBoundary extends ErrorBoundary {
  constructor(props) {
    super(props);
    this.state = { ...this.state, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo);
    // we can log the error to a remote server
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Something went wrong at RemoteErrorBoundary</p>
          {this.state.errorInfo && (
            <details>
              <summary>Error Details</summary>
              {this.state.errorInfo.componentStack}
            </details>
          )}
          {this.state.error && (
            <details>
              <summary>Error Message</summary>
              {this.state.error.message}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
