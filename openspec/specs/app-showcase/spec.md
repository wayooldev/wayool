## Purpose

Presents Wayool studio products on the marketing homepage as showcase cards with category, benefit copy, live status, and visit links so visitors can discover and open each product.

## Requirements

### Requirement: Showcase lists live studio products
The homepage app showcase SHALL display a card for each listed studio product, including name, category, short benefit description, version/status indicators, and a visit link when the product is live.

#### Scenario: Visitor sees Dragon Territory
- **WHEN** a visitor views the homepage showcase section
- **THEN** a card named "Dragon Territory" with category "Kids games" is shown among the other studio product cards
- **AND** the card benefit describes the Fire vs Ice arcade Othello game for kids
- **AND** the card status indicates Live
- **AND** the visit link points to `https://dragon-territory.wayool.com`

### Requirement: Visit link opens branded product URL
When a showcase card has a visit link, activating it SHALL navigate to the product's branded `*.wayool.com` URL (or the project's designated live URL) in a way consistent with other showcase cards.

#### Scenario: Open Dragon Territory
- **WHEN** a visitor activates the Dragon Territory visit control
- **THEN** they are taken to `https://dragon-territory.wayool.com`
