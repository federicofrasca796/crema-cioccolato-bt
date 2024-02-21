import clsx from 'clsx';

export interface AccordionProps {
  title: string;
  content: string;
  datasetName: string;
  multiselection?: boolean;
  className?: HTMLDivElement['className'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export default function Accordion({
  title,
  content,
  datasetName,
  multiselection = false,
  className,
  onChange,
  checked = false
}: AccordionProps) {
  return (
    <div
      className={clsx(
        'collapse collapse-arrow',
        // 'rounded-full has-[:checked]:rounded-lg',
        'border-2 border-primary-100 bg-primary-0',
        className
      )}
    >
      <input
        type={multiselection ? 'checkbox' : 'radio'}
        name={datasetName}
        onChange={onChange}
        defaultChecked={checked}
      />
      <div className='collapse-title text-xl font-bold text-primary'>
        {title}
      </div>
      <div className='collapse-content bg-babyPowder'>
        <p className='py-4 text-lg'>{content}</p>
      </div>
    </div>
  );
}
