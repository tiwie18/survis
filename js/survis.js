window.surVisVersion = '0.1.0';

// ⬇️ Tambahkan ini di bagian paling atas setelah version
var userDefinedTagCategories = {
  series: { description: 'publication series (e.g., conference proceedings or journal)' }
};

var tagCloudOptions = [
  { field: 'keywords', title: 'Keywords', minTagFrequency: 1 },
  { field: 'author', title: 'Authors', minTagFrequency: 1 },
  { field: 'series', title: 'Series', minTagFrequency: 1 }
];

// ⬇️ Pastikan ini tetap setelah definisi di atas
$(document).ready(function () {
  page.init();
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';
