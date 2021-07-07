import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import classnames from 'classnames';

export const Banner = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideTime = 5000;

  const slides = [
    {
      src: './images/watch_1.png',
    },
    {
      src: './images/ishop.jpg',
    },
    {
      src: './images/iphone_pro.png',
    },
    {
      src: './images/iphone.png',
    },
    {
      src: './images/touch_studio_banen.png',
    },
    {
      src: './images/touch_studio_baner.png',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlideIndex((activeSlide) => {
        const nextSlideIndex = activeSlide + 1;
        return slides.length === nextSlideIndex ? 0 : nextSlideIndex;
      });
    }, slideTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section class="banner">
      <div class="inner-banner">
        <div class="slides">
          <For each="slide" of={slides} index="slideIndex">
            <figure
              class={classnames('slide', {
                active: slideIndex === activeSlideIndex,
              })}
            >
              <img class="slide-image" src={slide.src} alt="" />
            </figure>
          </For>
        </div>

        <div class="slide-nav">
          <For each="dot" of={slides} index="slideIndexDot">
            <div
              class={classnames('dot', {
                active: slideIndexDot === activeSlideIndex,
              })}
            >
              <span />
            </div>
          </For>
        </div>
      </div>
    </section>
  );
};
