interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">{title}</h2>
  );
}
