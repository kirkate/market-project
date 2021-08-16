import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import classnames from 'classnames';
export const Banner = ({ slides, slideTime }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveSlideIndex((activeSlide) => {
                const nextSlideIndex = activeSlide + 1;
                return slides.length === nextSlideIndex ? 0 : nextSlideIndex;
            });
        }, slideTime);
        return () => clearInterval(intervalId);
    }, [slides]);
    return (h("section", { class: "banner" },
        h(If, { condition: slides },
            h("div", null,
                h("div", { class: "slides" },
                    h(For, { each: "slide", of: slides, index: "slideIndex" },
                        h("figure", { class: classnames('slide', {
                                active: slideIndex === activeSlideIndex,
                            }) },
                            h("img", { src: slide.src, srcSet: slide.srcset, sizes: slide.sizes, alt: slide.alt })))),
                h("div", { class: "banner-dots" },
                    h(For, { of: slides, index: "slideIndex" },
                        h("div", { class: classnames('banner-dot', {
                                active: slideIndex === activeSlideIndex,
                            }) })))))));
};
