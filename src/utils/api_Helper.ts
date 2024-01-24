export interface waitingList {
  name: string;
  email: string;
  country: string;
  age: string;
  income_range: string;
  relationship_with_defi: string;
  interest_in_defi: string;
  relationship_with_roburna: string;
  interest_in_arborswap: string;
  message: string;
  newsletter_roburna: string;
  allow_data_use: string;
  gender: string;
}
export interface walletwaitingList {
  name: string;
  email: string;
  country: string;
  age: string;
  income_range: string;
  crypto_wallet: string;
  primarily_using_wallet: string;
  relationship_with_roburna: string;
  plan_to_use_roburna_wallet: string;
  message: string;
  newsletter_roburna: string;
  allow_data_use: string;
  gender: string;
}

interface Responseblogs {
  data: any[];
  message: string;
  status: boolean;
}
interface Responseupdates {
  data: any[];
  message: string;
  status: boolean;
}

export interface ContactInfo {
  name: string;
  email: string;
  option: string;
  message: string;
}

const BASE_URL = "https://api.roburna.com/api/v1";
export const updatesData = async (): Promise<Responseupdates> => {
  const response = await fetch(`${BASE_URL}/updates`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const blogData = async (): Promise<Responseblogs> => {
  const response = await fetch(`${BASE_URL}/blogs`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};
export const searchblogs = async (
  category: String,
  title?: string
): Promise<Responseblogs> => {
  const response = await fetch(`${BASE_URL}/search_blog`, {
    method: "POST",
    body: JSON.stringify({
      category,
      blog_title: title,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};
export const categories = async (): Promise<Responseblogs> => {
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const blogByID = async (
  id: string | undefined,
  title: string | undefined
) => {
  const response = await fetch(`${BASE_URL}/blog_detail/${id}/${title}`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const contactUs = async (
  data: Partial<ContactInfo>
): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/contact_roburna`, {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      type: data.option,
      message: data.message,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result.status;
};
export const subscriptionUser = async (useremail: string): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/contact_roburna`, {
    method: "POST",
    body: JSON.stringify({
      name: null,
      email: useremail,
      type: null,
      message: null,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result.status;
};
export const newsLetter = async (useremail: string): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/newsletter`, {
    method: "POST",
    body: JSON.stringify({ email: useremail }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result.status;
};

export const postListWaiting = async (input: Partial<waitingList>) => {
  const response = await fetch(`${BASE_URL}/signup_waiting_list`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  console.log("rea", result);
  return result.status;
};
export const postwalletWaiting = async (input: Partial<walletwaitingList>) => {
  const response = await fetch(`${BASE_URL}/signup_roburna_wallet`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  console.log("rea", result);
  return result.status;
};

export const fetchFAQ = async () => {
  const response = await fetch(`${BASE_URL}/faq`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
export const fetchLAB = async () => {
  const response = await fetch(`${BASE_URL}/lab`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
export const whitepaperbannerLAB = async () => {
  const response = await fetch(`${BASE_URL}/whitepaper_banner`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  console.log(result);
  return result;
};
export const fetchProject = async () => {
  const response = await fetch(`${BASE_URL}/project`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
export const fetchwhitePaper = async () => {
  const response = await fetch(`${BASE_URL}/whitepaper`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
export const fetchDisclaimer = async () => {
  const response = await fetch(`${BASE_URL}/disclaimer`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
export const fetchTermAndCondition = async () => {
  const response = await fetch(`${BASE_URL}/terms_and_condition`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
export const fetchAbout = async () => {
  const response = await fetch(`${BASE_URL}/about`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
export const fetchFeature = async () => {
  const response = await fetch(`${BASE_URL}/feature`);
  if (!response.ok) throw new Error(await response.text());
  const result = await response.json();
  return result;
};
