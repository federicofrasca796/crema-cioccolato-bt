import clsx from 'clsx';
import { forwardRef } from 'react';

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  wrapperClass?: React.LabelHTMLAttributes<HTMLLabelElement>['className'];
}

export default forwardRef<HTMLLabelElement, InputTextProps>(function InputText(
  { icon, iconPosition = 'end', wrapperClass, ...props },
  ref
) {
  return (
    <label
      ref={ref}
      className={clsx(
        'input input-bordered flex items-center gap-2 rounded-full border-2 border-secondary-100 bg-secondary-0 px-1 py-1 focus-within:border-secondary-100 focus-within:outline-primary focus:border-secondary-100 focus:outline-primary',
        { 'flex-row-reverse': iconPosition === 'start' },
        wrapperClass
      )}
    >
      <input
        {...props}
        className={clsx(
          'grow text-primary-900 placeholder:text-smokyBrown-500',
          props.className
        )}
      />
      {icon}
    </label>
  );
});
