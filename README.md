# Bento Design System

Design System based around the bento box design.

## Layout Components

### Bento Grid

Creates a grid and applies some of the theme. Mostly just a wrapper around the tailwind `grid` class. You can add additional tailwind grid classes to control it.

### Bento Row / Col

This is a row/col meant to be used within a bento grid. It enables you to have a section of the grid that doesn't exactly conform to the grid lines. By default a bento row will span all columns of the grid and a bento col will span all rows. Often the flexible rows in bento design will do this but you can easily override it by adding a class such as `row-span-3`. It also will match the gap provided by the theme so things are spaced the same way as the grid.

We might have variants to include tiles with no background or glass backgrounds, but this could also just be controlled with tailwind.

### Tile

This is where the actual content lives. It proveds a background, rounded corners to match the theme. A Bento Row/Col must have tiles in it. A Bento Grid can have a combination of Bento Rows/Cols and Tiles to fill out its space.

## Components

None of these are truly necessary if we're just wanting to provide a bento design system. But it would be pretty boring if an app had none of these. Not sure how much of them we want to provide but I listed these more or less in order of importance.

### Typography

Most bento design systems will have a title text and body text but we can add as many as we need.

### Image

Bento design heavily uses images. Might not need a specific component for it but might be handy.

### Button

Simple Button. Can't live without em

### Text Field

Gotta get those emails somehow

### Badge

Badges can look pretty cool either in tiles or as part of the rows

### Card

Some make use of cards to create more depth to the page
