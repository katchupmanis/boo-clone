// components/UniversesSidebar.js
import { universes } from '../data/mockData';

export default function UniversesSidebar() {
  return (
    <div className="card top-20">
      <h2 className="text-xl font-bold mb-4">Universes</h2>
      <div className="space-y-2 max-h-150 overflow-y-auto">
        {universes.map((universe) => (
          <button
            key={universe.id}
            className="w-full flex items-center justify-between p-3 rounded-lg transition-colors text-left"
          >
            <span className="font-medium">{universe.name}</span>
            <span className="text-xs text-gray-500">{universe.souls}</span>
          </button>
        ))}
      </div>
    </div>
  );
}