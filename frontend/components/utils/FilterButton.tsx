"use client";

interface FilterButtonProps {
  onClick: () => void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110"
      title="Open filters"
    >
      <svg 
        className="w-6 h-6" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    </button>
  );
}