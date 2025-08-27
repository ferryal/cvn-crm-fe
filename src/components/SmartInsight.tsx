import { TrendingUp } from "lucide-react";

const SmartInsight = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg border border-green-200">
      <TrendingUp className="w-4 h-4" />
      <span className="text-xs font-medium">High intent detected</span>
    </div>
  );
};

export default SmartInsight;
