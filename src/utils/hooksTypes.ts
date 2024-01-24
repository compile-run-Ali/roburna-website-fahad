interface icommon {
  id: number;
  created_at: string;
  updated_at: string;
}
export interface iFAQs extends icommon {
  answer: string;
  image: string;
  question: string;
}

export interface iLAB extends icommon {
  description: string;
  image: string;
  link: string;
  title: string;
}

export interface iProject extends icommon {
  description: string;
  image: string;
  project_link: string;
  sub_title: string;
  title: string;
}

export interface iwhitepaper extends icommon {
  question: string;
  answer: string;
}
export interface iwhitepaperbanner extends icommon {
  description: string;
  image: string;
  title: string;
}
export interface iDisclaimer extends icommon {
  disclaimer: string;
}
export interface iTerm extends icommon {
  terms: string;
}
export interface iBanner extends icommon {
  description: string;
  image: string;
  title: string;
}
export interface iFeature extends icommon {
  description: string;
  image: string;
  title: string;
  link: string;
}
