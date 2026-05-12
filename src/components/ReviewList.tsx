import type { Review } from "../types";
import Avatar from "./Avatar";
import StarRating from "./StarRating";

type Props = {
  reviews: Review[];
  onDelete?: (id: string) => void;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ReviewList({ reviews, onDelete }: Props) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="text-sm text-slate-500">
          No reviews yet. Be the first to share feedback.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {reviews.map((review) => (
        <li
          key={review.id}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <Avatar name={review.reviewerName} size="sm" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {review.reviewerName}
                  </p>
                  <p className="text-xs text-slate-400">
                    {formatDate(review.createdAt)}
                  </p>
                </div>
                <StarRating value={review.rating} size="sm" />
              </div>
              {review.comment && (
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                  {review.comment}
                </p>
              )}
              {onDelete && (
                <button
                  type="button"
                  onClick={() => onDelete(review.id)}
                  className="mt-3 text-xs font-medium text-slate-400 hover:text-rose-600"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
