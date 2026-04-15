export const slos = [
  {
    id: 'slo1',
    code: 'SLO 1',
    title: 'Data Collection, Storage & Access',
    description:
      'Identify and leverage applicable technologies to collect, store, and access data across a range of sources, formats, and scales.',
    projects: ['preprint-bot', 'github-agent'],
  },
  {
    id: 'slo2',
    code: 'SLO 2',
    title: 'Actionable Insight Across Contexts',
    description:
      'Create actionable insight across societal, business, and political contexts using data and the full data science life cycle.',
    projects: ['rideshare', 'flight-delay'],
  },
  {
    id: 'slo3',
    code: 'SLO 3',
    title: 'Visualization & Predictive Modeling',
    description:
      'Apply visualization techniques and predictive models to help generate actionable insight from complex data.',
    projects: ['rideshare', 'music-analyzer', 'flight-delay'],
  },
  {
    id: 'slo4',
    code: 'SLO 4',
    title: 'Programming for Data Science',
    description:
      'Use programming languages such as R and Python to support the generation of actionable insight from data.',
    projects: ['preprint-bot', 'rideshare', 'github-agent', 'flight-delay', 'music-analyzer', 'fake-news'],
  },
  {
    id: 'slo5',
    code: 'SLO 5',
    title: 'Communication of Insights',
    description:
      'Communicate insights gained via visualization and analytics to a broad range of audiences, including project sponsors and technical team leads.',
    projects: ['rideshare', 'music-analyzer'],
  },
  {
    id: 'slo6',
    code: 'SLO 6',
    title: 'Ethics in Data Science',
    description:
      'Apply ethics in the development, use, and evaluation of data and predictive models — including considerations of fairness, bias, transparency, and privacy.',
    projects: ['fake-news', 'preprint-bot'],
  },
]

export const projects = [
  {
    id: 'preprint-bot',
    title: 'Preprint Bot',
    tagline: 'Production arXiv research recommendation engine',
    year: '2024–2025',
    tags: ['NLP', 'RAG', 'FAISS', 'Production', 'LLM'],
    summary:
      'An academic research paper recommendation system processing 800+ papers daily using transformer-based embeddings and FAISS similarity search. Serves 8K+ personalized researcher summaries per month with 92% retrieval precision across a corpus of 10K+ documents.',
    description: `Researchers face a genuine problem: arXiv publishes hundreds of new papers every single day, and keeping up manually is impossible. Preprint Bot solves this by automating the entire discovery-to-digest pipeline — researchers create profiles with keywords and categories, upload their own papers, and receive personalized recommendations based on semantic similarity to newly published preprints.

The system is built on a FastAPI backend with asyncpg connection pooling and a 17-table PostgreSQL schema extended with pgvector for vector similarity search. Papers are fetched from the arXiv API, PDFs are parsed using GROBID for section-level text extraction, and sentence-transformer embeddings (all-MiniLM-L6-v2, 384 dimensions) are stored in PostgreSQL with an IVFFlat index for efficient nearest-neighbor queries. A daily pipeline runs via APScheduler — timed to fire one hour after arXiv's 8PM EST publication window — fetching the previous day's submissions, embedding them, matching them against user profiles using FAISS, and generating LLM-powered summaries.

The system supports both corpus mode (ingesting arXiv papers by category) and user mode (processing researcher-uploaded PDFs). Email digests are delivered automatically via SMTP. A Streamlit frontend handles profile management, paper uploads, recommendation browsing, and filtering by date, score, and category. The test suite covers 64+ unit tests across embedding, extraction, similarity, and schema validation.

At scale: 800+ papers ingested daily, 8,000+ personalized monthly summaries, 92% retrieval precision across a 10,000+ document corpus, deployed on a production Linux VM with 24/7 uptime and zero manual intervention.`,
    tech: ['FastAPI', 'asyncpg', 'pgvector', 'PostgreSQL', 'APScheduler', 'Sentence Transformers', 'FAISS', 'GROBID', 'Streamlit', 'Python'],
    slos: ['slo1', 'slo4', 'slo6'],
    impact: '8,000+ monthly summaries · 92% retrieval precision · 85% reduction in curation time · 24/7 production deployment',
    github: 'https://github.com/SyracuseUniversity/preprint-bot',
  },
  {
    id: 'rideshare',
    title: 'Rideshare Demand Forecasting',
    tagline: 'Real-time ML system with dynamic surge pricing',
    year: '2024',
    tags: ['LightGBM', 'Redis', 'Streamlit', 'Forecasting', 'FastAPI'],
    summary:
      'Production ML system forecasting zone-level ride demand at 5-minute intervals using LightGBM, achieving 4.82 RMSE with 35ms API latency. Features a dynamic surge pricing engine and a live city-grid visualization dashboard.',
    description: `This project tackles a core operational challenge for rideshare platforms: predicting where demand will spike before it happens, and pricing dynamically to balance supply and demand in real time.

The system performs two core tasks. First, it forecasts next-5-minute ride demand per city zone using a LightGBM regression model trained on rolling features: 1-minute and 5-minute demand windows, demand growth trend, supply availability, utilization ratio, weather flags, and event indicators. Second, it computes dynamic surge multipliers using a policy function: ratio = predicted_demand / (supply_now + 1), then surge = clamp(1 + α·ratio + β·weather + γ·event, 1.0, 3.0).

The pipeline runs in two modes — simulation mode generates synthetic ride events with configurable supply-demand dynamics, while replay mode processes real NYC taxi trip data (sampled parquet files) to reproduce authentic demand spikes and evaluate surge labels. Redis serves as the in-memory zone state store, continuously updated by a streaming-style online aggregator that maintains rolling feature windows per zone. A FastAPI service exposes inference endpoints with ~35ms average latency. A Streamlit dashboard provides a live city grid colored by surge multiplier, per-zone drill-down charts, forecast vs. actual demand visualization, and interactive controls for rush hour, rain, and event toggles.

The full stack is containerized with Docker Compose: Redis, FastAPI, event simulator, and Streamlit dashboard all run as separate services. Model RMSE: 4.82 rides at 5-minute horizon.`,
    tech: ['LightGBM', 'Redis', 'Streamlit', 'FastAPI', 'Docker', 'Pandas', 'NumPy', 'scikit-learn', 'Python'],
    slos: ['slo2', 'slo3', 'slo4', 'slo5'],
    impact: '4.82 RMSE · 35ms API latency · real-time surge pricing · full Docker orchestration',
    github: 'https://github.com/xseven1/ride-surge-forecasting',
  },
  {
    id: 'github-agent',
    title: 'GitHub Repository Assistant',
    tagline: 'LangChain ReAct agent for codebase Q&A',
    year: '2024',
    tags: ['LangChain', 'ReAct', 'RAG', 'Agents', 'OpenAI'],
    summary:
      'Generative AI powered GitHub repository analysis tool using LangChain ReAct agents to answer natural language questions about repository history, PRs, and codebase evolution. 87% answer accuracy across 200+ test queries.',
    description: `Developer tools that understand code at a semantic level — not just syntactically — are one of the more compelling applications of LLMs. This project builds a question-answering agent over GitHub repositories: ask it "where is authentication handled?" or "what changed in the payment module last month?" and it reasons through the answer using actual repository content.

The system ingests a GitHub repository by cloning it, chunking source files by language-aware boundaries, and embedding chunks using OpenAI embeddings stored in ChromaDB. A LangChain ReAct agent handles queries by orchestrating multiple tools: a retrieval tool for semantic search over the codebase, a Git history tool for commit and PR lookups, and a reasoning chain for synthesizing multi-step answers.

Evaluation against 200+ test queries spanning code explanation, architectural questions, and change history achieved 87% answer accuracy. Key engineering decisions: retrieval chunks sized at 512 tokens with 64-token overlap for better context preservation; a hallucination reduction strategy that grounds every answer in retrieved source passages; and response latency optimization that brought end-to-end latency from 4.2s to 1.8s through parallel retrieval and prompt compression.`,
    tech: ['LangChain', 'ChromaDB', 'OpenAI Embeddings', 'FastAPI', 'Streamlit', 'Python'],
    slos: ['slo1', 'slo4'],
    impact: '87% answer accuracy · 35% lower hallucination rate · 1.8s response latency',
    github: 'https://github.com/xseven1/Repository-Analyzer',
  },
  {
    id: 'flight-delay',
    title: 'Flight Delay Prediction',
    tagline: 'Comparative ML study across five algorithms',
    year: '2024',
    tags: ['XGBoost', 'Random Forest', 'MLP', 'scikit-learn', 'EDA'],
    summary:
      'Comparative ML study predicting flight delays using historical aviation data. Benchmarked five algorithms — XGBoost, Random Forest, AdaBoost, MLP, and Naive Bayes — across balanced and imbalanced dataset configurations with full EDA.',
    description: `Flight delays cost the US aviation industry billions annually and affect millions of passengers. This project approaches delay prediction as a structured ML classification problem: given flight schedule, airline, origin/destination, and weather data, can we reliably predict whether a flight will be delayed?

The dataset combines historical flight schedules with weather conditions and airline-specific information. The pipeline covers the full data science life cycle: exploratory data analysis to understand delay distributions and correlations, feature engineering for time-based variables (hour of day, day of week, seasonal patterns) and categorical encodings, and train/test splits across both the raw imbalanced dataset and an oversampled balanced version to assess how class imbalance affects each algorithm.

Five algorithms were benchmarked: XGBoost, Random Forest, AdaBoost, a Multi-Layer Perceptron neural network, and Naive Bayes. Each was evaluated on accuracy, precision, recall, and F1-score across both dataset configurations. The comparison reveals how tree-based ensembles handle class imbalance differently from neural approaches, and where the Naive Bayes baseline is surprisingly competitive. The project emphasizes that algorithm selection should be driven by empirical comparison on the specific dataset, not prior assumptions.`,
    tech: ['XGBoost', 'Random Forest', 'AdaBoost', 'MLP', 'Naive Bayes', 'scikit-learn', 'pandas', 'matplotlib', 'Python'],
    slos: ['slo2', 'slo3', 'slo4'],
    impact: 'Five-algorithm benchmark · balanced + imbalanced evaluation · full EDA pipeline',
    github: 'https://github.com/xseven1/Flight-Delay-Prediction',
  },
  {
    id: 'music-analyzer',
    title: 'Music Album Narrative Analyzer',
    tagline: 'Local LLM application for lyrical theme analysis',
    year: '2024',
    tags: ['Local LLM', 'RAG', 'ChromaDB', 'Streamlit', 'Ollama'],
    summary:
      'A fully local RAG application that analyzes storytelling structure, recurring themes, and emotional arcs across album lyrics using Qwen 2.5 14B via Ollama — no cloud API required.',
    description: `This project started with a question: can a locally-run LLM do meaningful creative analysis without any cloud dependency? The domain — album lyric interpretation — is intentionally subjective and open-ended, which makes it a good stress test for both retrieval quality and generation quality.

The system is split into a backend and frontend. The backend fetches lyrics from the Genius API for a given album, chunks them by song and verse, embeds them using sentence-transformers, and stores vectors in ChromaDB for local retrieval. When a user asks a question ("What themes run through this album?" / "How does the narrator's emotional state change across tracks?"), the system retrieves the most semantically relevant lyric passages and passes them as context to Qwen 2.5 14B running locally via Ollama. The entire generation pipeline runs on-device — no OpenAI API, no cloud costs, no data leaving the machine.

The frontend is a Streamlit app that handles album search, displays retrieved lyric passages alongside the generated analysis, and lets users drill into specific themes or songs. The project demonstrated that local 14B-parameter models can produce coherent, source-grounded creative analysis — with the right retrieval setup, the bottleneck is retrieval quality, not model capability.`,
    tech: ['Qwen 2.5 14B', 'Ollama', 'ChromaDB', 'LangChain', 'Genius API', 'Streamlit', 'sentence-transformers', 'FastAPI', 'Python'],
    slos: ['slo3', 'slo4', 'slo5'],
    impact: 'Fully local inference · zero cloud costs · any album on demand',
    github: 'https://github.com/xseven1/album-narrator',
  },
  {
    id: 'fake-news',
    title: 'Fake News Detection',
    tagline: 'NLP classifier deployed on Amazon SageMaker',
    year: '2024',
    tags: ['SageMaker', 'LSTM', 'RNN', 'AWS S3', 'NLP'],
    summary:
      'Fake news detection system built and deployed on Amazon SageMaker, comparing Naive Bayes, RNN, and LSTM architectures across a full AWS pipeline with data stored in S3.',
    description: `Misinformation is one of the defining challenges of the information age. This project builds a fake news detection pipeline that compares three model architectures — from a classical baseline to sequence models — to understand where different approaches succeed and fail on this task.

The workflow is split across three notebooks and two training scripts. Data exploration and S3 integration covers loading the dataset, performing EDA on label distributions and text characteristics, and uploading processed data to Amazon S3. A separate notebook handles text shaping for sequence models: tokenization, vocabulary construction, padding, and sequence truncation to prepare inputs for RNN and LSTM architectures. Model building and evaluation covers all three architectures — Naive Bayes (TF-IDF features via scikit-learn), a vanilla RNN (Keras), and an LSTM (Keras with Keras embeddings) — with training managed via Amazon SageMaker and artifacts stored in S3.

The LSTM and RNN models are trained using dedicated scripts (train_keras_lstm.py and train_sklearn_nb.py) compatible with SageMaker's training job API. Evaluation compares accuracy across all three approaches. The project raises important questions about what text features each architecture actually uses to make predictions — and whether high accuracy reflects genuine understanding or surface-level pattern matching, which matters significantly in a misinformation context.`,
    tech: ['Amazon SageMaker', 'Amazon S3', 'Keras', 'LSTM', 'RNN', 'Naive Bayes', 'scikit-learn', 'Python'],
    slos: ['slo2', 'slo4', 'slo6'],
    impact: 'Three-architecture comparison · SageMaker deployment · full AWS pipeline',
    github: 'https://github.com/xseven1/Fake-News-Prediction',
  },
]