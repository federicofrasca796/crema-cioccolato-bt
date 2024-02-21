type WavyLabelProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function WavyLabel({
  children,
  title,
  subtitle
}: WavyLabelProps) {
  return (
    <div className='inline-flex min-h-10 w-full'>
      <div className='grow'>
        <div className="mb-0.5 after:block after:h-[0.45rem] after:bg-smokyBrown-400 after:[mask-image:url('/assets/wavy-dotted-line.svg')]">
          {title}
        </div>
        <p className='text-sm text-smokyBrown-600'>{subtitle}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
