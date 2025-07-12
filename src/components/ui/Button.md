# Button Component

A customizable button component built on top of React Native Paper's Button component that integrates with the app's theme system and supports multiple variants and sizes.

## Features

- **Built on React Native Paper**: Leverages the robust foundation of React Native Paper's Button component
- **4 Variants**: Default, Rounded, Outline, Rounded Outline
- **3 Sizes**: Big, Medium, Small
- **Icon Support**: Left or right positioned icons
- **Theme Integration**: Automatically adapts to light/dark mode
- **Loading State**: Shows activity indicator when loading
- **Disabled State**: Visual feedback for disabled buttons
- **Full Width Option**: Can span the full width of its container

## Props

| Prop           | Type                                                      | Default      | Description                           |
| -------------- | --------------------------------------------------------- | ------------ | ------------------------------------- |
| `title`        | `string`                                                  | **required** | Button text                           |
| `onPress`      | `() => void`                                              | **required** | Press handler function                |
| `variant`      | `'default' \| 'rounded' \| 'outline' \| 'roundedOutline'` | `'default'`  | Button style variant                  |
| `size`         | `'big' \| 'medium' \| 'small'`                            | `'medium'`   | Button size                           |
| `disabled`     | `boolean`                                                 | `false`      | Whether button is disabled            |
| `loading`      | `boolean`                                                 | `false`      | Shows loading spinner                 |
| `icon`         | `React.ReactNode`                                         | `undefined`  | Icon component                        |
| `iconPosition` | `'left' \| 'right'`                                       | `'left'`     | Icon position                         |
| `style`        | `ViewStyle`                                               | `undefined`  | Additional button styles              |
| `textStyle`    | `TextStyle`                                               | `undefined`  | Additional text styles                |
| `fullWidth`    | `boolean`                                                 | `false`      | Whether button should span full width |

## Variants

### Default

Standard filled button with primary color background (uses Paper's `contained` mode).

### Rounded

Filled button with rounded corners (borderRadius: 24, uses Paper's `contained` mode).

### Outline

Transparent button with primary color border and text (uses Paper's `outlined` mode).

### Rounded Outline

Transparent button with rounded corners, primary color border and text (uses Paper's `outlined` mode).

## Sizes

### Big

- Height: 56px
- Font size: 18px

### Medium

- Height: 48px
- Font size: 16px

### Small

- Height: 36px
- Font size: 14px

## Usage Examples

### Basic Usage

```tsx
import { Button } from "~/components/ui";

<Button title="Press Me" onPress={() => console.log("Button pressed!")} />;
```

### Different Variants

```tsx
<Button title="Default" onPress={handlePress} variant="default" />
<Button title="Rounded" onPress={handlePress} variant="rounded" />
<Button title="Outline" onPress={handlePress} variant="outline" />
<Button title="Rounded Outline" onPress={handlePress} variant="roundedOutline" />
```

### Different Sizes

```tsx
<Button title="Big Button" onPress={handlePress} size="big" />
<Button title="Medium Button" onPress={handlePress} size="medium" />
<Button title="Small Button" onPress={handlePress} size="small" />
```

### With Icons

```tsx
<Button
  title="With Icon"
  onPress={handlePress}
  icon={<Text style={{ color: 'inherit', fontSize: 16 }}>🚀</Text>}
  iconPosition="left"
/>

<Button
  title="Icon Right"
  onPress={handlePress}
  icon={<Text style={{ color: 'inherit', fontSize: 16 }}>⭐</Text>}
  iconPosition="right"
/>
```

### Loading State

```tsx
<Button title="Loading..." onPress={handlePress} loading={true} />
```

### Disabled State

```tsx
<Button title="Disabled" onPress={handlePress} disabled={true} />
```

### Full Width

```tsx
<Button title="Full Width Button" onPress={handlePress} fullWidth={true} />
```

### Custom Styling

```tsx
<Button
  title="Custom Style"
  onPress={handlePress}
  style={{ marginTop: 20 }}
  textStyle={{ fontWeight: "bold" }}
/>
```

## Theme Integration

The Button component automatically uses colors from your app's theme:

- **Default/Rounded variants**: Use `theme.colors.primary` background with `theme.colors.onPrimary` text
- **Outline/Rounded Outline variants**: Use transparent background with `theme.colors.primary` border and text
- **Loading indicator**: Adapts color based on variant
- **Disabled state**: Reduces opacity to 0.6

## React Native Paper Integration

This component is built on top of React Native Paper's Button component, which means:

- **Consistent Design**: Follows Material Design principles
- **Accessibility**: Built-in accessibility features from Paper
- **Performance**: Optimized rendering and touch handling
- **Ripple Effects**: Native ripple effects on Android
- **Platform Consistency**: Consistent behavior across iOS and Android

## Demo

You can see all variants and sizes in action by importing and using the `ButtonDemo` component:

```tsx
import { ButtonDemo } from "~/components/ui";

// In your screen
<ButtonDemo />;
```
