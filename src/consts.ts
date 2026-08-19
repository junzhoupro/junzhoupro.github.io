export const SITE_TITLE = 'Jun Zhou';
export const SITE_DESCRIPTION = 'Computer graphics researcher based in China. Formerly a Postdoc Associate at the Yale Graphics Group.';

export const CV_URL = '';

/** Homepage portrait. Use a `/` path for files in `public/`. */
export const PORTRAIT_PHOTOS: ReadonlyArray<{ src: string; alt: string }> = [
	{ src: '/avatar.png', alt: 'Jun Zhou' },
];

/**
 * Optional album captions / order. Other files in `src/assets/photos/` are included automatically.
 * Use a `/` path for files in `public/`.
 */
export const ALBUM_PHOTOS: ReadonlyArray<{ src: string; alt: string; caption?: string }> = [];

export const CONTACT = {
  location: 'China',
  emailUser: 'junzhou.723',
  emailHost: 'gmail',
  emailTld: 'com',
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter' | 'orcid';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'GitHub',
    href: 'https://github.com/junzhoupro',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/junzhou-ai',
    icon: 'linkedin',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0000-0003-2595-0339',
    icon: 'orcid',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Astro Scholar',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};

export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
