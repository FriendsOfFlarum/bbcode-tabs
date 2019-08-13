import tabs from 'tabs';

import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

app.initializers.add('fof/bbcode-tabs', () => {
  extend(CommentPost.prototype, 'config', function () {
    const containers = this.$('.tabs');

    containers.each((i, container) => {
      const $container = $(container);

      if ($container.find('input[type="radio"][name]').length) return;

      const $inputs = $container.find('> .tab > input[type="radio"]');

      if (!$inputs.length) return;

      const $items = $container.find('.tab');
      const num = Math.round(Math.random() * 100);

      $inputs.attr('name', `tab-group-${num}`);

      if (!$inputs.attr('checked')) $inputs[0].setAttribute('checked', true);

      if (!$container.find('#tab-').length) return;

      $items.each((i, item) => {
        const $item = $(item);
        const id = `tab-${num}-${++i}`;

        $item.find('input[type="radio"]').attr('id', id);
        $item.find('label').attr('for', id);
      });
    });
  });
});
