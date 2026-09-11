import React from 'react';
import { useEffect, useState } from 'react';
import { HiXMark } from 'react-icons/hi2'
import { toast } from 'react-toastify'
import TechnologyCard from './TechnologyCard'
import {
  fetchTechnologies,
  getTechIcon,
  addTechToStack,
  removeTechFromStack,
  removeAllFromStack,
} from '../TechHelper'
const TechnologyGrid = () => {
    const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
      fetchTechnologies()
        .then(setTechnologies)
        .catch((loadError) => setError(loadError.message))
        .finally(() => setLoading(false))
    }, [])
  const handleAdd = (tech) => {
      if (stack.some((item) => item.id === tech.id)) {
        toast.warn(`${tech.name} is already added.`)
        return
      }
      toast.success(`${tech.name} added successfully.`)
    setStack((prevStack) => addTechToStack(prevStack, tech))
  }
   const handleRemove = (tech) => {
      toast.info(`${tech.name} removed successfully.`)
    setStack((prevStack) => removeTechFromStack(prevStack, tech))
  }
    const handleRemoveAll = () => {
      if (stack.length === 0) return
      toast.info('Your stack has been cleared.')
    setStack((prevStack) => removeAllFromStack(prevStack))
  }
  const isInStack = (id) => stack.some((tech) => tech.id === id)

    return (
         <section id="technologies" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Explore the <span className="text-gradient-brand">Technologies</span>
        </h2>
        <p className="mt-3 text-slate-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-500">
          <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
          <p className="text-sm font-medium">Loading technologies…</p>
        </div>
      )}

      {!loading && error && (
        <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-6 text-center text-sm text-red-600">
          Couldn't load technologies: {error}
        </p>
      )}

      {!loading && (
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:items-start lg:gap-8">
          {/* Technology cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                added={isInStack(tech.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          {/* Your Stack panel */}
          <aside className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:mt-0">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="mt-1 text-sm text-slate-400">
              {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {stack.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
                  Your stack is empty.
                </div>
              )}

              {stack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-50">
                    {getTechIcon(tech.icon, 20)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900">{tech.name}</p>
                    <p className="text-xs text-slate-400">{tech.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(tech)}
                    aria-label={`Remove ${tech.name} from stack`}
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  >
                    <HiXMark size={16} />
                  </button>
                </div>
              ))}
            </div>

            {stack.length > 0 && (
              <button
                type="button"
                onClick={handleRemoveAll}
                className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
              >
                Remove All
              </button>
            )}
          </aside>
        </div>
      )}
    </section>
    );
};

export default TechnologyGrid;