import { ReactNode } from 'react';

interface IWidgetContainerProps {
  children: ReactNode; // Default property
  error?: any;
  loading?: boolean;
  fallbackSkeleton?: ReactNode;
  isEmptyData?: boolean;
}

export function WidgetContainer({
  error,
  loading,
  children,
  fallbackSkeleton,
  isEmptyData,
}: IWidgetContainerProps) {
  if (loading && fallbackSkeleton) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{fallbackSkeleton}</>;
  }

  if (loading) {
    return <p className="text-2xl text-center text-blue-400 dark:text-gray-400">Loading...</p>;
  }

  if (error || isEmptyData) {
    return <p className="text-2xl text-center text-blue-400 dark:text-gray-400">No Data available</p>;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
