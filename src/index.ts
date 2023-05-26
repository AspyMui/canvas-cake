class Layer {
    private canvas: OffscreenCanvas;
    xOffset: number;
    yOffset: number;
    readonly id = crypto.randomUUID();

    constructor(cake: Cake, xOffset: number, yOffset: number) {
        this.canvas = new OffscreenCanvas(cake.core.width, cake.core.height);
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }

    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.canvas.getContext("2d");
    }
}

class Cake {
    core: HTMLCanvasElement;
    private layers: Layer[] = [];

    constructor(canvas: HTMLCanvasElement) {
        this.core = canvas;
    }

    /**
     * Render the cake
     */
    update() {
        const ctx = this.core.getContext("2d");
        if (!ctx) return;
        ctx.save();
        ctx.clearRect(0, 0, this.core.height, this.core.width);

        for (const layer of this.layers) {
            ctx.drawImage(layer.getCanvas(), layer.xOffset, layer.yOffset);
        }
        ctx.restore();
    }

    /**
     * Offsets are positional offsets of where the layer is drawn on the cake.
     */
    newLayer(xOffset: number = 0, yOffset: number = 0) {
        const layer = new Layer(this, xOffset, yOffset);
        this.layers.push(layer);
        return layer;
    }

    getLayerZIndex(layer: Layer) {
        const index = this.layers.findIndex((l) => l.id === layer.id);
        return index;
    }

    setLayerZIndex(layer: Layer, ZIndex: number) {
        if (ZIndex < 0 || ZIndex >= this.layers.length) {
            throw new Error(
                `ZIndex must be within range of 0 to ${
                    this.layers.length - 1
                } layers.`
            );
        }
        const index = this.getLayerZIndex(layer);
        this.layers.splice(index, 1);
        this.layers.splice(ZIndex, 0, layer);
    }

    /**
     * Will trigger canvas update after layer is removed.
     */
    removeLayer(layer: Layer) {
        const index = this.getLayerZIndex(layer);
        this.layers.splice(index, 1);
        this.update();
    }
}

export default Cake;
