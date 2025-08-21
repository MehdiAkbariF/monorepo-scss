import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// کامپوننت نمایشی ما حالا props های بیشتری می‌پذیرد
interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant, size, disabled, ...props }) => {
  // ساختن کلاس‌ها به صورت پویا
  const classNames = [
    'btn',
    `btn-${variant}`,
    size !== 'md' ? `btn-${size}` : '' // کلاس سایز فقط برای sm و lg
  ].join(' ');

  return (
    <button type="button" className={classNames} disabled={disabled} {...props}>
      {label}
    </button>
  );
};

// پیکربندی اصلی استوری
const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  // تعریف کنترل‌ها برای props های جدید
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
  // مقادیر پیش‌فرض برای props ها
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ما دیگر نیازی به استوری‌های جداگانه برای Primary و Secondary نداریم!
// Storybook Controls این کار را برای ما انجام می‌دهد.
// ما یک استوری "Default" می‌سازیم و بقیه را به عنوان نمونه‌های مختلف تعریف می‌کنیم.

export const Default: Story = {
  // args در اینجا می‌تواند args پیش‌فرض را override کند
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button',
  },
};

// یک استوری برای نمایش همه دکمه‌ها در کنار هم برای مقایسه 
export const AllButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button variant="primary" size="lg" label="Primary Large" disabled={false} />
        <Button variant="primary" size="md" label="Primary Medium" disabled={false} />
        <Button variant="primary" size="sm" label="Primary Small" disabled={false} />
        <Button variant="primary" size="md" label="Disabled" disabled />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button variant="secondary" size="lg" label="Secondary Large" disabled={false} />
        <Button variant="secondary" size="md" label="Secondary Medium" disabled={false} />
        <Button variant="secondary" size="sm" label="Secondary Small" disabled={false} />
        <Button variant="secondary" size="md" label="Disabled" disabled />
      </div>
    </div>
  ),
};