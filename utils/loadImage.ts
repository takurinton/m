// export const loadImage = (json: { alt: string; path: string }[]) => {
export const loadImage = () => {
  if (process.browser) {
    const scroll = 0.9;
        const _options = {
            root: document,
            rootMargin: '-100% 0px 1000% 0px',
            threshold: 1 - scroll,
        }

        const func = (target: IntersectionObserverEntry) => {
            if (!target.isIntersecting) {
                console.log('80% here')
            } else {
                console.log('out of viewport')
            }
        }

        const onChange = (
          el: Element, 
          options: typeof _options, 
          func: (target: IntersectionObserverEntry) => void
        ) => {
            const observer = new IntersectionObserver(targets => {
                targets.forEach(target => {
                    func(target);
                });
            }, options);
            observer.observe(el)
        }

        onChange(document.body, _options, func);
  }
}