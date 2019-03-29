// @flow
import React, { Component, type Node } from "react";

import { addResizeEventListener, removeAllResizeEventListeners } from "element-resize-event-listener";

type Size = { width: number, height: number };

type ResizeElementProps = {
    children: Node,
    onResize: (size: Size) => void,
};

export default class ResizeElement extends Component<ResizeElementProps, {}> {

    constructor() {
        super();

        this._node = null;
        this.resizeHandler = this.resizeHandler.bind(this);
    }

    _node: null | HTMLElement;

    resizeHandler(element: HTMLElement, size: Size) {
        const { onResize } = this.props;
        onResize(size);
    }

    componentWillUnmount() {
        if (this._node) {
            removeAllResizeEventListeners(this._node);
        }
    }

    render() {
        const { children } = this.props;

        return <div ref={node => node && addResizeEventListener(node, this.resizeHandler)}>
            {children}
        </div>;
    }
}
