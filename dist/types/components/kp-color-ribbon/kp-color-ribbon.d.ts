export declare class KpColorRibbon {
    color: {
        "name": string;
        "weight": string;
        "hex": string;
        "rgb": {
            "r": number;
            "g": number;
            "b": number;
        };
        "distance": number;
        "luminance": number;
        "requestedHex": string;
    };
    isCard: boolean;
    private _colorRGB;
    componentDidLoad(): void;
    render(): any;
}
