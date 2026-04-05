import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import ComposerPostPreview from 'flarum/forum/components/ComposerPostPreview';

app.initializers.add('fof/bbcode-tabs', () => {
  // Use global numbering only for non-post tabs (eg. previews, other components) to avoid overlap.
  let globalId = 0;

  const createTabs = function (this: CommentPost|ComposerPostPreview) {
    const postId = 'post' in this.attrs && this.attrs.post?.id() || `Other${++globalId}`;
    let id = 0;

    const containers = this.$('.tabs');

    containers.each((i, container) => {
      const $container = $(container);

      if ($container.find('input[type="radio"][name]').length) return;

      const $inputs = $container.find('> .tab > input[type="radio"]');

      if (!$inputs.length) return;

      const $items = $container.find('.tab');
      const num = `post${postId}-tabs${id++}`;

      $container.attr('id', `tabs-${num}`);
      $inputs.attr('name', `tab-group-${num}`);

      if (!$inputs.is('[checked]')) $inputs[0].setAttribute('checked', 'checked');

      $items.each((i, item) => {
        const $item = $(item);
        const id = `tab-${num}-${++i}`;

        $item.find('input[type="radio"]').attr('id', id);
        $item.find('label').attr('for', id);
      });
    });
  };

  extend(CommentPost.prototype, ['oncreate', 'onupdate'], createTabs);
  extend(ComposerPostPreview.prototype, ['oncreate', 'onupdate'], function () {
    // In 2.x, surround is not immediately called after the component is created.
    createTabs.call(this);

    // Process tabs when the preview content is updated.
    extend(this.attrs, 'surround', () => {
      createTabs.call(this);
    });
  });
});
