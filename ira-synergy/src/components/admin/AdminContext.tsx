"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { products as staticProducts } from "@/data/products";
import { blogs as staticBlogs, type BlogPost } from "@/data/blogs";
import type { Product } from "@/types";

// ============================================================
// Gallery Image Type
// ============================================================
export interface GalleryImage {
  id: string;
  src: string; // base64 data URL or external URL
  title: string;
  caption: string;
  category: string;
  uploadedAt: string;
}

// ============================================================
// Admin Context Type
// ============================================================
interface AdminContextType {
  // Data
  adminProducts: Product[];
  adminBlogs: BlogPost[];
  galleryImages: GalleryImage[];

  // Product CRUD
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  // Blog CRUD
  addBlog: (blog: BlogPost) => void;
  updateBlog: (id: string, blog: Partial<BlogPost>) => void;
  deleteBlog: (id: string) => void;

  // Gallery CRUD
  addGalleryImage: (image: GalleryImage) => void;
  deleteGalleryImage: (id: string) => void;

  // Loading state
  isLoaded: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// ============================================================
// Local Storage Keys
// ============================================================
const LS_PRODUCTS = "ira_admin_products";
const LS_BLOGS = "ira_admin_blogs";
const LS_GALLERY = "ira_admin_gallery";
const LS_INITIALIZED = "ira_admin_initialized";

// ============================================================
// Provider
// ============================================================
export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [adminProducts, setAdminProducts] = useState<Product[]>([]);
  const [adminBlogs, setAdminBlogs] = useState<BlogPost[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from localStorage or static data
  useEffect(() => {
    try {
      const initialized = localStorage.getItem(LS_INITIALIZED);

      if (initialized) {
        // Load from localStorage
        const storedProducts = localStorage.getItem(LS_PRODUCTS);
        const storedBlogs = localStorage.getItem(LS_BLOGS);
        const storedGallery = localStorage.getItem(LS_GALLERY);

        setAdminProducts(storedProducts ? JSON.parse(storedProducts) : staticProducts);
        setAdminBlogs(storedBlogs ? JSON.parse(storedBlogs) : staticBlogs);
        setGalleryImages(storedGallery ? JSON.parse(storedGallery) : []);
      } else {
        // First time — seed from static data
        setAdminProducts(staticProducts);
        setAdminBlogs(staticBlogs);
        setGalleryImages([]);

        localStorage.setItem(LS_PRODUCTS, JSON.stringify(staticProducts));
        localStorage.setItem(LS_BLOGS, JSON.stringify(staticBlogs));
        localStorage.setItem(LS_GALLERY, JSON.stringify([]));
        localStorage.setItem(LS_INITIALIZED, "true");
      }
    } catch {
      // Fallback to static data if localStorage fails
      setAdminProducts(staticProducts);
      setAdminBlogs(staticBlogs);
      setGalleryImages([]);
    }
    setIsLoaded(true);
  }, []);

  // Persist helpers
  const persistProducts = useCallback((data: Product[]) => {
    localStorage.setItem(LS_PRODUCTS, JSON.stringify(data));
  }, []);

  const persistBlogs = useCallback((data: BlogPost[]) => {
    localStorage.setItem(LS_BLOGS, JSON.stringify(data));
  }, []);

  const persistGallery = useCallback((data: GalleryImage[]) => {
    localStorage.setItem(LS_GALLERY, JSON.stringify(data));
  }, []);

  // ── Product CRUD ──
  const addProduct = useCallback((product: Product) => {
    setAdminProducts((prev) => {
      const next = [product, ...prev];
      persistProducts(next);
      return next;
    });
  }, [persistProducts]);

  const updateProduct = useCallback((id: string, updates: Partial<Product>) => {
    setAdminProducts((prev) => {
      const next = prev.map((p) => (p.id === id ? { ...p, ...updates } : p));
      persistProducts(next);
      return next;
    });
  }, [persistProducts]);

  const deleteProduct = useCallback((id: string) => {
    setAdminProducts((prev) => {
      const next = prev.filter((p) => p.id !== id);
      persistProducts(next);
      return next;
    });
  }, [persistProducts]);

  // ── Blog CRUD ──
  const addBlog = useCallback((blog: BlogPost) => {
    setAdminBlogs((prev) => {
      const next = [blog, ...prev];
      persistBlogs(next);
      return next;
    });
  }, [persistBlogs]);

  const updateBlog = useCallback((id: string, updates: Partial<BlogPost>) => {
    setAdminBlogs((prev) => {
      const next = prev.map((b) => (b.id === id ? { ...b, ...updates } : b));
      persistBlogs(next);
      return next;
    });
  }, [persistBlogs]);

  const deleteBlog = useCallback((id: string) => {
    setAdminBlogs((prev) => {
      const next = prev.filter((b) => b.id !== id);
      persistBlogs(next);
      return next;
    });
  }, [persistBlogs]);

  // ── Gallery CRUD ──
  const addGalleryImage = useCallback((image: GalleryImage) => {
    setGalleryImages((prev) => {
      const next = [image, ...prev];
      persistGallery(next);
      return next;
    });
  }, [persistGallery]);

  const deleteGalleryImage = useCallback((id: string) => {
    setGalleryImages((prev) => {
      const next = prev.filter((img) => img.id !== id);
      persistGallery(next);
      return next;
    });
  }, [persistGallery]);

  return (
    <AdminContext.Provider
      value={{
        adminProducts,
        adminBlogs,
        galleryImages,
        addProduct,
        updateProduct,
        deleteProduct,
        addBlog,
        updateBlog,
        deleteBlog,
        addGalleryImage,
        deleteGalleryImage,
        isLoaded,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
