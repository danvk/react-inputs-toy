# react-inputs-toy
A toy demonstration of uncontrolled inputs in React.js.

This creates two synchronized inputs:

1. The slider is [controlled][]. Dragging it results in immediate updates.
2. The text box is uncontrolled. This allows typing in the text box without
   updating the UI until desired.

![][gif]

Check out [app.js][] to see how it works.

To play with this on your own machine, run:

```bash
git clone https://github.com/danvk/react-inputs-toy.git
cd react-inputs-toy
npm install
bower install
gulp watch
```

and then visit `http://localhost:9000/`.

[gif]: animation.gif
[controlled]: http://facebook.github.io/react/docs/forms.html#controlled-components
[app.js]: app/scripts/app.js
