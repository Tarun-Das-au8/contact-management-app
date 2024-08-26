declare module "leaflet" {
  export class Icon {
    mergeOptions(arg0: {
      iconRetinaUrl: string;
      iconUrl: string;
      shadowUrl: string;
    }) {
      throw new Error("Method not implemented.");
    }
    static Default: Icon;
    prototype: any;
    constructor(options?: any);
  }
}
