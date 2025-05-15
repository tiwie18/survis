window.surVisVersion = '0.1.0';

var tagCloudOptions = [
  {
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
  },
  {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
  },
  {
    field: 'series',
    title: 'Series',
    minTagFrequency: 1
  }
];

$(document).ready(function () {
  page.init();
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';
