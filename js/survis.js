window.surVisVersion = '0.1.0';

const electron = typeof require !== 'undefined' && typeof window.process === 'object';

$(document).ready(function () {
  page.init();
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});
