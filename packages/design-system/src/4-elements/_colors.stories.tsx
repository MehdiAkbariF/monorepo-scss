// packages/design-system/src/4-elements/_colors.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Atoms/Colors',
};

export default meta;
type Story = StoryObj;

// کامپوننت کمکی ColorSwatch (بدون تغییر)
interface ColorSwatchProps {
  name: string;
  colorVar: string;
}
const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, colorVar }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontFamily: 'sans-serif' }}>
    <div style={{
      width: '50px',
      height: '50px',
      backgroundColor: `var(${colorVar})`,
      border: '1px solid var(--color-border-primary)',
      borderRadius: '4px',
      marginRight: '1rem',
    }} />
    <div>
      <strong style={{ color: 'var(--color-text-primary)' }}>{name}</strong>
      <br />
      <small style={{ color: 'var(--color-text-secondary)' }}>{colorVar}</small>
    </div>
  </div>
);

// 👇 کامپوننت اصلی ColorPalette را با این نسخه جایگزین کنید
const ColorPalette = () => (
  <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
    <h1>Color Palette</h1>
    <p style={{ color: 'var(--color-text-secondary)' }}>
      Colors will automatically update when switching between light and dark themes.
    </p>
    
    <hr style={{ border: 0, borderTop: '1px solid var(--color-border-primary)', margin: '2rem 0' }} />

    <h2>Brand Colors</h2>
    <ColorSwatch name="Primary" colorVar="--color-brand-primary" />
    <ColorSwatch name="Secondary" colorVar="--color-brand-secondary" />
    <ColorSwatch name="Accent" colorVar="--color-brand-accent" />
    
    <h2 style={{ marginTop: '2rem' }}>Text Colors</h2>
    <ColorSwatch name="Primary Text" colorVar="--color-text-primary" />
    <ColorSwatch name="Secondary Text" colorVar="--color-text-secondary" />
    <ColorSwatch name="Placeholder" colorVar="--color-text-placeholder" />
    <ColorSwatch name="Text on Brand" colorVar="--color-text-on-brand" />
    <ColorSwatch name="Link" colorVar="--color-text-link" />
    
    <h2 style={{ marginTop: '2rem' }}>Background Colors</h2>
    <ColorSwatch name="Body Background" colorVar="--color-bg-body" />
    <ColorSwatch name="Surface Background" colorVar="--color-bg-surface" />
    <ColorSwatch name="Surface Hover" colorVar="--color-bg-surface-hover" />
    
    <h2 style={{ marginTop: '2rem' }}>Border Colors</h2>
    <ColorSwatch name="Primary Border" colorVar="--color-border-primary" />
    <ColorSwatch name="Secondary Border" colorVar="--color-border-secondary" />

    <h2 style={{ marginTop: '2rem' }}>Utility Colors</h2>
    <ColorSwatch name="Success" colorVar="--color-utility-success" />
    <ColorSwatch name="Error" colorVar="--color-utility-error" />
    <ColorSwatch name="Warning" colorVar="--color-utility-warning" />
    <ColorSwatch name="Info" colorVar="--color-utility-info" />
  </div>
);

export const Palette: Story = {
  render: () => <ColorPalette />,
};