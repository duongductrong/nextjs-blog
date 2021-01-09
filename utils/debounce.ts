export default function debounce(fn: Function, ms: number) {
  let timer: any;

  return function () {
    if (timer) clearTimeout(timer);
    const args = arguments;

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}
