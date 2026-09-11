import React from 'react';
import { FaStar } from 'react-icons/fa6'
import { getTechIcon } from '../TechHelper'


const TechnologyCard = ({tech,added,onAdd}) => {
    return (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-50">
          {getTechIcon(tech.icon, 26)}
        </div>
        <div className={`badge badge-outline ${tech.badge === 'Popular' ? 'badge-primary' : tech.badge === 'Trending' ? 'badge-secondary' : tech.badge === 'Top SQL' ? 'badge-info' : 'badge-neutral'}`}>{tech.badge}</div>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <FaStar className="text-amber-400" size={13} />
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={added}
        className={`mt-5 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          added
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        {added ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
    );
};

export default TechnologyCard;