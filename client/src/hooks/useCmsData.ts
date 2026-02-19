import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export function useSlideshow() {
  return useQuery({
    queryKey: ['slideshow'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/api/globals/hero-slideshow`);
      return data;
    },
  });
}

export function useImpactStats() {
  return useQuery({
    queryKey: ['impact-stats'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/api/impact-tracker`);
      const totalBeneficiaries = data.docs.reduce((sum: number, doc: any) => sum + (doc.beneficiaryCount || 0), 0);
      return { totalBeneficiaries };
    },
  });
}

export function useLatestStories(limit = 3, tag?: string) {
  return useQuery({
    queryKey: ['stories', limit, tag],
    queryFn: async () => {
      let url = `${API_URL}/api/stories?limit=${limit}&sort=-publishedDate`;
      if (tag) {
        url += `&where[tags][equals]=${tag}`;
      }
      const { data } = await axios.get(url);
      return data.docs;
    },
  });
}
