import { createElement, useRef, useEffect, ReactNode, CSSProperties, useState, useCallback } from "react";
import { addResizeEventListener, removeAllResizeEventListeners } from "element-resize-event-listener";

type Size = { width: number, height: number };

type ResizeElementProps = {
    tag?: string,
    notSendInitialSize?: boolean,
    style: CSSProperties,
    onResize: (size: Size) => void,
    children: ReactNode,
};

export default function ResizeElement({ tag = "div", notSendInitialSize = false, onResize, style, children }: ResizeElementProps) {
    const [element, setElement] = useState<null | HTMLDivElement>(null);

    const ref = useCallback((element: null | HTMLDivElement) => {
        if (element) setElement(element);
    }, []);

    useEffect(() => {
        function resizeHandler(element: HTMLDivElement, size: Size) {
            onResize(size);
        }
        if (element) {
            addResizeEventListener(element, resizeHandler, !notSendInitialSize);
            return () => removeAllResizeEventListeners(element);
        }
    }, [element]);


    return createElement(tag, { ref, style }, children);
}
