// این خط را حذف یا کامنت کنید
// import './_buttons.scss';

// پیکربندی اولیه Story
export default {
    title: 'Design System/Elements/Button',
  };
  
  // بقیه کد بدون تغییر باقی می‌ماند...
  const ButtonTemplate = ({ label, style, cssClass }) => {
    return `<button class="btn ${cssClass}" style="${style}">${label}</button>`;
  };
  
  export const Primary = ButtonTemplate.bind({});
  Primary.args = {
    label: 'Primary Button',
    cssClass: 'btn-primary',
  };
  
  export const Secondary = ButtonTemplate.bind({});
  Secondary.args = {
    label: 'Secondary Button',
    cssClass: 'btn-secondary',
  };