import React, { useEffect, useState } from "react";
import Stacks from "@/components/layouts/Stacks";
import { supabase } from "../lib/supabaseClient";

function formatProjectDate(value) {
  if (!value) return "";
  const d = new Date(value);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

const skeletonItems = Array.from({ length: 6 });

const Showroom = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select(
            "id, title, href, img_banner, description, project_date, category, tech_stacks"
          )
          .order("project_date", { ascending: false });

        if (error) throw error;
        if (!isMounted) return;

        const normalized = (data || []).map((item) => ({
          id: item.id,
          title: item.title,
          href: item.href || "#",
          imgBanner: item.img_banner,
          description: item.description,
          projectDate: item.project_date,
          category: item.category,
          techStacks: item.tech_stacks || [],
        }));

        setProjects(normalized);
      } catch (err) {
        setError(err.message || "Failed to load projects");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative pt-64 overflow-hidden">
          <img
            className="absolute top-0 left-0 -z-10 w-full max-h-72 object-cover rounded-t-2xl"
            src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="w-full h-72 max-h-72 bg-gradient-to-t -z-10 from-white dark:from-neutral-900 absolute top-0 -left-0" />
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl dark:text-neutral-200">
              The Showroom
            </h2>
            <p className="mt-6 text-base leading-8 dark:text-neutral-300">
              Step into a showcase of innovative web solutions and thoughtfully
              crafted UI/UX designs, where creativity meets functionality.
            </p>
          </div>
        </div>
      </section>

      <Stacks />

      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-neutral-200">
              Web Projects
            </h3>

            <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              {error && (
                <li className="col-span-full text-sm text-red-500">
                  {error}
                </li>
              )}

              {loading
                ? skeletonItems.map((_, index) => (
                    <li key={index}>
                      <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                      <div className="mt-4 flex items-center gap-x-4 text-xs">
                        <div className="h-3 w-20 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                        <div className="h-6 w-24 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse" />
                      </div>
                      <div className="mt-2 h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                      <div className="mt-3 h-10 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                      <ul className="mt-3 flex flex-wrap gap-4">
                        <li>
                          <div className="inline-flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 aspect-square h-10 rounded-full animate-pulse" />
                        </li>
                        <li>
                          <div className="inline-flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 aspect-square h-10 rounded-full animate-pulse" />
                        </li>
                        <li>
                          <div className="inline-flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 aspect-square h-10 rounded-full animate-pulse" />
                        </li>
                      </ul>
                    </li>
                  ))
                : projects.map((project) => (
                    <li key={project.id}>
                      <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                        <img
                          src={project.imgBanner}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="mt-4 flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={project.projectDate}
                          className="text-gray-500 dark:text-neutral-300"
                        >
                          {formatProjectDate(project.projectDate)}
                        </time>
                        {project.category && (
                          <a
                            href={project.category.href || "#"}
                            className="relative z-10 rounded-full bg-gray-50 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {project.category.title}
                          </a>
                        )}
                      </div>

                      <h4 className="mt-2 text-sm font-medium text-slate-900 dark:text-neutral-200 group-hover:text-indigo-600">
                        <a href={project.href || "#"} target="_blank" rel="noreferrer">
                          <span className="relative">{project.title}</span>
                        </a>
                      </h4>

                      <p className="relative py-4 text-xs font-medium text-slate-500 dark:text-neutral-300 line-clamp-2">
                        {project.description}
                      </p>

                      {project.techStacks && project.techStacks.length > 0 && (
                        <ul className="mt-1.5 flex flex-wrap gap-4">
                          {project.techStacks.map((stack, index) => (
                            <li key={index}>
                              <button
                                type="button"
                                className="inline-flex items-center justify-center bg-white dark:bg-neutral-800 aspect-square h-10 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <img
                                  src={stack.imgLogoUrl}
                                  alt={stack.altText}
                                  className="h-5 w-5 object-scale-down"
                                  loading="lazy"
                                />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showroom;
