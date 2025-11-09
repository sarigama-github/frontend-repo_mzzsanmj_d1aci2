import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optional: log to an error reporting service
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    const { hasError } = this.state;
    const { fallback = null, children } = this.props;
    if (hasError) return fallback;
    return children;
  }
}
