import { Metadata } from 'next';

import { getClientConfig } from '@/config/client';
import { getServerConfig } from '@/config/server';
import { OFFICIAL_URL } from '@/const/url';

import pkg from '../../package.json';

const title = 'AIHUB';
const { description, homepage } = pkg;

const { SITE_URL = OFFICIAL_URL } = getServerConfig();
const { BASE_PATH } = getClientConfig();

// if there is a base path, then we don't need the manifest
const noManifest = !!BASE_PATH;

const metadata: Metadata = {
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title,
  },
  description,
  icons: {
    apple:
      'https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/apple-touch-icon.png',
    icon: 'https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/favicon-32x32.png',
    shortcut:
      'https://registry.npmmirror.com/@lobehub/assets-favicons/latest/files/assets/favicon.ico',
  },
  manifest: noManifest ? undefined : '/manifest.json',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description: description,
    images: [
      {
        alt: title,
        height: 360,
        url: 'https://aihubchat.s3.ir-thr-at1.arvanstorage.ir/Screenshot-from-2024-04-15-22-47-39.png',
        width: 480,
      },
      {
        alt: title,
        height: 720,
        url: 'https://aihubchat.s3.ir-thr-at1.arvanstorage.ir/Screenshot-from-2024-04-15-22-47-39.png',
        width: 960,
      },
    ],
    locale: 'en-US',
    siteName: title,
    title: title,
    type: 'website',
    url: homepage,
  },

  title: {
    default: title,
    template: '%s · AIHUB',
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: [
      'https://aihubchat.s3.ir-thr-at1.arvanstorage.ir/Screenshot-from-2024-04-15-22-47-39.png',
    ],
    site: '@lobehub',
    title,
  },
};

export default metadata;
