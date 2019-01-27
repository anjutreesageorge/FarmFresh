export enum Categories {
VEG = 'Vegetables' ,
}

export namespace Categories {

  export function values() {
    return Object.keys(Categories).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
