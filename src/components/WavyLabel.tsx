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
    <div className='group inline-flex min-h-10 w-full'>
      <div className='grow'>
        <div className='wavy-dotted-line mb-0.5 group-hover:after:animate-wavyLine'>
          {title}
        </div>
        <p className='text-sm text-smokyBrown-600'>{subtitle}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
