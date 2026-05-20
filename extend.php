<?php

/*
 * This file is part of fof/bbcode-tabs.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
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
            $HEIGHT_AND_FULLHEIGHT = <<<'XML'
<xsl:if test="@height or @fullheight">
    <xsl:attribute name="style">
        <xsl:choose>
            <xsl:when test="@height">
                <xsl:text>--tab-content-height: </xsl:text>
                <xsl:value-of select="@height"/>
                <xsl:text>px;</xsl:text>
            </xsl:when>
            <xsl:when test="@fullheight">
                <xsl:text>--tab-content-height: auto;</xsl:text>
            </xsl:when>
        </xsl:choose>
    </xsl:attribute>
</xsl:if>
XML;

            $configurator->BBCodes->addCustom(
                '[tabs fullheight={ANYTHING?} height={NUMBER?}]{TEXT}[/tabs]',
                <<<XML
<div class="tabs">
    $HEIGHT_AND_FULLHEIGHT
    <xsl:apply-templates/>
</div>
XML
            );

            $configurator->BBCodes->addCustom(
                '[tab name={ANYTHING} active={ANYTHING?} fullheight={ANYTHING?} height={NUMBER?}]{TEXT}[/tab]',
                <<<XML
<div class="tab">
    $HEIGHT_AND_FULLHEIGHT

    <input type="radio">
        <xsl:if test="@active">
            <xsl:attribute name="checked">checked</xsl:attribute>
        </xsl:if>
    </input>
    <label>{@name}</label>

    <div class="content">
        <xsl:apply-templates/>
    </div>
</div>
XML
            );
        }),
];
