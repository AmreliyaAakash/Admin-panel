import React from 'react';

export const CardSkeleton = () => (
  <div className="bg-white dark:bg-secondary-dark-bg h-44 rounded-2xl md:w-56 p-4 pt-9 m-3 animate-pulse">
    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-4 animate-shimmer"></div>
    <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700 mb-2 animate-shimmer"></div>
    <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700 animate-shimmer"></div>
  </div>
);

export const ChartSkeleton = () => (
  <div className="bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-800 h-96 animate-pulse">
    <div className="flex justify-between items-center mb-10">
      <div className="h-8 w-40 rounded bg-gray-200 dark:bg-gray-700 animate-shimmer"></div>
      <div className="flex gap-4">
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700 animate-shimmer"></div>
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700 animate-shimmer"></div>
      </div>
    </div>
    <div className="flex gap-10 h-64">
      <div className="w-1/3 flex flex-col gap-8 border-r-1 border-color pr-10">
        <div className="h-10 w-full rounded bg-gray-200 dark:bg-gray-700 animate-shimmer"></div>
        <div className="h-10 w-full rounded bg-gray-200 dark:bg-gray-700 animate-shimmer"></div>
        <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-700 animate-shimmer"></div>
      </div>
      <div className="w-2/3 rounded bg-gray-100 dark:bg-gray-800 animate-shimmer"></div>
    </div>
  </div>
);

const Skeleton = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}

export default Skeleton;
