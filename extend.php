<?php

/*
 * This file is part of fof/bbcode-tabs.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\BBCodeTabs;

use Flarum\Extend;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Formatter())
        ->configure(function (Configurator $configurator) {
            $configurator->BBCodes->addCustom(
                '[tabs]{TEXT}[/tabs]',
                '<div class="tab-container">{TEXT}</div>'
            );

            $configurator->BBCodes->addCustom(
                '[tab={TEXT;useContent}]',
                '<a class="tab">{TEXT}</a>'
            );

            $configurator->BBCodes->addCustom(
                '[tab-pane={TEXT;useContent}]',
                '<div class="tab-pane">{TEXT}</div>'
            );
        })
];
