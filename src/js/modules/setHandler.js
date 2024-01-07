export default function setHandler(options) {
  //   if (!options.element || !options.event || !options.handler) return;

  options.element.addEventListener(options.event, (event) => {
    options.handler(event);
  });
}
