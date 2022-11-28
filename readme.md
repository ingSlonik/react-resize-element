# React Resize Element

It detects the size change of an element not only when windows resize but with really all changes in the size of the element.

Low performance resize event listener as React element based on [Element Resize Event Listener](https://www.npmjs.com/package/react-element-resize).

Include types for TypeScript and Flow.

## Props

- **tag** *string* default "div"
- **style** *React.CSSProperties*
- **notSendInitialSize** *boolean* default false
- **onResize** *(size: Size) => void*
- **children** *React.ReactNode*

## Example

```js
import ResizeElement from "react-resize-element";

...
render() {
    return <ResizeElement onResize={({ width, height }) => handleResize(width, height)} >
        ...
    </ResizeElement>;
}
...
```
