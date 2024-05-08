export type SliceActions<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never;
}[keyof T];

// export type SliceActions<T> = {
//   [K in keyof T]: {type: K; payload: T[K] extends (...args: infer P) => void ? P[0] : never};
// }[keyof T];
