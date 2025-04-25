# LeetCode Show Topics

![Logo](logo.svg)
Firefox extension.

## Description

Show Topic Tags on the list view of Problems on LeetCode. Useful for focusing on a single algorithm such as Topological Sort, or a Trie, or a Priority Queue. But, yes, otherwise it's a spoiler. Last tested in April 2025.

## Instructions

### Easy Install

Visit <https://addons.mozilla.org/en-US/developers/addon/leetcode-topic-tags>

### Install From Source

1. From this repository, use the green `Code` button to download code into a folder on your computer.

2. Open Firefox and type `about:debugging` in the address bar, then press Enter.

3. Click "This Firefox".

4. Click "Load Temporary Add-on".

5. In the file dialog, navigate to the downloaded folder and select the `manifest.json` file.

6. A new icon should appear at the top of the list.

7. Such temporary installation has to be repeated after every browser restart.

### Does It Work?

Go to LeetCode -> Problems (<https://leetcode.com/problemset/>). For every problem entry,
there should be a line of tags now (e.g. `Array`, `Recursion`, `Dynamic Programming`, ...). Voilà!

### Cleanup

1. To uninstall the extension, go to `about:addons`, click on the extension, and choose "Remove."

### Upload New Version

```sh
rm -f ~/Downloads/ship.zip && zip -r -FS ~/Downloads/ship.zip * --exclude '.jj' --exclude '*.git*'    # manually upload it to Mozilla
```
