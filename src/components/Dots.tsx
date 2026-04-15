export default function Dots({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-4 w-fit ${className}`}>
      {[...Array(25)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-grey rounded-full"></div>
      ))}
    </div>
  );
}
