# BBCode Tabs by FriendsOfFlarum

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/fof/bbcode-tabs.svg)](https://packagist.org/packages/fof/bbcode-tabs) [![OpenCollective](https://img.shields.io/badge/opencollective-fof-blue.svg)](https://opencollective.com/fof/donate) [![Donate](https://img.shields.io/badge/donate-datitisev-important.svg)](https://datitisev.me/donate)

A [Flarum](http://flarum.org) extension. Add tabs to your posts by using BBCode tags.

### Usage

```bbcode
[tabs]
    [tab="hi"]Hi[/tab]
    [tab="hello"]Hello[/tab]
    [tab="lorem" fullheight=]ipsum ....[/tab]
    [tab="custom height" height="50"]custom height tab[/tab]
[/tabs]
```

To make a tag active by default:

```bbcode
[tab="[NAME]" active="[ANYTHING]"]...[/tab]
[tab name="[NAME]" active="[ANYTHING]"]...[/tab]
```

**BBCode Tags** 
- `[tabs]` wrapper tag with optional attributes:
  - `height` (optional): numeric height in pixels for tab content (`height="240"` -> 240px).
  - `fullheight` (optional): use automatic content height.
- `[tab]` child tag with required and optional attributes
  - `name` (required): tab label text.
  - `active` (optional): marks that tab as initially selected.
  - `height` (optional): per-tab pixel height override.
  - `fullheight` (optional): per-tab automatic height override.

The attributes that do not require a value (`active`, `fullheight`) need to have a value, even if it is empty. Thus, just `active` is not valid but `active=` and `active="..."` are valid.

### Installation

Install with composer:

```sh
composer require fof/bbcode-tabs:"*"
```

### Updating

```sh
composer update fof/bbcode-tabs
```

### Links

[![OpenCollective](https://img.shields.io/badge/donate-friendsofflarum-44AEE5?style=for-the-badge&logo=open-collective)](https://opencollective.com/fof/donate)

- [Packagist](https://packagist.org/packages/fof/bbcode-tabs)
- [GitHub](https://github.com/FriendsOfFlarum/bbcode-tabs)
- [Discuss](https://discuss.flarum.org/d/27309-bbcode-tabs)

An extension by [FriendsOfFlarum](https://github.com/FriendsOfFlarum).
