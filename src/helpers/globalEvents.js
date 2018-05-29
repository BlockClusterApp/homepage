import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

const windowLoad = [];
const windowScroll = [];
const windowResize = [];
const windowBeforeUnload = [];

if (canUseDOM) {
  window.onbeforeunload = () => {
    windowBeforeUnload.forEach(fn => fn());
  };

  window.onload = () => {
    windowLoad.forEach(fn => fn());
  };

  window.onscroll = () => {
    windowScroll.forEach(fn => fn());
  };

  window.addEventListener('resize', () => {
    windowResize.forEach(fn => fn());
  });
}

export { windowLoad, windowScroll, windowResize, windowBeforeUnload };
