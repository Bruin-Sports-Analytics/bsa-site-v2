"use client";

import { Component, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          style={{
            padding: "56px 24px",
            textAlign: "center",
            color: "var(--text-secondary)",
            background: "var(--card-fill)",
            border: "1px solid var(--glass-border)",
            margin: "32px auto",
            maxWidth: "680px",
            boxShadow: "var(--glass-shadow-sm)",
            backdropFilter: "blur(var(--glass-regular-blur))",
            WebkitBackdropFilter: "blur(var(--glass-regular-blur))"
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              margin: "0 auto 16px",
              display: "grid",
              placeItems: "center",
              background: "var(--tag-fill)",
              border: "1px solid var(--glass-border)",
              color: "var(--ucla-gold)"
            }}
          >
            <AlertCircle size={24} aria-hidden />
          </div>
          <h3
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-sora), system-ui, sans-serif",
              fontSize: "1.35rem",
              margin: "0 0 12px"
            }}
          >
            Section temporarily unavailable
          </h3>
          <p style={{ margin: "0 auto 24px", maxWidth: "440px", fontSize: "14px", lineHeight: 1.6 }}>
            We encountered an unexpected error rendering this component. You can try reloading it.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleReset}
            >
              <RefreshCw size={15} aria-hidden />
              Try Again
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
