import { Component, type ReactNode, type ErrorInfo } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught runtime error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-parchment flex items-center justify-center p-6">
          <div className="max-w-xl w-full bg-secondary border border-border p-8 sm:p-12 text-center space-y-6 shadow-sm">
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-gold block">
              Rev. Fr. Dr. Joseph Raj Publications
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-navy font-normal">
              An Unexpected Error Occurred
            </h1>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              We apologize for the inconvenience. A temporary rendering error occurred while loading this page.
            </p>
            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center justify-center font-sans text-xs font-medium tracking-wider uppercase bg-navy text-ivory px-6 py-3 border border-navy hover:bg-navy-deep transition-colors"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
