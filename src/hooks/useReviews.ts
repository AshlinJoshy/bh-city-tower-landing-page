import { useCallback, useEffect, useState } from "react";
import type { Review } from "../types";

const STORAGE_KEY = "bh-agent-reviews-v1";

function loadAll(): Review[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Review[]) : [];
  } catch {
    return [];
  }
}

function saveAll(reviews: Review[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

export function useReviews(agentId?: string) {
  const [all, setAll] = useState<Review[]>(() => loadAll());

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setAll(loadAll());
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const reviews = agentId ? all.filter((r) => r.agentId === agentId) : all;

  const addReview = useCallback(
    (input: Omit<Review, "id" | "createdAt">) => {
      const review: Review = {
        ...input,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      setAll((prev) => {
        const next = [review, ...prev];
        saveAll(next);
        return next;
      });
    },
    [],
  );

  const deleteReview = useCallback((id: string) => {
    setAll((prev) => {
      const next = prev.filter((r) => r.id !== id);
      saveAll(next);
      return next;
    });
  }, []);

  const averageFor = useCallback(
    (id: string) => {
      const list = all.filter((r) => r.agentId === id);
      if (list.length === 0) return null;
      const sum = list.reduce((acc, r) => acc + r.rating, 0);
      return sum / list.length;
    },
    [all],
  );

  const countFor = useCallback(
    (id: string) => all.filter((r) => r.agentId === id).length,
    [all],
  );

  return { reviews, addReview, deleteReview, averageFor, countFor };
}
