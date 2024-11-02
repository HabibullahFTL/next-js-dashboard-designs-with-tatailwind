import { formatDistanceToNow, isValid } from 'date-fns';

export const getFormattedTimeDistance = (date: Date) => {
  const isValidDate = isValid(date);

  if (!isValidDate) return '';

  return formatDistanceToNow(date) + ' ago';
};
