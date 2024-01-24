import { useEffect, useState } from "react";
import {
  fetchAbout,
  fetchDisclaimer,
  fetchFAQ,
  fetchFeature,
  fetchLAB,
  fetchProject,
  fetchTermAndCondition,
  fetchwhitePaper, whitepaperbannerLAB,
} from "./api_Helper";
import {
  iBanner,
  iDisclaimer,
  iFAQs,
  iFeature,
  iLAB,
  iProject,
  iTerm,
  iwhitepaper, iwhitepaperbanner,
} from "./hooksTypes";

export const useFAQs = () => {
  const [FAQs, setFAQs] = useState<iFAQs[]>([]);

  const getFAQs = async () => {
    try {
      const result = await fetchFAQ();
      setFAQs(result.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getFAQs();
  }, []);

  return FAQs;
};

export const useLAB = () => {
  const [LABs, setLABs] = useState<iLAB>();
  const [projects, setProjects] = useState<iProject[]>([]);
  const getLab = async () => {
    try {
      const result = await fetchLAB();
      setLABs(result.data[0]);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getProject = async () => {
    try {
      const result = await fetchProject();
      setProjects(result.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getLab();
    getProject();
  }, []);

  return { LABs, projects };
};

export const useWhitePaper = () => {
  const [WhitePaper, setWhitePaper] = useState<iwhitepaper[]>([]);
  const [WhitePaperbanner, setWhitePaperBanner] = useState<iwhitepaperbanner[]>([]);

  const getWhitePaper = async () => {
    try {
      const result = await fetchwhitePaper();
      setWhitePaper(result.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const getWhitePaperbanner = async () => {
    try {
      const result = await whitepaperbannerLAB();
      console.log(result)
      setWhitePaperBanner(result.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getWhitePaper();
    getWhitePaperbanner();
  }, []);

  return {WhitePaper,WhitePaperbanner};
};

export const useDisclaimer = () => {
  const [disclaimer, setDisclaimer] = useState<iDisclaimer>();

  const getDisclaimer = async () => {
    try {
      const result = await fetchDisclaimer();
      setDisclaimer(result.data[0]);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getDisclaimer();
  }, []);

  return disclaimer;
};
export const useTermAndCondition = () => {
  const [terms, setTerms] = useState<iTerm>();

  const getTermAndCondition = async () => {
    try {
      const result = await fetchTermAndCondition();
      setTerms(result.data[0]);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getTermAndCondition();
  }, []);

  return terms;
};
export const useHomeBanner = () => {
  const [banner, setBanner] = useState<iBanner>();
  const [features, setFeatures] = useState<iFeature[]>([]);

  const getData = async () => {
    try {
      const result = await fetchAbout();
      setBanner(result.data[0]);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getFeature = async () => {
    try {
      const result = await fetchFeature();
      console.log("result", result);
      setFeatures(result.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
    getFeature();
  }, []);

  return { banner, features };
};
