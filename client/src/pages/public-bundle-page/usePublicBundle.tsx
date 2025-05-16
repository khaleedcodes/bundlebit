// hooks/usePublicBundle.ts
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface Bit {
  title: string;
  url: string;
  icon?: string;
  isPinned: boolean;
  order: number;
}

export interface Bundle {
  bundleName: string;
  displayName: string;
  bio?: string;
  profilePicture?: string;
  bits: Bit[];
  theme?: string;
}

export const usePublicBundle = () => {
  const { username } = useParams<{ username: string }>();
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBundle = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/bundles/${username}`
        );
        if (!res.ok) throw new Error("Bundle not found");
        const data: Bundle = await res.json();
        setBundle(data);
      } catch (err) {
        console.error(err);
        setBundle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBundle();
  }, [username]);

  return { bundle, loading };
};
