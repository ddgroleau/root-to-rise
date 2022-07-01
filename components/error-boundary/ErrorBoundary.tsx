import { Component } from "react";

export default class ErrorBoundary extends Component<{}, { hasError: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }
    componentDidCatch(error:any, errorInfo:any) {
        console.log({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, something went worng.</h2>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Reload
                    </button>
                </div>
            );
        }
  
        return this.props.children;
    }
}