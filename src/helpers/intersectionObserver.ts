function intersection(element:HTMLElement, cb:Function):void{
    const callback = (entries:Array<any>) => cb(entries)
    let intersectionObserver = new IntersectionObserver(callback, {
        root: null,
        threshold: .1,
        rootMargin: '0px'
    })
    intersectionObserver.observe(element)
}

export { intersection }