// src/components/Timeline.jsx
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function formatMonthYear(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

function formatYear(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.getFullYear();
}

function ExperiencesSkeleton() {
  return (
    <ul className="divide-y dark:divide-neutral-800">
      {[1, 2, 3].map((id) => (
        <li key={id} className="py-8 flex gap-4 items-start animate-pulse">
          <div className="h-14 w-14 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex-1 space-y-3">
            <div className="h-5 w-40 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-64 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-3 w-44 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-3 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="mt-4 flex gap-3">
              {[1, 2, 3, 4].map((k) => (
                <div
                  key={k}
                  className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800"
                />
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function EducationsSkeleton() {
  return (
    <ul className="divide-y dark:divide-neutral-800">
      {[1, 2].map((id) => (
        <li key={id} className="py-8 flex gap-4 items-start animate-pulse">
          <div className="h-14 w-14 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex-1 space-y-3">
            <div className="h-5 w-60 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-48 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-3 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </li>
      ))}
    </ul>
  );
}

const Timeline = () => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [loadingEducations, setLoadingEducations] = useState(true);
  const [errorExperiences, setErrorExperiences] = useState(null);
  const [errorEducations, setErrorEducations] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadExperiences = async () => {
      setLoadingExperiences(true);
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('start_date', { ascending: false });

      if (!isMounted) return;

      if (error) {
        setErrorExperiences(error.message || 'Failed to load experiences.');
        setExperiences([]);
      } else {
        const mapped = (data || []).map((row) => {
          const isCurrentJob = row.end_date === null;
          return {
            id: row.id,
            companyLogo: row.company_logo || {
              imgUrl: '',
              altText: row.organization || '',
            },
            companyName: row.organization || '',
            jobTitle: row.job_title || '',
            jobDescription: row.job_description || '',
            workArrangement: row.work_arrangement || '',
            startDate: row.start_date || null,
            endDate: row.end_date || null,
            isCurrentJob,
            hasTechstacks: Array.isArray(row.tech_stacks) && row.tech_stacks.length > 0,
            techstacks: Array.isArray(row.tech_stacks) ? row.tech_stacks : [],
          };
        });
        setExperiences(mapped);
        setErrorExperiences(null);
      }
      setLoadingExperiences(false);
    };

    const loadEducations = async () => {
      setLoadingEducations(true);
      const { data, error } = await supabase
        .from('educations')
        .select('*')
        .order('end_date', { ascending: false });

      if (!isMounted) return;

      if (error) {
        setErrorEducations(error.message || 'Failed to load education.');
        setEducations([]);
      } else {
        const mapped = (data || []).map((row) => ({
          id: row.id,
          schoolLogo: row.school_logo || {
            imgUrl: '',
            altText: row.school_name || '',
          },
          schoolName: row.school_name || '',
          course: row.course || '',
          courseDescription: row.course_description || '',
          startDate: row.start_date || null,
          endDate: row.end_date || null,
        }));
        setEducations(mapped);
        setErrorEducations(null);
      }
      setLoadingEducations(false);
    };

    loadExperiences();
    loadEducations();

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedExperiences = useMemo(() => {
    const copy = [...experiences];
    copy.sort((a, b) => {
      if (a.isCurrentJob && !b.isCurrentJob) return -1;
      if (!a.isCurrentJob && b.isCurrentJob) return 1;
      const endA = a.endDate ? new Date(a.endDate) : new Date();
      const endB = b.endDate ? new Date(b.endDate) : new Date();
      return endB - endA;
    });
    return copy;
  }, [experiences]);

  const sortedEducations = useMemo(() => {
    const copy = [...educations];
    copy.sort((a, b) => {
      const endA = a.endDate ? new Date(a.endDate) : new Date(0);
      const endB = b.endDate ? new Date(b.endDate) : new Date(0);
      return endB - endA;
    });
    return copy;
  }, [educations]);

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl mt-10 lg:mt-0 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-neutral-100">
              Experiences
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700 dark:text-neutral-300 text-justify lg:text-left">
              Throughout my career as a developer, I&apos;ve embraced each opportunity to
              build, innovate, and solve complex problems. From refining code to crafting
              seamless user experiences, every project has deepened my expertise, pushing
              me to continuously evolve in the ever-changing tech landscape.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            {errorExperiences && (
              <p className="mb-4 text-sm text-red-600 dark:text-red-400">
                {errorExperiences}
              </p>
            )}

            {loadingExperiences ? (
              <ExperiencesSkeleton />
            ) : (
              <ul className="divide-y dark:divide-neutral-800">
                {sortedExperiences.map((experience) => {
                  const formattedStart = formatMonthYear(experience.startDate);
                  const formattedEnd = experience.isCurrentJob
                    ? 'Present'
                    : formatMonthYear(experience.endDate);

                  return (
                    <li
                      key={experience.id}
                      className="py-8 flex gap-4 items-start"
                    >
                      <a href="#" className="shrink-0">
                        <img
                          className="bg-white rounded-lg h-14 w-14 object-contain"
                          src={experience.companyLogo.imgUrl}
                          alt={experience.companyLogo.altText}
                        />
                      </a>
                      <dl>
                        <dt>
                          <h1 className="text-lg font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
                            {experience.jobTitle}
                          </h1>
                          <p className="text-base leading-6">
                            <span className="font-medium underline text-blue-500">
                              {experience.companyName}
                            </span>{' '}
                            ·{' '}
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {experience.workArrangement}
                            </span>
                          </p>
                          <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                            {formattedStart && formattedEnd
                              ? `${formattedStart} - ${formattedEnd}`
                              : formattedStart || formattedEnd || ''}
                          </p>
                        </dt>
                        <dd>
                          <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-justify lg:text-left">
                            {experience.jobDescription}
                          </p>

                          {experience.hasTechstacks && (
                            <div className="mt-8">
                              <ul className="flex flex-wrap gap-4 grayscale dark:grayscale-0">
                                {experience.techstacks.map((stack) => (
                                  <li key={stack.name}>
                                    <img
                                      src={stack.imgUrl}
                                      alt={stack.name}
                                      className="h-8 w-8 object-scale-down"
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </dd>
                      </dl>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-900 dark:text-neutral-100">
              Education
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700 dark:text-neutral-300 text-justify lg:text-left">
              Throughout my academic journey, each school played a vital role in shaping my
              skills and perspective. From foundational learning to advanced concepts,
              these experiences built the framework for my passion, growth, and pursuit of
              excellence in the field.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            {errorEducations && (
              <p className="mb-4 text-sm text-red-600 dark:text-red-400">
                {errorEducations}
              </p>
            )}

            {loadingEducations ? (
              <EducationsSkeleton />
            ) : (
              <ul className="divide-y dark:divide-neutral-800">
                {sortedEducations.map((education) => {
                  const startYear = formatYear(education.startDate);
                  const endYear = formatYear(education.endDate);
                  return (
                    <li
                      key={education.id}
                      className="py-8 flex gap-4 items-start"
                    >
                      <a href="#" className="shrink-0">
                        <img
                          className="bg-white rounded-lg h-14 w-14 object-contain"
                          src={education.schoolLogo.imgUrl}
                          alt={education.schoolLogo.altText}
                        />
                      </a>
                      <dl>
                        <dt>
                          <h1 className="text-lg font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
                            {education.course}
                          </h1>
                          <p className="text-base leading-6">
                            <span className="font-medium underline text-blue-500">
                              {education.schoolName}
                            </span>
                          </p>
                          <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                            {startYear && endYear
                              ? `${startYear} - ${endYear} · Graduated`
                              : startYear || endYear || ''}
                          </p>
                        </dt>
                        {education.courseDescription && (
                          <dd>
                            <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-justify lg:text-left">
                              {education.courseDescription}
                            </p>
                          </dd>
                        )}
                      </dl>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
