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
                '<div class="tabs"><xsl:apply-templates/></div>'
            );

            $configurator->BBCodes->addCustom(
                '[tab name={ANYTHING} pos={INT?} active={ANYTHING?} checked={ANYTHING?}]{TEXT}[/tab]',
                <<<XML
<div class="tab">
    <input type="radio" id="tab-{@pos}">
        <xsl:if test="@active">
            <xsl:attribute name="checked">true</xsl:attribute>
            <xsl:copy-of select="@checked" />
        </xsl:if>
    </input>
    <label for="tab-1">{@name}</label>

    <div class="content">
        <xsl:apply-templates/>
    </div>
</div>
XML

            );
        })
];
