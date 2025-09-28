!function(){
    ch`
    0> container:${document.querySelector(".text-container-1")}
    -> self:${ch.iframe}
    satr src ${"https://ibrahimtanyalcin.github.io/sijill/pipeline-artifacts/i-pv/NFKB.html"}
    style ${[["width", "100%"]]}
    on load ${({values:v}) => (e) => {
        const frameDoc = v.self.contentWindow.document;
        let prev, scrollThumb = 30;
        ch.until(() => {
            const h =  Math.max(
                +frameDoc.documentElement.scrollHeight,
                +frameDoc.body.scrollHeight
            );
            if (prev === h){
                v.self.style.height = `${h + scrollThumb}px`;
                return true;
            }
            prev = h;
            return false;
        }, {interval: 750})
    }} +-< ${({values:v}) => v.container}
    `
}()