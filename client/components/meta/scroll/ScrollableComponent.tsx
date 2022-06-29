import React from "react";

export default class ScrollableComponent extends React.Component<any, any> {
    private readonly elementItems

    constructor(props: any) {
        super(props);

        this.elementItems = React.createRef()
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevState: Readonly<any>, snapshot?: any) {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const contentElement = this.elementItems.current as HTMLDivElement;
        console.log('messages content height: ' + contentElement.scrollHeight)
        contentElement.scrollBy(0, contentElement.scrollHeight)
    }

    render() {
        const className = this.props.className ?? ""
        const elements = this.props.elements;

        return <div ref={this.elementItems} className={className}>
            {elements ?? null}
        </div>
    }
}