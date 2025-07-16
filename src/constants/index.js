export const myProjects = [
  {
    id: 1,
    title: "Drug-Drug Interaction (GNN)",
    description: "Predicts potential drug-drug interactions using Graph Neural Networks on DrugBank data.",
    subDescription: [
      "Built with PyTorch, DeepChem, and SMILES molecular graphs.",
      "Improves safety in prescribing by revealing hidden reaction risks."
    ],
    href: "https://gnn-ddi.streamlit.app/",
    image: "assets/ddi-preview.png",
    tags: ["GNN", "PyTorch", "Streamlit"]
  },
  {
    id: 2,
    title: "Chemo-Response Predictor",
    description: "Predicts chemotherapy response using gene expression & clinical biomarkers.",
    subDescription: [
      "Built with Scikit-learn and Pandas, deployed via Streamlit.",
      "Aids oncologists in treatment personalization."
    ],
    href: "https://chemo-response-predictor.streamlit.app/",
    image: "assets/chemo-preview.png",
    tags: ["Scikit-learn", "Pandas", "Streamlit"]
  },
  {
    id: 3,
    title: "Medicine Recommender System",
    description: "Recommends personalized medicines based on symptoms and patient feedback.",
    subDescription: [
      "Uses NLP + TF-IDF similarity matching to find best-fit meds.",
      "Reduces trial-and-error in prescriptions."
    ],
    href: "https://personalised-medicine-recommendation-system.streamlit.app/",
    image: "assets/medrec-preview.png",
    tags: ["NLP", "TF-IDF", "Streamlit"]
  },
  {
    id: 4,
    title: "Multi-Omics Alzheimer Diagnosis",
    description: "Classifies Alzheimer’s stage by fusing genomics, proteomics, and metabolomics data.",
    subDescription: [
      "Uses graph fusion with attention across omics layers.",
      "Improves early detection and classification of Alzheimer's disease."
    ],
    href: "https://multi-omics-alzheimer-diagnosis.streamlit.app/",
    image: "assets/alz-preview.png",
    tags: ["Multi-Omics", "Attention", "Streamlit"]
  }
];
