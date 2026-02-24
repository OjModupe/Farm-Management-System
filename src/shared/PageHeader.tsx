interface PageHeaderProps {
  title: string;
  description: string;
}
const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-gray-400 text-xl">{description}</p>
    </div>
  );
};

export default PageHeader;
