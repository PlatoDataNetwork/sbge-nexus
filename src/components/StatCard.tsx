interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, description, icon }: StatCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover-lift">
      {icon && <div className="mb-3 sm:mb-4 text-accent">{icon}</div>}
      <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-base sm:text-lg font-semibold text-foreground mb-1">{label}</div>
      {description && (
        <div className="text-xs sm:text-sm text-muted-foreground">{description}</div>
      )}
    </div>
  );
};

export default StatCard;
