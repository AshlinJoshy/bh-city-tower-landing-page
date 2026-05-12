import { useState } from "react";
import StarRating from "./StarRating";

type Props = {
  onSubmit: (input: {
    rating: number;
    reviewerName: string;
    comment: string;
  }) => void;
};

export default function ReviewForm({ onSubmit }: Props) {
  const [rating, setRating] = useState(0);
  const [reviewerName, setReviewerName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Please choose a star rating.");
      return;
    }
    setError(null);
    onSubmit({
      rating,
      reviewerName: reviewerName.trim() || "Anonymous",
      comment: comment.trim(),
    });
    setRating(0);
    setReviewerName("");
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h3 className="text-base font-semibold text-slate-900">
        Rate this agent
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Share your experience to help colleagues.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Your rating
          </label>
          <StarRating value={rating} onChange={setRating} size="lg" />
        </div>

        <div>
          <label
            htmlFor="reviewerName"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Your name <span className="text-slate-400">(optional)</span>
          </label>
          <input
            id="reviewerName"
            type="text"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            placeholder="e.g. Jordan from Operations"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Comment <span className="text-slate-400">(optional)</span>
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="What stood out about working with this agent?"
            className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        {error && <p className="text-sm text-rose-600">{error}</p>}

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Submit review
        </button>
      </div>
    </form>
  );
}
