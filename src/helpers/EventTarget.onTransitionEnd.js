import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

if (canUseDOM) {
  const getTransitionEnd = () => {
    const el = document.createElement('div');

    const TransitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend',
    };

    // eslint-disable-next-line consistent-return
    Object.entries(TransitionEndEvent).forEach(([styleName, eventName]) => {
      if (el.style[styleName] !== undefined) {
        return eventName;
      }
    });

    return false;
  };

  const transitionEndSupport = getTransitionEnd();
  const transitionEnd = transitionEndSupport || 'transitionend';

  // eslint-disable-next-line func-names
  EventTarget.prototype.transitionEndFallback = function(duration) {
    if (transitionEndSupport) {
      return this;
    }

    const transitionendEvent = new CustomEvent('TransitionEvent');
    transitionendEvent.initEvent('transitionend', true, true);

    window.setTimeout(() => {
      this.dispatchEvent(transitionendEvent);
    }, duration);

    return this;
  };

  // eslint-disable-next-line func-names
  EventTarget.prototype.onTransitionEnd = function(fn, duration) {
    // eslint-disable-next-line no-shadow
    const transitionEndListener = (event, fn) => {
      if (this === event.target) {
        // eslint-disable-next-line no-use-before-define
        this.removeEventListener(
          transitionEnd,
          transitionEndListenerWithFallback,
        );
        fn();
      }

      return this;
    };

    const transitionEndListenerWithFallback = event => {
      transitionEndListener(event, fn).transitionEndFallback(duration);
    };

    this.addEventListener(transitionEnd, transitionEndListenerWithFallback);

    return this;
  };
}
