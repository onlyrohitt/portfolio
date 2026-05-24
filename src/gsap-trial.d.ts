declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | Element | Element[] | (string | Element)[], vars?: object);
    revert(): void;
    split(vars?: object): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    static create(vars?: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
  }
}
