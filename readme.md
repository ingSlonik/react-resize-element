# React Resize Element

Low performance resize event listener as React element based on [https://www.npmjs.com/package/react-element-resize](Element Resize Event Listener).

## API

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
