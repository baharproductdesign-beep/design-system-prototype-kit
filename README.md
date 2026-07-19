# Design System Prototype Kit

A reusable React component starter kit that helps designers and AI coding agents build functional prototypes without recreating basic UI.

## Why this exists

The most valuable part of a prototype is usually not the button, input, card, modal, or empty state. It is the workflow, interaction, or product idea being tested.

This kit reduces time spent rebuilding common interface elements so designers can focus on:

- Product behavior
- Complex interactions
- User flows
- Edge cases
- Validation and learning

## Included in v1

- Button with primary, secondary, and ghost variants
- Labeled input with accessible helper text support
- Flexible card component
- Modal with Escape-key and backdrop dismissal
- Empty state with an optional action
- Responsive example prototype workspace
- Shared design tokens for color, spacing, radius, and elevation

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## AI-assisted prototyping prompt

> Build a prototype using the components already available in `src/components`. Reuse Button, Input, Card, Modal, and EmptyState before creating any new base components. Focus new code on the product workflow and behavior rather than recreating foundational UI.

## Principles

1. Reuse before creating.
2. Test behavior before polishing visuals.
3. Keep components composable.
4. Include realistic states and sample content.
5. Treat accessibility as part of the prototype.
6. Document components clearly enough for both humans and coding agents.

## Suggested GitHub topics

`design-systems` `react` `typescript` `prototyping` `ai-assisted-development` `product-design`

## Roadmap

- Add Select, Tabs, Toast, and Data Table
- Add Storybook documentation
- Add dark mode
- Add automated accessibility checks
- Add design-token export examples
- Add AI agent instructions for component reuse

## License

MIT
