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

  return (
    <section class="banner">
      {slides && (
      <div>
        <div class="slides">
          {/* <For each="slide" of={slides} index="slideIndex">
            <figure
              class={classnames('slide', {
                active: slideIndex === activeSlideIndex,
              })}
            >
              <img src={slide.src} srcSet={slide.srcset} sizes={slide.sizes} alt="" />
            </figure> */}

          {/* </For>
           */}
          <For each="slide" of={slides} index="slideIndex">
            <picture
              class={classnames('slide', {
                active: slideIndex === activeSlideIndex,
              })}
            >
              <img src={slide.src} srcSet={slide.srcset} sizes={slide.sizes} alt="" />
              <source srcSet={slide.source} media="(max-width: 600px)" type={slide.type} />
            </picture>
          </For>

        </div>

        <div class="banner-dots">
          <For of={slides} index="slideIndex">
            <div
              class={classnames('banner-dot', {
                active: slideIndex === activeSlideIndex,
              })}
            />
          </For>
        </div>
      </div>
      )}
    </section>
  );
};
