import { Link, useParams } from "react-router-dom";
import { getAgentById } from "../data/agents";
import { useReviews } from "../hooks/useReviews";
import Avatar from "../components/Avatar";
import StarRating from "../components/StarRating";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

export default function AgentDetailPage() {
  const { agentId = "" } = useParams();
  const agent = getAgentById(agentId);
  const { reviews, addReview, deleteReview, averageFor, countFor } =
    useReviews(agentId);

  if (!agent) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900">Agent not found</h1>
        <p className="mt-2 text-slate-600">
          We couldn&rsquo;t find an agent with that ID.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Back to agents
        </Link>
      </div>
    );
  }

  const average = averageFor(agent.id);
  const count = countFor(agent.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        to="/"
        className="text-sm font-medium text-brand-700 hover:underline"
      >
        &larr; All agents
      </Link>

      <section className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-brand-700 to-brand-500 px-6 py-8 sm:px-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Avatar name={agent.name} size="lg" />
            <div className="text-white">
              <h1 className="text-2xl font-bold sm:text-3xl">{agent.name}</h1>
              <p className="text-sm text-brand-100 sm:text-base">
                {agent.role} &middot; {agent.location}
              </p>
              <div className="mt-3 flex items-center gap-3">
                {average !== null ? (
                  <>
                    <StarRating value={average} size="md" />
                    <span className="text-sm font-semibold">
                      {average.toFixed(1)}
                    </span>
                    <span className="text-sm text-brand-100">
                      ({count} {count === 1 ? "review" : "reviews"})
                    </span>
                  </>
                ) : (
                  <span className="text-sm text-brand-100">
                    No reviews yet
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-3 sm:px-10">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Specialization
            </p>
            <p className="mt-1 font-medium text-slate-800">
              {agent.specialization}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Experience
            </p>
            <p className="mt-1 font-medium text-slate-800">
              {agent.yearsExperience} years
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Languages
            </p>
            <p className="mt-1 font-medium text-slate-800">
              {agent.languages.join(", ")}
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              About
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {agent.bio}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Contact
            </p>
            <p className="mt-1 text-sm text-slate-700">
              <a
                href={`mailto:${agent.email}`}
                className="block text-brand-700 hover:underline"
              >
                {agent.email}
              </a>
              <a
                href={`tel:${agent.phone.replace(/\s+/g, "")}`}
                className="block text-slate-600"
              >
                {agent.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ReviewForm
            onSubmit={(input) => addReview({ ...input, agentId: agent.id })}
          />
        </div>
        <div className="lg:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Reviews ({count})
            </h2>
          </div>
          <ReviewList reviews={reviews} onDelete={deleteReview} />
        </div>
      </section>
    </div>
  );
}
