import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['az', 'ru'];
export const defaultLocale = 'az';
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});