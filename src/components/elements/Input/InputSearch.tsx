'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { MouseEvent, MouseEventHandler, useState } from 'react';
import InputText, { InputTextProps } from './InputText';
import { XMarkIcon } from '@heroicons/react/24/solid';

export interface InputSearchProps extends InputTextProps {
  onCancel: MouseEventHandler;
}

export default function InputSearch({
  className,
  onChange,
  onCancel,
  ...props
}: InputSearchProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) onChange(event);
  };

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    setValue('');
    onCancel(event);
  };

  return (
    <InputText
      {...props}
      icon={
        <InputSearch.ActionButton
          actionType={value.length ? 'reset' : 'search'}
          {...(value.length && { onClick: handleCancel })}
        />
      }
      iconPosition='start'
      onChange={handleChange}
      className={clsx('', className)}
      value={value}
    />
  );
}

interface ActionButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  actionType: 'search' | 'reset';
}

InputSearch.ActionButton = function ActionButton({
  actionType = 'search',
  ...props
}: ActionButtonProps) {
  return (
    <button
      className='aspect-square h-full rounded-full bg-primary-100 p-2 text-smokyBrown-800 outline-4 outline-secondary-0'
      {...props}
    >
      {actionType === 'reset' ? (
        <XMarkIcon className='animate-fadeIn' />
      ) : (
        <MagnifyingGlassIcon className='animate-fadeIn' />
      )}
    </button>
  );
};
