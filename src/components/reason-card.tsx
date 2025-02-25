interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

export function ReasonCard({
  icon,
  title,
  description,
  iconBgColor,
}: ReasonCardProps) {
  return (
    <div className="text-center">
      <div
        className={`w-16 h-16 ${iconBgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
