'use client';

import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
  Globe,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Filter,
  AlertCircle,
  Brain,
  Cpu,
  Database,
  Layers,
  Code2,
  Terminal,
  Shield,
  Search,
  BookOpen,
  Bot,
  Eye,
  MessageSquare,
  Wrench,
  Workflow
} from 'lucide-react';

// ==========================================
// AI CAREERS DATA DATASET
// ==========================================
const AI_CAREERS = [
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    icon: Cpu,
    desc: 'Design, build, and deploy predictive models and scalable machine learning systems into production.',
    techs: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Docker'],
    overview: {
      tagline: 'Bridging the gap between data science research and robust, production-grade software engineering.',
      jobTitles: ['ML Engineer', 'Machine Learning Developer', 'AI Systems Engineer'],
      targetIndustries: ['Fintech', 'E-commerce', 'HealthTech', 'SaaS', 'Telecommunications'],
      responsibilities: [
        'Translating data science prototypes into scalable production services.',
        'Optimizing machine learning models for latency, memory, and throughput.',
        'Building data pipelines for continuous training, evaluation, and inference.'
      ]
    },
    ratings: {
      difficulty: { score: 8, detail: 'Demands rigorous command of linear algebra, calculus, algorithms, and software engineering.' },
      competition: { score: 7, detail: 'High interest from applicants, but tempered by strict technical prerequisites.' },
      juniorJobs: { score: 5, detail: 'Entry-level positions are competitive; employers heavily favor practical deployment experience.' },
      accessibility: { score: 6, detail: 'Abundant tutorials, but crossing from theory to production engineering presents steep learning curves.' }
    },
    duration: {
      fundamentals: '4 to 6 Months',
      practicalLabs: '5 to 8 Months',
      entryReady: '9 to 12 Months',
      factors: ['Proficiency in Python and data structures', 'Understanding of calculus and probability', 'Hands-on pipeline building experience']
    },
    salary: {
      kenya: { junior: 'KES 90,000 - 160,000 / mo', mid: 'KES 200,000 - 350,000 / mo', senior: 'KES 400,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$45,000 - $75,000 / yr', mid: '$90,000 - $140,000 / yr', senior: '$150,000+ / yr', source: 'Global AI Compensation Report 2026' }
    },
    stack: {
      Programming: ['Python', 'SQL', 'C++ (Optional)'],
      MachineLearning: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'],
      Deployment: ['Docker', 'Kubernetes', 'FastAPI', 'MLflow']
    },
    juniorMarket: {
      requirements: ['Strong Python coding skills', 'Familiarity with model training and evaluation metrics', 'Experience with Git and cloud APIs'],
      certifications: ['AWS Certified Machine Learning', 'Google Cloud Professional ML Engineer'],
      degreeRequirement: 'Preferred in Computer Science or Mathematics, though strong project portfolios are widely accepted.',
      remoteAvailability: 'Moderate to high for international remote contracts; growing remote tech hubs locally in Nairobi.',
      beginnerChallenges: 'Bridging theoretical algorithm knowledge with actual infrastructure scaling.'
    },
    faqs: [
      { q: 'Is a Master’s degree required for ML Engineering?', a: 'Not strictly required if you possess a strong GitHub portfolio demonstrating end-to-end model deployment.' }
    ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    icon: Bot,
    desc: 'Integrate pre-trained foundation models, LLMs, and vector databases into modern software applications.',
    techs: ['Python', 'LangChain', 'OpenAI APIs', 'Vector DBs', 'RAG'],
    overview: {
      tagline: 'Building intelligent user-facing applications powered by cutting-edge foundation models and APIs.',
      jobTitles: ['AI Application Developer', 'LLM Engineer', 'Generative AI Developer'],
      targetIndustries: ['SaaS Startups', 'Customer Support Tech', 'Enterprise Software', 'EdTech'],
      responsibilities: [
        'Architecting Retrieval-Augmented Generation (RAG) pipelines for enterprise data.',
        'Integrating LLM APIs and prompt optimization frameworks into web applications.',
        'Managing token costs, latency limits, and output guardrails.'
      ]
    },
    ratings: {
      difficulty: { score: 6, detail: 'More accessible than traditional ML engineering if you already have software development skills.' },
      competition: { score: 8, detail: 'Extremely popular role as companies rush to add AI features to existing products.' },
      juniorJobs: { score: 7, detail: 'Strong demand among modern startups looking for agile builders.' },
      accessibility: { score: 8, detail: 'Fast entry path for developers with baseline Python or web development knowledge.' }
    },
    duration: {
      fundamentals: '2 to 3 Months',
      practicalLabs: '3 to 5 Months',
      entryReady: '6 Months',
      factors: ['Existing web dev or software background', 'Familiarity with RESTful APIs and JSON', 'Understanding of vector space concepts']
    },
    salary: {
      kenya: { junior: 'KES 80,000 - 140,000 / mo', mid: 'KES 180,000 - 300,000 / mo', senior: 'KES 350,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$40,000 - $70,000 / yr', mid: '$85,000 - $130,000 / yr', senior: '$140,000+ / yr', source: 'Global AI Compensation Report 2026' }
    },
    stack: {
      Programming: ['Python', 'TypeScript'],
      GenerativeAI: ['LangChain', 'LlamaIndex', 'Hugging Face', 'OpenAI / Anthropic APIs'],
      DataStorage: ['Pinecone', 'Chroma', 'PostgreSQL (pgvector)']
    },
    juniorMarket: {
      requirements: ['Proficiency in API integration', 'Understanding of embedding vectors and vector search', 'Clean codebase management'],
      certifications: ['DeepLearning.AI Short Courses', 'Hugging Face NLP Course'],
      degreeRequirement: 'Unnecessary; practical application building and system design matter most.',
      remoteAvailability: 'Very high; highly compatible with global remote startup roles.',
      beginnerChallenges: 'Keeping up with rapidly shifting framework APIs and LLM updates.'
    },
    faqs: [
      { q: 'Is AI Engineering the same as Prompt Engineering?', a: 'Prompt engineering is a small subset; AI engineering involves building full system architectures, vector search, and agent loops.' }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: Database,
    desc: 'Extract actionable business insights from complex datasets using statistics, visualization, and modeling.',
    techs: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI'],
    overview: {
      tagline: 'Translating raw datasets into strategic business decisions, statistical models, and predictive analytics.',
      jobTitles: ['Data Scientist', 'Business Intelligence Analyst', 'Quantitative Analyst'],
      targetIndustries: ['Banking & Finance', 'Telecommunications', 'Retail & FMCG', 'Consulting'],
      responsibilities: [
        'Cleaning, transforming, and exploratory analysis of large-scale data.',
        'Building statistical hypotheses and predictive regression models.',
        'Communicating complex data findings to executive leadership using visualizations.'
      ]
    },
    ratings: {
      difficulty: { score: 7, detail: 'Requires robust command of statistics, probability, SQL, and business domain intuition.' },
      competition: { score: 7, detail: 'Mature job market with structured interview processes.' },
      juniorJobs: { score: 6, detail: 'Entry positions require proven portfolio projects and strong SQL/Python credentials.' },
      accessibility: { score: 8, detail: 'Plentiful online resources, datasets, and structured certification tracks.' }
    },
    duration: {
      fundamentals: '3 to 5 Months',
      practicalLabs: '5 to 7 Months',
      entryReady: '8 to 10 Months',
      factors: ['Strong foundational statistics', 'Proficiency in advanced SQL queries', 'Business communication skills']
    },
    salary: {
      kenya: { junior: 'KES 85,000 - 150,000 / mo', mid: 'KES 190,000 - 320,000 / mo', senior: 'KES 380,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$50,000 - $75,000 / yr', mid: '$95,000 - $145,000 / yr', senior: '$150,000+ / yr', source: 'Global AI Compensation Report 2026' }
    },
    stack: {
      Programming: ['Python', 'R', 'Advanced SQL'],
      DataHandling: ['Pandas', 'NumPy', 'Jupyter Notebooks'],
      Visualization: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau']
    },
    juniorMarket: {
      requirements: ['Advanced SQL querying skills', 'Portfolio of end-to-end data analysis projects', 'Solid grasp of hypothesis testing'],
      certifications: ['Google Data Analytics Professional', 'Microsoft Certified: Data Analyst Associate'],
      degreeRequirement: 'Often valued in quantitative fields (Statistics, Economics, Engineering, Math).',
      remoteAvailability: 'High, especially for remote analytical consulting and corporate reporting.',
      beginnerChallenges: 'Moving beyond basic pandas tutorials to solve unstructured business data problems.'
    },
    faqs: [
      { q: 'Do I need heavy calculus to be a Data Scientist?', a: 'Basic linear algebra and descriptive statistics are essential; advanced calculus is secondary unless building custom algorithms.' }
    ]
  },
  {
    id: 'ai-research-scientist',
    title: 'AI Research Scientist',
    icon: Sparkles,
    desc: 'Invent novel machine learning architectures, algorithms, and training methodologies to push AI boundaries.',
    techs: ['PyTorch', 'C++', 'Distributed Computing', 'Advanced Math', 'Papers'],
    overview: {
      tagline: 'Advancing the fundamental science of artificial intelligence through academic research and experimentation.',
      jobTitles: ['AI Researcher', 'Deep Learning Scientist', 'Algorithm Research Engineer'],
      targetIndustries: ['AI Labs', 'Tech Giants (Google/Meta/Microsoft)', 'University Research Centres'],
      responsibilities: [
        'Reading, replicating, and expanding upon cutting-edge research papers (ArXiv).',
        'Designing novel neural network architectures and loss functions.',
        'Publishing findings at premier machine learning conferences (NeurIPS, ICML, ICLR).'
      ]
    },
    ratings: {
      difficulty: { score: 10, detail: 'The most mathematically rigorous path in tech; requires graduate-level expertise.' },
      competition: { score: 9, detail: 'Fiercely competitive globally with top-tier PhD holders vying for premier lab positions.' },
      juniorJobs: { score: 3, detail: 'True entry-level research roles are exceptionally scarce outside major labs.' },
      accessibility: { score: 3, detail: 'Demands deep theoretical background in mathematics, optimization, and probability.' }
    },
    duration: {
      fundamentals: '12+ Months',
      practicalLabs: '2 to 3 Years',
      entryReady: 'Graduate Degree (MSc / PhD)',
      factors: ['Advanced academic background', 'Access to high-compute GPU clusters', 'Mentorship from senior researchers']
    },
    salary: {
      kenya: { junior: 'Data unavailable', mid: 'KES 300,000 - 550,000 / mo', senior: 'KES 700,000+ / mo', source: 'Specialized Enterprise Index 2026' },
      international: { junior: '$90,000 - $140,000 / yr', mid: '$160,000 - $250,000 / yr', senior: '$300,000+ / yr', source: 'Global AI Research Index 2026' }
    },
    stack: {
      CoreMath: ['Linear Algebra', 'Multivariate Calculus', 'Probability & Statistics'],
      Frameworks: ['PyTorch', 'JAX', 'CUDA'],
      Compute: ['Distributed GPU Training', 'Cluster Management']
    },
    juniorMarket: {
      requirements: ['Master’s or PhD in a quantitative discipline', 'Published papers in reputable workshops/conferences', 'Advanced PyTorch/JAX mastery'],
      certifications: ['None (academic credentials and publication track record take precedence)'],
      degreeRequirement: 'Strictly required (typically MSc or PhD in CS, Math, or Physics).',
      remoteAvailability: 'Moderate; many premier research labs require hybrid or on-site presence.',
      beginnerChallenges: 'The immense barrier to entry regarding theoretical mathematics and compute access.'
    },
    faqs: [
      { q: 'Can I become a Research Scientist without a PhD?', a: 'It is exceedingly rare; most labs require advanced graduate degrees to evaluate novel architectural research.' }
    ]
  },
  {
    id: 'nlp-engineer',
    title: 'NLP Engineer',
    icon: MessageSquare,
    desc: 'Specialize in text analysis, speech recognition, conversational agents, and multilingual language models.',
    techs: ['Hugging Face', 'Transformers', 'spaCy', 'BERT', 'LLMs'],
    overview: {
      tagline: 'Teaching machines to understand, interpret, and generate human language across diverse linguistic contexts.',
      jobTitles: ['Natural Language Processing Engineer', 'Text Analytics Specialist', 'Conversational AI Engineer'],
      targetIndustries: ['BPO & Customer Support', 'EdTech', 'Legal Tech', 'Localization Services'],
      responsibilities: [
        'Fine-tuning transformer models on domain-specific corpora (including African languages).',
        'Implementing tokenization, sentiment analysis, and named entity recognition (NER).',
        'Building conversational bots and voice-to-text transcription pipelines.'
      ]
    },
    ratings: {
      difficulty: { score: 7, detail: 'Requires understanding linguistics, tokenization mechanics, and transformer architectures.' },
      competition: { score: 6, detail: 'Niche specialization within broader AI domains.' },
      juniorJobs: { score: 5, detail: 'Positions exist primarily in tech hubs and enterprise transformation teams.' },
      accessibility: { score: 7, detail: 'Hugging Face ecosystem makes experimentation accessible with proper Python knowledge.' }
    },
    duration: {
      fundamentals: '4 Months',
      practicalLabs: '6 Months',
      entryReady: '8 to 10 Months',
      factors: ['Solid Python programming skills', 'Familiarity with transformer libraries', 'Understanding of text data cleaning']
    },
    salary: {
      kenya: { junior: 'KES 80,000 - 140,000 / mo', mid: 'KES 180,000 - 300,000 / mo', senior: 'KES 350,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$45,000 - $70,000 / yr', mid: '$90,000 - $135,000 / yr', senior: '$145,000+ / yr', source: 'Global AI Compensation Report 2026' }
    },
    stack: {
      Libraries: ['Hugging Face Transformers', 'spaCy', 'NLTK', 'Gensim'],
      Models: ['BERT', 'RoBERTa', 'GPT variants', 'Whisper (Speech)'],
      Evaluation: ['BLEU score', 'ROUGE', 'Perplexity metrics']
    },
    juniorMarket: {
      requirements: ['Experience fine-tuning open-source models', 'Proficiency with Hugging Face Hub', 'Strong Python text processing skills'],
      certifications: ['Hugging Face NLP Certification'],
      degreeRequirement: 'Useful in Computer Science or Linguistics, but project portfolio is paramount.',
      remoteAvailability: 'High for remote software firms and international client projects.',
      beginnerChallenges: 'Handling multilingual tokenization and domain-specific vocabulary scarcity.'
    },
    faqs: [
      { q: 'Is NLP still relevant with large foundation models around?', a: 'Yes! Fine-tuning, prompt tuning, and building specialized embedding pipelines are core NLP tasks today.' }
    ]
  },
  {
    id: 'computer-vision-engineer',
    title: 'Computer Vision Engineer',
    icon: Eye,
    desc: 'Build systems that extract meaningful information from digital images, video feeds, and spatial sensors.',
    techs: ['OpenCV', 'YOLO', 'PyTorch', 'TensorFlow', 'OpenVINO'],
    overview: {
      tagline: 'Giving machines the ability to see, analyze, and interpret visual data in real-time environments.',
      jobTitles: ['Computer Vision Engineer', 'Image Processing Specialist', 'Vision AI Developer'],
      targetIndustries: ['AgriTech', 'Autonomous Systems', 'Security & Surveillance', 'Medical Imaging'],
      responsibilities: [
        'Training object detection, segmentation, and classification models (e.g., YOLOv8).',
        'Optimizing vision models for edge devices (Raspberry Pi, NVIDIA Jetson).',
        'Preprocessing image datasets, data augmentation, and annotation management.'
      ]
    },
    ratings: {
      difficulty: { score: 8, detail: 'Demands strong mathematical grounding in matrix operations and CNN architectures.' },
      competition: { score: 6, detail: 'Specialized field with fewer generalists competing for roles.' },
      juniorJobs: { score: 5, detail: 'Roles often clustered in specialized sectors like agricultural tech or surveillance.' },
      accessibility: { score: 6, detail: 'Requires access to GPU hardware for training image models effectively.' }
    },
    duration: {
      fundamentals: '4 Months',
      practicalLabs: '6 Months',
      entryReady: '9 Months',
      factors: ['Matrix math familiarity', 'OpenCV and PyTorch proficiency', 'Access to training hardware or cloud GPUs']
    },
    salary: {
      kenya: { junior: 'KES 85,000 - 145,000 / mo', mid: 'KES 190,000 - 310,000 / mo', senior: 'KES 360,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$45,000 - $72,000 / yr', mid: '$92,000 - $140,000 / yr', senior: '$150,000+ / yr', source: 'Global AI Compensation Report 2026' }
    },
    stack: {
      CoreTools: ['OpenCV', 'PIL', 'Scikit-Image'],
      Models: ['YOLOv8', 'ResNet', 'Vision Transformers (ViT)', 'Mask R-CNN'],
      EdgeHardware: ['NVIDIA Jetson', 'OpenVINO', 'TensorRT']
    },
    juniorMarket: {
      requirements: ['Proficiency with OpenCV and YOLO object detection', 'Portfolio of image processing projects', 'Python performance tuning'],
      certifications: ['NVIDIA Deep Learning Institute Certificates'],
      degreeRequirement: 'Degree in Computer Science or Electrical Engineering is frequently requested.',
      remoteAvailability: 'Moderate; edge deployment sometimes requires on-site hardware testing.',
      beginnerChallenges: 'Acquiring annotated image datasets and debugging GPU memory overflow errors.'
    },
    faqs: [
      { q: 'Do I need expensive hardware to learn Computer Vision?', a: 'Google Colab and cloud free tiers provide sufficient GPU access for learning foundational CV tasks.' }
    ]
  },
  {
    id: 'generative-ai-engineer',
    title: 'Generative AI Engineer',
    icon: Sparkles,
    desc: 'Construct bespoke generative pipelines for text, image, audio, and video synthesis in enterprise apps.',
    techs: ['Stable Diffusion', 'LangChain', 'Vector DBs', 'Fine-tuning', 'APIs'],
    overview: {
      tagline: 'Harnessing diffusion models, LLMs, and multimodal generators to create entirely new digital content.',
      jobTitles: ['GenAI Specialist', 'Multimodal AI Engineer', 'Prompt & Model Integration Engineer'],
      targetIndustries: ['Creative Agencies', 'Marketing Tech', 'Gaming Studios', 'Enterprise Automation'],
      responsibilities: [
        'Deploying and fine-tuning open-weight models (Llama 3, Mistral, Stable Diffusion).',
        'Building autonomous AI agent workflows using frameworks like CrewAI or AutoGen.',
        'Ensuring ethical AI use, guardrails, and hallucination mitigation.'
      ]
    },
    ratings: {
      difficulty: { score: 6, detail: 'Highly accessible and rapid development cycle utilizing high-level abstractions.' },
      competition: { score: 8, detail: 'Very high developer interest; rapid evolution of tools creates constant upskilling needs.' },
      juniorJobs: { score: 7, detail: 'High startup demand for engineers who can ship generative features quickly.' },
      accessibility: { score: 8, detail: 'Abundant APIs and open-source boilerplates available online.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '3 to 4 Months',
      entryReady: '6 Months',
      factors: ['Familiarity with Python async programming', 'Understanding of embedding spaces', 'API integration experience']
    },
    salary: {
      kenya: { junior: 'KES 90,000 - 150,000 / mo', mid: 'KES 200,000 - 330,000 / mo', senior: 'KES 380,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$50,000 - $80,000 / yr', mid: '$100,000 - $150,000 / yr', senior: '$160,000+ / yr', source: 'Global AI Compensation Report 2026' }
    },
    stack: {
      Orchestration: ['LangChain', 'LlamaIndex', 'Semantic Kernel'],
      AgentFrameworks: ['CrewAI', 'AutoGen', 'LangGraph'],
      GenerativeModels: ['Stable Diffusion XL', 'LLaMA 3', 'Mistral 7B', 'Claude 3 API']
    },
    juniorMarket: {
      requirements: ['Building full RAG apps', 'Experience with vector databases (Pinecone, Chroma)', 'Prompt engineering mastery'],
      certifications: ['Generative AI Specialization (DeepLearning.AI)'],
      degreeRequirement: 'Not required; demonstrated portfolio of shipped generative tools is key.',
      remoteAvailability: 'Very high; remote-first ecosystem.',
      beginnerChallenges: 'Managing non-deterministic model outputs and prompt injection security vulnerabilities.'
    },
    faqs: [
      { q: 'Is Generative AI replacing traditional machine learning?', a: 'No, GenAI builds upon foundational ML and deep learning techniques rather than replacing them.' }
    ]
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    icon: Layers,
    desc: 'Combine mechanical systems, electronics, and AI control algorithms to build autonomous physical robots.',
    techs: ['ROS2', 'C++', 'Python', 'Kinematics', 'Sensors'],
    overview: {
      tagline: 'Breathing artificial intelligence and autonomy into physical hardware systems and automated machinery.',
      jobTitles: ['Robotics Software Engineer', 'Autonomous Systems Developer', 'Mechatronics Engineer'],
      targetIndustries: ['Manufacturing', 'AgriTech Drones', 'Logistics & Warehousing', 'Autonomous Vehicles'],
      responsibilities: [
        'Programming robot behavior using the Robot Operating System (ROS2).',
        'Implementing SLAM (Simultaneous Localization and Mapping) and path planning algorithms.',
        'Integrating computer vision and sensor fusion for obstacle avoidance.'
      ]
    },
    ratings: {
      difficulty: { score: 9, detail: 'Requires multidisciplinary expertise spanning hardware, embedded C++, kinematics, and AI.' },
      competition: { score: 5, detail: 'Lower applicant pool due to hardware requirements and multidisciplinary complexity.' },
      juniorJobs: { score: 4, detail: 'Niche market in emerging tech hubs and industrial manufacturing sectors.' },
      accessibility: { score: 4, detail: 'Requires simulation tools (Gazebo) or physical robot test kits.' }
    },
    duration: {
      fundamentals: '6 Months',
      practicalLabs: '9 to 12 Months',
      entryReady: '12 to 18 Months',
      factors: ['Proficiency in C++ and Python', 'Understanding of physics and kinematics', 'Experience with ROS2']
    },
    salary: {
      kenya: { junior: 'KES 70,000 - 130,000 / mo', mid: 'KES 160,000 - 280,000 / mo', senior: 'KES 320,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$50,000 - $75,000 / yr', mid: '$100,000 - $145,000 / yr', senior: '$160,000+ / yr', source: 'Global Robotics Salary Index 2026' }
    },
    stack: {
      Frameworks: ['ROS2 (Robot Operating System)', 'Gazebo Simulation', 'OpenCV'],
      Languages: ['C++', 'Python'],
      Hardware: ['LIDAR', 'IMUs', 'Microcontrollers (Arduino/ESP32)']
    },
    juniorMarket: {
      requirements: ['ROS2 project experience', 'Solid C++ memory management', 'Understanding of control theory'],
      certifications: ['ROS2 Developer Certifications'],
      degreeRequirement: 'Typically expected in Robotics, Mechatronics, Electrical, or Mechanical Engineering.',
      remoteAvailability: 'Low to moderate; physical hardware testing necessitates lab or on-site presence.',
      beginnerChallenges: 'The steep hardware cost and physical debugging cycles.'
    },
    faqs: [
      { q: 'Can I learn robotics entirely through simulation?', a: 'Yes, tools like ROS2 and Gazebo allow you to build and test complex robotic simulations without hardware.' }
    ]
  },
  {
    id: 'mlops-engineer',
    title: 'MLOps Engineer',
    icon: Workflow,
    desc: 'Streamline the ML lifecycle by automating model deployment, monitoring, versioning, and scaling.',
    techs: ['Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'Cloud'],
    overview: {
      tagline: 'Building reliable pipelines and infrastructure to continuously train, test, and monitor AI in production.',
      jobTitles: ['MLOps Engineer', 'Machine Learning Infrastructure Engineer', 'AI Platform Engineer'],
      targetIndustries: ['Enterprise Tech', 'Fintech', 'Cloud Providers', 'Large Scale E-commerce'],
      responsibilities: [
        'Establishing CI/CD pipelines specifically tailored for machine learning code and model weights.',
        'Monitoring production models for data drift, concept drift, and degradation.',
        'Managing feature stores, model registries, and artifact repositories.'
      ]
    },
    ratings: {
      difficulty: { score: 8, detail: 'Combines DevOps complexity with the unique stochastic nature of machine learning models.' },
      competition: { score: 5, detail: 'High demand for specialized talent; relatively few experienced practitioners.' },
      juniorJobs: { score: 5, detail: 'Usually transitions from standard DevOps or Data Engineering roles.' },
      accessibility: { score: 5, detail: 'Requires comprehensive understanding of cloud infrastructure, Docker, and Kubernetes.' }
    },
    duration: {
      fundamentals: '5 Months',
      practicalLabs: '7 Months',
      entryReady: '12 Months',
      factors: ['Solid DevOps background', 'Familiarity with ML model training artifacts', 'Cloud platform proficiency (AWS/GCP/Azure)']
    },
    salary: {
      kenya: { junior: 'KES 100,000 - 170,000 / mo', mid: 'KES 220,000 - 380,000 / mo', senior: 'KES 420,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$60,000 - $85,000 / yr', mid: '$110,000 - $160,000 / yr', senior: '$180,000+ / yr', source: 'Global DevOps & MLOps Index 2026' }
    },
    stack: {
      Orchestration: ['Kubernetes', 'Docker', 'Kubeflow', 'Airflow'],
      ModelRegistry: ['MLflow', 'Weights & Biases', 'DVC (Data Version Control)'],
      Cloud: ['AWS SageMaker', 'GCP Vertex AI', 'Azure ML']
    },
    juniorMarket: {
      requirements: ['DevOps certification or experience', 'Python scripting', 'Containerization expertise with Docker/K8s'],
      certifications: ['AWS Certified DevOps Engineer', 'Google Cloud Professional ML Engineer'],
      degreeRequirement: 'Not strictly required; practical infrastructure portfolio is prioritized.',
      remoteAvailability: 'Very high; core cloud infrastructure roles are predominantly remote-friendly.',
      beginnerChallenges: 'Simulating enterprise-grade production failures and drift monitoring on a personal setup.'
    },
    faqs: [
      { q: 'Should I learn MLOps before Machine Learning?', a: 'No, learn standard ML foundations first so you understand what artifacts and models you are operationalizing.' }
    ]
  },
  {
    id: 'ai-product-manager',
    title: 'AI Product Manager',
    icon: Wrench,
    desc: 'Lead the strategy, roadmap, and delivery of AI-powered products bridging business goals and technical feasibility.',
    techs: ['Agile', 'Product Strategy', 'Prompt Literacy', 'UX Design', 'Data Metrics'],
    overview: {
      tagline: 'Guiding cross-functional teams to build ethical, viable, and user-centric artificial intelligence products.',
      jobTitles: ['AI Product Manager', 'Head of AI Product', 'Technical Product Manager (AI)'],
      targetIndustries: ['Software SaaS', 'Digital Agencies', 'Enterprise Consulting', 'Fintech'],
      responsibilities: [
        'Defining product vision, user stories, and requirements for AI capabilities.',
        'Balancing model accuracy trade-offs, latency, cost, and user experience.',
        'Collaborating with data scientists and engineers to evaluate model performance metrics.'
      ]
    },
    ratings: {
      difficulty: { score: 6, detail: 'Requires strategic product vision and technical literacy rather than deep coding.' },
      competition: { score: 7, detail: 'Competitive field with product managers transitioning from traditional software domains.' },
      juniorJobs: { score: 6, detail: 'Associate PM roles exist, though many companies look for experienced PMs with AI exposure.' },
      accessibility: { score: 7, detail: 'Accessible to those with product management background and a strong grasp of AI capabilities.' }
    },
    duration: {
      fundamentals: '2 to 3 Months',
      practicalLabs: '4 Months',
      entryReady: '6 Months',
      factors: ['Prior product management or business analysis experience', 'High-level literacy in AI limitations and capabilities', 'Stakeholder communication skills']
    },
    salary: {
      kenya: { junior: 'KES 90,000 - 160,000 / mo', mid: 'KES 210,000 - 350,000 / mo', senior: 'KES 400,000+ / mo', source: 'Local Tech Salary Index 2026' },
      international: { junior: '$55,000 - $80,000 / yr', mid: '$110,000 - $160,000 / yr', senior: '$175,000+ / yr', source: 'Global Product Management Index 2026' }
    },
    stack: {
      ProductTools: ['Jira', 'Confluence', 'Figma', 'Amplitude / Mixpanel'],
      AILiteracy: ['Understanding RAG limitations', 'Evaluation metrics (Precision/Recall)', 'API cost modeling'],
      Strategy: ['Roadmapping', 'User Research', 'Go-to-Market Strategy']
    },
    juniorMarket: {
      requirements: ['Demonstrated product launch case studies', 'Technical fluency in discussing AI model trade-offs', 'Agile project management'],
      certifications: ['Product School AI Product Management', 'Scrum Alliance PO'],
      degreeRequirement: 'Flexible; Business, Computer Science, or Economics degrees are common.',
      remoteAvailability: 'High, as product leadership thrives in remote and hybrid collaborative environments.',
      beginnerChallenges: 'Managing stakeholder expectations regarding AI non-determinism and accuracy.'
    },
    faqs: [
      { q: 'Do AI Product Managers need to write code?', a: 'Coding is not required, but you must understand API limits, latency, and data pipeline constraints.' }
    ]
  }
];

// ==========================================
// OPPORTUNITIES DATASET
// ==========================================
const AI_OPPORTUNITIES = [
  {
    id: 'opp-1',
    type: 'Course',
    title: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI & Stanford Online',
    price: 'Free Audit / Paid Certificate',
    location: 'Online / Remote',
    deadline: 'Self-Paced',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://www.coursera.org/specializations/machine-learning-introduction',
    desc: 'Master foundational machine learning principles, regression, classification, neural networks, and decision trees taught by Andrew Ng.'
  },
  {
    id: 'opp-2',
    type: 'Bootcamp',
    title: 'ALX AI Career Essentials (AICE)',
    provider: 'ALX Africa',
    price: 'Fully Funded (Scholarship)',
    location: 'Kenya & Remote',
    deadline: 'Rolling Admissions',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://alxafrica.com',
    desc: 'Intensive digital training equipping African youth with AI tools, prompt engineering, data analytics, and workplace productivity skills.'
  },
  {
    id: 'opp-3',
    type: 'Internship',
    title: 'AI Research & Engineering Intern',
    provider: 'IBM Research Africa',
    price: 'Paid Stipend',
    location: 'Nairobi, Kenya',
    deadline: 'Open Until Filled',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://www.ibm.com/employment/research/',
    desc: 'Gain hands-on research experience building scalable AI solutions addressing healthcare, agriculture, and financial inclusion across Africa.'
  },
  {
    id: 'opp-4',
    type: 'Scholarship',
    title: 'Google DeepMind Scholarship Programme',
    provider: 'Google DeepMind',
    price: 'Fully Funded',
    location: 'International & Selected African Universities',
    deadline: 'Annual Cycles',
    status: 'Upcoming',
    verifiedDate: 'Verified 2026',
    url: 'https://deepmind.google/sustainability-and-society/education/scholarships/',
    desc: 'Financial support for underrepresented students pursuing postgraduate master’s degrees in artificial intelligence and machine learning.'
  }
];

// ==========================================
// AI TOOLS DATASET
// ==========================================
const AI_TOOLS = [
  {
    name: 'PyTorch',
    purpose: 'Deep learning framework for research and production model building.',
    suitability: 'Intermediate to Advanced',
    availability: 'Free & Open Source',
    url: 'https://pytorch.org/'
  },
  {
    name: 'Hugging Face Hub',
    purpose: 'Repository for pre-trained models, datasets, and transformer pipelines.',
    suitability: 'Beginner to Advanced',
    availability: 'Free Tier & Paid Pro',
    url: 'https://huggingface.co/'
  },
  {
    name: 'LangChain',
    purpose: 'Orchestration framework for building context-aware LLM applications.',
    suitability: 'Intermediate',
    availability: 'Free & Open Source',
    url: 'https://www.langchain.com/'
  },
  {
    name: 'Google Colab',
    purpose: 'Cloud-hosted Jupyter notebook environment with free GPU access.',
    suitability: 'Beginner Friendly',
    availability: 'Free & Paid Compute Tiers',
    url: 'https://colab.research.google.com/'
  },
  {
    name: 'Docker',
    purpose: 'Containerization tool for packaging ML code and model dependencies.',
    suitability: 'Intermediate',
    availability: 'Free Community Edition',
    url: 'https://www.docker.com/'
  }
];

// ==========================================
// CERTIFICATIONS DATASET
// ==========================================
const CERTIFICATIONS = [
  {
    level: 'Foundational',
    cost: 'Free Training / $99 Exam',
    name: 'AWS Certified AI Practitioner',
    org: 'Amazon Web Services',
    desc: 'Validates foundational knowledge of artificial intelligence and machine learning concepts and AWS cloud AI services.',
    prereqs: 'Basic understanding of cloud computing and AI terminology.',
    url: 'https://aws.amazon.com/certification/'
  },
  {
    level: 'Professional',
    cost: '$200 Exam Fee',
    name: 'Google Cloud Professional Machine Learning Engineer',
    org: 'Google Cloud',
    desc: 'Designs, builds, and productionizes ML models using Google Cloud technologies with robust architecture standards.',
    prereqs: '3+ years industry experience including 1+ years designing ML solutions on GCP.',
    url: 'https://cloud.google.com/certification/machine-learning-engineer'
  },
  {
    level: 'Intermediate',
    cost: 'Free Coursework / $150 Exam',
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    org: 'Microsoft',
    desc: 'Builds, manages, and deploys AI solutions using Azure AI services, Azure OpenAI, and cognitive search tools.',
    prereqs: 'Proficiency in Python or C# and REST API integration.',
    url: 'https://learn.microsoft.com/credentials/'
  }
];

// ==========================================
// ROADMAP STEPS DATASET
// ==========================================
const ROADMAP_STEPS = [
  { step: '01', category: 'Programming', title: 'Python Fundamentals', desc: 'Master variables, loops, functions, object-oriented programming, and error handling.', project: 'CLI Data Utility App' },
  { step: '02', category: 'Data Handling', title: 'Pandas, NumPy & SQL', desc: 'Learn how to clean, manipulate tabular datasets, and query databases efficiently.', project: 'Exploratory Data Analysis Report' },
  { step: '03', category: 'Math Foundations', title: 'Linear Algebra & Statistics', desc: 'Understand vectors, matrices, probability distributions, hypothesis testing, and gradient descent.', project: 'Math Simulation Script' },
  { step: '04', category: 'Machine Learning', title: 'Scikit-Learn & Algorithms', desc: 'Build regression, classification, clustering models, and evaluate performance metrics.', project: 'Predictive Pricing Model' },
  { step: '05', category: 'Deep Learning', title: 'PyTorch & Neural Networks', desc: 'Construct multi-layer perceptrons, convolutional networks, and transformer architectures.', project: 'Custom Image Classifier' },
  { step: '06', category: 'Specialisation', title: 'Choose Your AI Path', desc: 'Focus on GenAI, NLP, MLOps, Computer Vision, or Robotics engineering.', project: 'Specialized Capstone Project' },
  { step: '07', category: 'Deployment', title: 'APIs & Model Serving', desc: 'Wrap models in FastAPI, containerize with Docker, and deploy to cloud instances.', project: 'Live Web AI Application' },
  { step: '08', category: 'Portfolio', title: 'Open Source & Portfolio', desc: 'Publish clean code on GitHub, document README files, and contribute to AI repos.', project: 'Published AI Portfolio Website' }
];

// ==========================================
// FAQ ACCORDION DATASET
// ==========================================
const FAQ_ITEMS = [
  { q: 'What exactly is artificial intelligence?', a: 'Artificial intelligence (AI) refers to computer systems designed to perform tasks that typically require human cognition, such as learning, reasoning, problem-solving, perception, and language understanding.' },
  { q: 'Is AI difficult to learn?', a: 'It varies by specialisation. Applied AI and prompt/API integration can be learned relatively quickly by software developers, whereas deep learning research and ML engineering require rigorous mathematics and programming dedication.' },
  { q: 'Do I need advanced mathematics?', a: 'Not for all roles! AI Engineers and Generative AI builders focus more on software architecture and APIs. However, Machine Learning Engineers and Data Scientists require strong foundations in linear algebra, calculus, and statistics.' },
  { q: 'Do I need to know Python?', a: 'Yes, Python is the undisputed lingua franca of the artificial intelligence ecosystem due to its rich library support (PyTorch, TensorFlow, Pandas, Scikit-Learn).' },
  { q: 'Can I enter AI without a computer science degree?', a: 'Absolutely. Many successful ML engineers and AI builders are self-taught or come from quantitative backgrounds (physics, mathematics, finance, engineering) backed by strong portfolio projects.' },
  { q: 'What is the difference between AI and machine learning?', a: 'Artificial intelligence is the broad umbrella term for smart machines. Machine learning is a subset of AI focused on algorithms that learn patterns from data rather than being explicitly hard-coded.' },
  { q: 'What is generative AI?', a: 'Generative AI refers to models (like LLMs and diffusion models) trained to generate new content—such as text, images, audio, or video—based on prompts and patterns learned from training data.' },
  { q: 'What is the difference between a data scientist and an AI engineer?', a: 'Data scientists focus primarily on statistical analysis, insights, and business reporting, whereas AI engineers build functional software systems, models, and pipelines that run in production.' },
  { q: 'Can I learn AI for free?', a: 'Yes. Outstanding free resources exist, including DeepLearning.AI, Kaggle Learn, Google Cloud Skills Boost, and Hugging Face open courses.' },
  { q: 'Is prompt engineering a long-term career?', a: 'Pure prompt engineering is evolving into software engineering roles involving orchestration, RAG, and agentic workflows. Prompt literacy is becoming a baseline skill for all developers.' },
  { q: 'Will AI replace software developers?', a: 'AI acts as a powerful multiplier and copilot. Rather than replacing developers, it automates boilerplate tasks while increasing the demand for engineers who can design robust systems and solve complex problems.' },
  { q: 'Which AI specialisation should beginners consider?', a: 'Beginners with coding experience often start with AI Engineering or Generative AI integration, while those strong in mathematics gravitate toward Data Science or Machine Learning.' },
  { q: 'How important are projects and practical experience?', a: 'Crucial. In the AI job market, hiring managers prioritize deployed GitHub projects, Kaggle notebooks, and proof of shipping applications over theoretical certificates.' }
];

export default function ArtificialIntelligencePage() {
  const [selectedCareerId, setSelectedCareerId] = useState('machine-learning-engineer');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [oppTab, setOppTab] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  // Selected Career Object
  const currentCareer = useMemo(() => {
    return AI_CAREERS.find((c) => c.id === selectedCareerId) || AI_CAREERS[0];
  }, [selectedCareerId]);

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    return AI_OPPORTUNITIES.filter((opp) => {
      if (oppTab !== 'All' && opp.type !== oppTab) return false;
      if (priceFilter === 'Free' && !opp.price.toLowerCase().includes('free') && !opp.price.toLowerCase().includes('scholarship')) {
        return false;
      }
      if (priceFilter === 'Paid' && opp.price.toLowerCase().includes('free')) {
        return false;
      }
      if (locationFilter === 'Kenya' && !opp.location.includes('Kenya')) return false;
      if (locationFilter === 'Remote' && !opp.location.toLowerCase().includes('online') && !opp.location.toLowerCase().includes('remote')) return false;
      return true;
    });
  }, [oppTab, priceFilter, locationFilter]);

  return (
    <div className="min-h-screen bg-[#F4F7FC] dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* 1. ARTIFICIAL INTELLIGENCE HERO */}
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
            <span>/</span>
            <a href="/explore" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Explore</a>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Artificial Intelligence</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
                <Brain className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Technology & Innovation
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Artificial Intelligence
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Artificial intelligence powers next-generation automation, predictive analytics, and creative systems globally. Learn how to engineer intelligent models, integrate foundation APIs, and build a high-impact career.
              </p>

              {/* Statistics Row */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-blue-600 dark:text-blue-400">18+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Available Courses</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-indigo-600 dark:text-indigo-400">7+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Available Bootcamps</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-emerald-600 dark:text-emerald-400">12+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Internships</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-amber-600 dark:text-amber-400">6+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Scholarships</span>
                </div>
              </div>

            </div>

            {/* Right Sophisticated Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">pathfinder_ai.neural_cluster</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">Machine Learning & MLOps</p>
                      <p className="text-slate-500 dark:text-slate-400">Pipelines, TensorFlow, PyTorch, Docker</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">Generative AI & LLMs</p>
                      <p className="text-slate-500 dark:text-slate-400">RAG, LangChain, Vector Databases</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">Data Science & Analytics</p>
                      <p className="text-slate-500 dark:text-slate-400">Pandas, SQL, Statistics, Visualization</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Verified Pathfinder Intelligence Directory (2026)
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. EXPLORE AI CAREER PATHS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore AI Career Paths
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Discover different AI specialisations, compare their requirements and explore the opportunities available in this rapidly evolving field.
          </p>
        </div>

        {/* Clickable Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_CAREERS.map((career) => {
            const IconComponent = career.icon;
            const isSelected = career.id === selectedCareerId;

            return (
              <button
                key={career.id}
                onClick={() => setSelectedCareerId(career.id)}
                className={`text-left p-5 rounded-2xl border transition flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 border-blue-600 dark:border-blue-500 shadow-md ring-2 ring-blue-600/20 dark:ring-blue-500/20'
                    : 'bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50">
                        Active Selection
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {career.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">
                      {career.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                  {career.techs.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                  {career.techs.length > 4 && (
                    <span className="text-[10px] text-slate-400 font-medium self-center">
                      +{career.techs.length - 4} more
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* 3. CAREER PATH DETAILS */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-sm p-6 sm:p-8 space-y-10 animate-in fade-in duration-200">
          
          {/* A. Career Overview */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700/60">
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Career Path Breakdown</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {currentCareer.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">
                {currentCareer.overview.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Common Job Titles:</span>
              {currentCareer.overview.jobTitles.slice(0, 2).map((t) => (
                <span key={t} className="text-xs bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 p-4 sm:p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" /> What a {currentCareer.title} Actually Does:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {currentCareer.overview.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl border border-blue-100/60 dark:border-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* B. Career Ratings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pathfinder Career Ratings</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  *Comparative editorial assessments generated by Pathfinder based on market entry thresholds, not official government statistics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Learning Difficulty', score: currentCareer.ratings.difficulty.score, detail: currentCareer.ratings.difficulty.detail, color: 'bg-blue-600', text: 'text-blue-600 dark:text-blue-400' },
                { label: 'Market Competition', score: currentCareer.ratings.competition.score, detail: currentCareer.ratings.competition.detail, color: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
                { label: 'Junior Job Availability', score: currentCareer.ratings.juniorJobs.score, detail: currentCareer.ratings.juniorJobs.detail, color: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
                { label: 'Learning Accessibility', score: currentCareer.ratings.accessibility.score, detail: currentCareer.ratings.accessibility.detail, color: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400' }
              ].map((rt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{rt.label}</span>
                    <span className={`text-sm font-extrabold ${rt.text}`}>{rt.score}/10</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className={`${rt.color} h-2 rounded-full`} style={{ width: `${rt.score * 10}%` }} />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{rt.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* C. Learning Duration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-1 bg-slate-900 dark:bg-slate-950 text-white p-5 rounded-2xl space-y-4 border border-slate-800">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Estimated Learning Time
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400 block">Fundamentals:</span>
                  <span className="text-lg font-bold text-white">{currentCareer.duration.fundamentals}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Practical Labs:</span>
                  <span className="text-lg font-bold text-indigo-400">{currentCareer.duration.practicalLabs}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Entry Readiness:</span>
                  <span className="text-xl font-extrabold text-emerald-400">{currentCareer.duration.entryReady}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                *Estimates assume ~15-20 hours of weekly study. Pathfinder does not guarantee guaranteed job placement.
              </p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 p-5 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Key Factors Affecting Duration:
              </h4>
              <ul className="space-y-2">
                {currentCareer.duration.factors.map((factor, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* D. Salary Expectations */}
          <div className="space-y-4 pt-2">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Salary Expectations</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified salary benchmarks based on local hiring data and international remote compensation indexes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-500" /> Kenya Market
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Verified 2026</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">Junior (0-2 yrs):</span>
                    <span className="font-bold text-slate-900 dark:text-white">{currentCareer.salary.kenya.junior}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Mid-Level (2-5 yrs):</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{currentCareer.salary.kenya.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentCareer.salary.kenya.senior}</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  Source: {currentCareer.salary.kenya.source}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-blue-500" /> International / Remote
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Verified 2026</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">Junior (0-2 yrs):</span>
                    <span className="font-bold text-slate-900 dark:text-white">{currentCareer.salary.international.junior}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Mid-Level (2-5 yrs):</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{currentCareer.salary.international.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentCareer.salary.international.senior}</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  Source: {currentCareer.salary.international.source}
                </p>
              </div>
            </div>
          </div>

          {/* E. Technology Stack */}
          <div className="space-y-3 pt-2">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Recommended Technology Stack</h4>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
              {Object.entries(currentCareer.stack).map(([groupKey, techArray]) => (
                <div key={groupKey} className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{groupKey}:</span>
                  <div className="flex flex-wrap gap-2">
                    {techArray.map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* F. Junior Job Market */}
          <div className="space-y-4 pt-2">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Junior Job Market Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {[
                { title: 'Employer Requirements', content: currentCareer.juniorMarket.requirements.join(' • ') },
                { title: 'Recommended Certifications', content: currentCareer.juniorMarket.certifications.join(' • ') },
                { title: 'Degree Expectations', content: currentCareer.juniorMarket.degreeRequirement },
                { title: 'Remote Availability', content: currentCareer.juniorMarket.remoteAvailability },
                { title: 'Common Beginner Challenges', content: currentCareer.juniorMarket.beginnerChallenges }
              ].map((jm, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block">{jm.title}</span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{jm.content}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. IMPORTANT INFORMATION — MUST READ (FAQ ACCORDION) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Important Information — Must Read
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Practical guidance and honest answers for learners entering the artificial intelligence field.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="border border-slate-200/90 dark:border-slate-700/80 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-4 font-semibold text-xs sm:text-sm text-slate-900 dark:text-white flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FIND REAL LEARNING OPPORTUNITIES */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Curated AI Directory</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Find AI Opportunities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Verified AI courses, bootcamps, internships, and scholarships for regional and global learners.
              </p>
            </div>

            {/* Type Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              {['All', 'Course', 'Bootcamp', 'Internship', 'Scholarship'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setOppTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    oppTab === tab ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab === 'All' ? 'All Opportunities' : `${tab}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" /> Filter Listings:
            </span>

            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
              <option value="All">All Pricing Types</option>
              <option value="Free">Free / Fully Funded</option>
              <option value="Paid">Paid / Premium</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
              <option value="All">All Locations</option>
              <option value="Kenya">Kenya Specific</option>
              <option value="Remote">Online / Remote</option>
            </select>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-5 shadow-2xs hover:shadow-sm transition flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                        {opp.type}
                      </span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/50">
                        {opp.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                        {opp.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{opp.provider}</p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {opp.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700/60">
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <strong className="text-slate-800 dark:text-slate-200">{opp.price}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <strong className="text-slate-800 dark:text-slate-200">{opp.location}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Deadline:</span>
                        <strong className="text-slate-800 dark:text-slate-200">{opp.deadline}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-700/60">
                    <span className="text-[10px] text-slate-400">{opp.verifiedDate}</span>
                    <a
                      href={opp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                    >
                      Official Link <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-sm font-semibold">No opportunities match your current filter selections.</p>
                <button
                  onClick={() => { setOppTab('All'); setPriceFilter('All'); setLocationFilter('All'); }}
                  className="text-xs text-blue-600 dark:text-blue-400 underline font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 6. AI TOOLS & LEARNING PLATFORMS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Developer Tooling</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Explore AI Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Essential frameworks, platforms, and utilities used by artificial intelligence practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_TOOLS.map((tool, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded">
                    {tool.availability}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">{tool.suitability}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{tool.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{tool.purpose}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center justify-between"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CERTIFICATIONS & PROFESSIONAL DEVELOPMENT */}
      <section className="bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Industry Credentials</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              AI Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Recognized credentials from leading cloud providers and technology organisations. Note that certificates validate knowledge but do not guarantee employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                      {cert.level}
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{cert.cost}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{cert.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Issuer: {cert.org}</p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{cert.desc}</p>
                  <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700/60">
                    <span className="font-semibold block text-slate-700 dark:text-slate-200">Prerequisites:</span>
                    <span className="text-slate-600 dark:text-slate-400">{cert.prereqs}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center justify-between"
                  >
                    <span>Certification Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEARNING PROGRESSION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step-by-Step Pathway</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Your AI Learning Path
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            The foundational sequence to build real-world artificial intelligence competency from zero experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROADMAP_STEPS.map((step) => (
            <div key={step.step} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded">
                  STAGE {step.step}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">{step.category}</span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>

              <div className="pt-2 text-xs border-t border-slate-100 dark:border-slate-700/60">
                <span className="text-[11px] text-slate-400 block">Practical Action Goal:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{step.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. RELATED CAREER CATEGORIES */}
      {/* <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Explore Other Pathfinder Categories</h3>
              <p className="text-xs text-slate-400 mt-0.5">Compare artificial intelligence with adjacent technical disciplines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href="/explore/web-development" className="p-5 rounded-2xl bg-slate-800 border border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-400 font-semibold block">Frontend & Backend</span>
              <h4 className="font-bold text-white text-base mt-1 group-hover:text-blue-300 transition">Web Development →</h4>
              <p className="text-xs text-slate-400 mt-1">Build responsive UIs, full-stack apps, and server REST APIs.</p>
            </a>

            <a href="/explore/cyber-security" className="p-5 rounded-2xl bg-slate-800 border border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-400 font-semibold block">Security & Defense</span>
              <h4 className="font-bold text-white text-base mt-1 group-hover:text-blue-300 transition">Cybersecurity →</h4>
              <p className="text-xs text-slate-400 mt-1">Network security, ethical hacking, and vulnerability testing.</p>
            </a>

            <a href="/explore/data-science" className="p-5 rounded-2xl bg-slate-800 border border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-400 font-semibold block">Analytics & Python</span>
              <h4 className="font-bold text-white text-base mt-1 group-hover:text-blue-300 transition">Data Science →</h4>
              <p className="text-xs text-slate-400 mt-1">Data analysis, statistical modeling, and business insights.</p>
            </a>
          </div>
        </div>
      </section> */}

      {/* RELATED CAREER CATEGORIES */}
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Explore Other Pathfinder Categories</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Compare artificial intelligence with adjacent technical disciplines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href="/explore/web-development" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block">Frontend & Backend</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">Web Development →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Build responsive UIs, full-stack apps, and server REST APIs.</p>
            </a>

            <a href="/explore/cyber-security" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block">Security & Defense</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">Cybersecurity →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Network security, ethical hacking, and vulnerability testing.</p>
            </a>

            <a href="/explore/data-science" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block">Analytics & Python</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">Data Science →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Data analysis, statistical modeling, and business insights.</p>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}