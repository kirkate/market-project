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
      <If condition={slides}>
        <div class="banner__slides slides">
          <For each="slide" of={slides} index="slideIndex">
            <figure
              class={classnames('slides__item', {
                active: slideIndex === activeSlideIndex,
              })}
            >
              <img
                class="slides__img"
                src={slide.src}
                srcSet={slide.srcset}
                sizes={slide.sizes}
                alt={slide.alt}
              />
            </figure>
          </For>
        </div>
        <div class="banner__dots dots">
          <For of={slides} index="slideIndex">
            <div
              class={classnames('dots-item', {
                active: slideIndex === activeSlideIndex,
              })}
            />
          </For>
        </div>
      </If>
    </section>
  );
};
