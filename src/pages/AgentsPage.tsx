import { useMemo, useState } from "react";
import { agents } from "../data/agents";
import { useReviews } from "../hooks/useReviews";
import AgentCard from "../components/AgentCard";

export default function AgentsPage() {
  const { averageFor, countFor } = useReviews();
  const [query, setQuery] = useState("");
  const [specialization, setSpecialization] = useState("All");
  const [sort, setSort] = useState<"rating" | "name" | "experience">("rating");

  const specializations = useMemo(() => {
    const set = new Set(agents.map((a) => a.specialization));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = agents.filter((a) => {
      if (specialization !== "All" && a.specialization !== specialization)
        return false;
      if (!q) return true;
      return (
        a.name.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.specialization.toLowerCase().includes(q)
      );
    });

    list = [...list].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "experience") return b.yearsExperience - a.yearsExperience;
      const ra = averageFor(a.id) ?? -1;
      const rb = averageFor(b.id) ?? -1;
      return rb - ra;
    });

    return list;
  }, [query, specialization, sort, averageFor]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our agents
        </h1>
        <p className="max-w-2xl text-slate-600">
          Browse the Better Homes in-house team. Tap any agent to read reviews
          or share your own rating.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, role, or location"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:max-w-xs"
        />
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:w-56"
        >
          {specializations.map((s) => (
            <option key={s} value={s}>
              {s === "All" ? "All specializations" : s}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as "rating" | "name" | "experience")
          }
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:w-48"
        >
          <option value="rating">Sort: Top rated</option>
          <option value="experience">Sort: Most experience</option>
          <option value="name">Sort: Name (A-Z)</option>
        </select>
      </div>

      <div className="mt-3 text-sm text-slate-500">
        Showing {filtered.length} of {agents.length} agents
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          No agents match your filters.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              averageRating={averageFor(agent.id)}
              reviewCount={countFor(agent.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
