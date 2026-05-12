import { Link } from "react-router-dom";
import type { Agent } from "../types";
import Avatar from "./Avatar";
import StarRating from "./StarRating";

type Props = {
  agent: Agent;
  averageRating: number | null;
  reviewCount: number;
};

export default function AgentCard({ agent, averageRating, reviewCount }: Props) {
  return (
    <Link
      to={`/agents/${agent.id}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <Avatar name={agent.name} size="md" />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-900 group-hover:text-brand-700">
            {agent.name}
          </h3>
          <p className="truncate text-sm text-slate-500">{agent.role}</p>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Specialization
          </dt>
          <dd className="font-medium text-slate-700">{agent.specialization}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-slate-400">
            Location
          </dt>
          <dd className="font-medium text-slate-700">{agent.location}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        {averageRating !== null ? (
          <div className="flex items-center gap-2">
            <StarRating value={averageRating} size="sm" />
            <span className="text-sm font-semibold text-slate-700">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-xs text-slate-400">
              ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
            </span>
          </div>
        ) : (
          <span className="text-sm text-slate-400">No reviews yet</span>
        )}
        <span className="text-xs font-medium text-brand-600 group-hover:underline">
          View &rarr;
        </span>
      </div>
    </Link>
  );
}
