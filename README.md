# js-font-checker

A javascript module that permit to **check browser-side** if a given font-family is supported by the client OS

## Installation

### npm

`js-font-checker` is available as a **node module to use for example with `browserify`**

    npm install font-checker

### bower

`js-font-checker` is also bundled as a bower package

    bower install font-checker

## Usage

Include the bower package in your html page. It relies on jQuery so include that before.

```html
<!-- Load the libraries -->
<script src="bower-components/jquery/jquery.min.js"></script>
<script src="bower-components/font-checker/font-checker.min.js"></script>

<!-- Setup font-checker when the DOM is ready -->
<script>
  $(document).ready(function () {
    fontChecker.setup();
  });
</script>

```

Then to test a given font-family, saying the MS Office default font since 2007, `Calibri`:

```js
fontChecker.isInstalled('calibri'); // returns true or false
```

## License

Copyright © 2015 Rémi BECHERAS - https://github.com/rbecheras

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Credits

Thanks to Remy Sharp https://remysharp.com for providing the solution used in this module;
