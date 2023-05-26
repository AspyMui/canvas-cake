# Canvas Cake

[![NPM Package][badgen-version]][url-npm]
[![NPM Package][badgen-license]][url-license]
![NPM Package][badgen-types]

> CAKES! Everybody loves cakes! Cakes have layers!
>
> \-Donkey

This is a simple package to help use layers on the canvas.
It simply gives helper classes to add, remove, and move layers around.

## Examples

```JavaScript
// Basic setup
import Cake from "canvas-cake";

const cake = new Cake(canvas);

const l1 = cake.newLayer();
const l1_ctx = l1.getContext();
l1_ctx.fillRect(0, 0, 50, 50);

const l2 = cake.newLayer(10, 10);
const l2_ctx = l2.getContext();
l2_ctx.fillStyle = "#00aaff";
l2_ctx.fillRect(0, 0, 50, 50);

cake.update();
```

![example1](/assets/ex1.png)

```JavaScript
// Move layer z-index
import Cake from "canvas-cake";

const cake = new Cake(canvas);

const l1 = cake.newLayer();
const l1_ctx = l1.getContext();
l1_ctx.fillRect(0, 0, 50, 50);

const l2 = cake.newLayer(10, 10);
const l2_ctx = l2.getContext();
l2_ctx.fillStyle = "#00aaff";
l2_ctx.fillRect(0, 0, 50, 50);

cake.setLayerZIndex(l2, 0);

cake.update();
```

![example1](/assets/ex2.png)

[url-npm]: https://www.npmjs.com/package/canvas-cake
[url-license]: https://github.com/AspyMui/canvas-cake/blob/main/LICENSE.txt
[badgen-version]: https://badgen.net/npm/v/canvas-cake
[badgen-license]: https://badgen.net/npm/license/canvas-cake
[badgen-types]: https://badgen.net/npm/types/tslib
