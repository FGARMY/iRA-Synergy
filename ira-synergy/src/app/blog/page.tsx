import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogs as staticBlogs } from "@/data/blogs";
import { supabase } from "@/lib/supabase";
import BlogHubClient from "./BlogHubClient";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Insights & Engineering Blog | iRA Synergy",
  description: "Read the latest insights on smart city infrastructure, renewable energy, and heavy engineering.",
};

export default async function BlogHubPage() {
  let allBlogs = staticBlogs;

  const isSupabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (isSupabaseConfigured) {
    try {
      const { data: dbBlogs } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (dbBlogs && dbBlogs.length > 0) {
        const mapped = dbBlogs.map((dbB: any) => ({
          id: dbB.id,
          slug: dbB.slug,
          title: dbB.title,
          excerpt: dbB.excerpt || "",
          content: dbB.content || "",
          coverImage: dbB.cover_image || "",
          author: dbB.author || "Admin",
          date: dbB.date || "",
          readTime: dbB.read_time || "",
          category: dbB.category || "",
          relatedSolutionSlug: dbB.related_solution_slug || "",
        }));

        const combined = [...staticBlogs];
        for (const item of mapped) {
          const idx = combined.findIndex((b) => b.id === item.id);
          if (idx >= 0) combined[idx] = item;
          else combined.unshift(item);
        }
        allBlogs = combined;
      }
    } catch (e) {
      console.warn("Supabase fetch failed for blogs, falling back to static blogs", e);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-20 lg:pt-44 pb-24">
        <BlogHubClient initialBlogs={allBlogs} />
      </main>
      
      <CTABanner />
      <Footer />
    </div>
  );
}
