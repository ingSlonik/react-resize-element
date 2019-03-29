# React Resize Element

Low performance resize event listener as React element based on [Element Resize Event Listener](https://www.npmjs.com/package/react-element-resize).

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
