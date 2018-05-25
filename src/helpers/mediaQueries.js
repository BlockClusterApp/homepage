import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import '../vendor/modernizr.mq';

/* eslint-disable no-undef */

const mq = {
  min460: () => false,
  max460: () => false,
  min768: () => false,
  max768: () => false,
};

if (canUseDOM && window.Modernizr) {
  mq.max460 = () => window.Modernizr.mq('(max-width: 460px)');
  mq.max768 = () => window.Modernizr.mq('(max-width: 768px)');
  mq.min460 = () => window.Modernizr.mq('(min-width: 461px)');
  mq.min768 = () => window.Modernizr.mq('(min-width: 769px)');
}

export default mq;
