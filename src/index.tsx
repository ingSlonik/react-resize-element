import * as React from "react";
import { useRef, useEffect } from "react";
import { addResizeEventListener, removeAllResizeEventListeners } from "element-resize-event-listener";

type Size = { width: number, height: number };

type ResizeElementProps = {
    children: Node,
    style: React.CSSProperties,
    onResize: (size: Size) => void,
};

export default function ResizeElement({ children, onResize, style }: ResizeElementProps) {
    const node = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        function resizeHandler(element: HTMLDivElement, size: Size) {
            onResize(size);
        }
        if (node.current) {
            addResizeEventListener(node.current, resizeHandler);
        }
        return () => {
            if (node.current) {
                removeAllResizeEventListeners(node.current);
            }
        };
    }, [ node ]);

    return <div ref={node} style={style}>
        {children}
    </div>;
}
