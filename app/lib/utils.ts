/**
 * Utility functions for the application
 */

/**
 * Combines multiple class names, filtering out falsy values
 */
export function classNames(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generates a responsive breakpoint string for Tailwind
 */
export function responsive(mobile: string, tablet: string, desktop: string): string {
  return `${mobile} md:${tablet} lg:${desktop}`;
}

/**
 * Formats a phone number
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Scrolls to an element with smooth behavior
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
