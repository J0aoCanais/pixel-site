interface StatCounterProps {
  number: string;
  label: string;
}

export function StatCounter({ number, label }: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold mb-1">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
