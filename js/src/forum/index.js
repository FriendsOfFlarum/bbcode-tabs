import tabs from 'tabs';

import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

app.initializers.add('fof/bbcode-tabs', () => {
  extend(CommentPost.prototype, 'config', function (original, isInitialized) {
    console.log('hey');
    if (isInitialized) return;

    const containers = this.$('.tab-container');

    containers.each((i, container) => {
      const $container = $(container);
      const tabsItems = $container.find('.tab');
      const panes = $container.find('.tab-pane');

      if (!container || !tabsItems.length || !panes.length) return;

      if (!tabsItems.hasClass('active')) tabsItems[0].classList.add('active');
      if (!panes.hasClass('active')) panes[0].classList.add('active');

      tabsItems.wrap('<div class="tabs"></div>');
      panes.wrap('<div class="tab-panes"></div>');

      tabs(container);
    });
  });
});
