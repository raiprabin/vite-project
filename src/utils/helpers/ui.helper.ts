import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}




type BreadCrumbItem = {
  id: number;
  link: string;
  label: string;
};


/**
 * The function generates breadcrumb items with IDs, links, and labels based on the provided arrays of
 * links and labels.
 * @param {string[]} links - An array of strings representing the links for each breadcrumb item. Each
 * string should be a valid URL or path.
 * @param {string[]} labels - An array of strings representing the labels for each breadcrumb item.
 * @returns an array of `BreadCrumbItem` objects.
 */
export function generatePathForBreadcrumb(
  links: string[],
  labels: string[],
): BreadCrumbItem[] {
  if (links.length !== labels.length) {
    throw new Error('Links and labels arrays must have the same length.');
  }

  const menuItems: BreadCrumbItem[] = links.map((link, index) => ({
    id: index,
    link,
    label: labels[index],
  }));

  return menuItems;
}
