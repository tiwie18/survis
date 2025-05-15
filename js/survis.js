window.surVisVersion = '0.1.0';

var tagCloudOptions = [
  { field: 'keywords', title: 'Keywords', minTagFrequency: 1 },
  { field: 'author', title: 'Authors', minTagFrequency: 1 },
  { field: 'series', title: 'Series', minTagFrequency: 1 }
];

// ✅ Fix agar 'series' dikenali oleh bib.tagCategories
var userDefinedTagCategories = {
  series: { description: 'publication series (e.g., conference or journal)' }
};

$(document).ready(function () {
  page.init();
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';
