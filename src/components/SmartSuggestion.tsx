interface SmartSuggestionProps {
  text: string;
}

const SmartSuggestion = ({ text }: SmartSuggestionProps) => {
  return (
    <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors border border-blue-200">
      ✨ {text}
    </button>
  );
};

export default SmartSuggestion;
