'use client';

import React, { useState, useMemo } from 'react';
import {
  BarChart3,
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
  Database,
  PieChart,
  LineChart,
  Server,
  Code2,
  Cpu,
  Layers,
  Workflow,
  Search,
  BookOpen
} from 'lucide-react';

// ==========================================
// DATA SCIENCE CAREERS DATASET
// ==========================================
const DATA_CAREERS = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    icon: BarChart3,
    desc: 'Transform raw data into meaningful charts, dashboards, and actionable business insights.',
    techs: ['Excel', 'SQL', 'Python', 'Power BI', 'Tableau'],
    overview: {
      tagline: 'Translating complex datasets into clear visual dashboards and business intelligence reports.',
      jobTitles: ['Data Analyst', 'Reporting Analyst', 'BI Specialist'],
      targetIndustries: ['Retail', 'FMCG', 'Fintech', 'Telecommunications', 'Consulting'],
      responsibilities: [
        'Querying databases using advanced SQL to extract operational metrics.',
        'Building automated interactive dashboards in Power BI and Tableau.',
        'Collaborating with stakeholders to define key performance indicators (KPIs).'
      ]
    },
    ratings: {
      difficulty: { score: 5, detail: 'Highly accessible entry point focusing on spreadsheets, SQL querying, and visualization tools.' },
      competition: { score: 8, detail: 'Very high volume of junior applicants entering the market.' },
      juniorJobs: { score: 7, detail: 'Strong local demand across banks, telcos, and retail corporations.' },
      accessibility: { score: 9, detail: 'Plentiful free resources, beginner-friendly software, and rapid portfolio creation.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '3 to 4 Months',
      entryReady: '5 to 6 Months',
      factors: ['Familiarity with Excel and basic math', 'Consistency in practicing SQL queries', 'Portfolio dashboard presentation']
    },
    salary: {
      kenya: { junior: 'KES 65,000 - 120,000 / mo', mid: 'KES 140,000 - 250,000 / mo', senior: 'KES 300,000+ / mo', source: 'Local Data Salary Index 2026' },
      international: { junior: '$35,000 - $55,000 / yr', mid: '$70,000 - $110,000 / yr', senior: '$120,000+ / yr', source: 'Global Data Compensation Report 2026' }
    },
    stack: {
      AnalysisTools: ['Excel', 'Google Sheets'],
      Databases: ['PostgreSQL', 'MySQL', 'Advanced SQL'],
      Visualization: ['Power BI', 'Tableau', 'Looker Studio']
    },
    juniorMarket: {
      requirements: ['Solid SQL and Excel proficiency', 'Proven dashboard portfolio', 'Basic data cleaning capabilities'],
      certifications: ['Google Data Analytics Professional Certificate', 'Microsoft Certified: Power BI Data Analyst Associate'],
      degreeRequirement: 'Valued in quantitative fields, but strong portfolio projects frequently outweigh degree background.',
      remoteAvailability: 'High for remote analytical roles and consulting gigs.',
      beginnerChallenges: 'Standing out amidst high applicant volume for entry-level positions.'
    },
    faqs: [
      { q: 'Is coding mandatory for Data Analysts?', a: 'SQL is essential. Python is increasingly helpful for automation, but Excel and BI tools form the core.' }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: PieChart,
    desc: 'Uncover deep insights, build predictive models, and apply statistical algorithms to complex business problems.',
    techs: ['Python', 'R', 'Pandas', 'NumPy', 'Scikit-learn'],
    overview: {
      tagline: 'Leveraging statistics, machine learning, and advanced programming to forecast trends and solve complex challenges.',
      jobTitles: ['Data Scientist', 'Quantitative Researcher', 'Predictive Modeler'],
      targetIndustries: ['Banking & Insurance', 'Telecommunications', 'Tech Enterprise', 'Healthcare Research'],
      responsibilities: [
        'Formulating statistical hypotheses and conducting rigorous A/B testing.',
        'Building and evaluating machine learning models for predictive analytics.',
        'Cleaning and restructuring messy unstructured data sources.'
      ]
    },
    ratings: {
      difficulty: { score: 8, detail: 'Demands robust mathematical foundations in probability, statistics, and programming.' },
      competition: { score: 7, detail: 'Competitive market requiring verified technical capabilities.' },
      juniorJobs: { score: 5, detail: 'True entry-level data science roles are rarer; companies often seek mid-level talent.' },
      accessibility: { score: 7, detail: 'Abundant learning materials, though bridging theory to real enterprise problems is challenging.' }
    },
    duration: {
      fundamentals: '4 Months',
      practicalLabs: '6 Months',
      entryReady: '9 to 12 Months',
      factors: ['Strong grounding in statistics and linear algebra', 'Proficiency in Python data stack', 'Hands-on project experience']
    },
    salary: {
      kenya: { junior: 'KES 90,000 - 160,000 / mo', mid: 'KES 200,000 - 350,000 / mo', senior: 'KES 400,000+ / mo', source: 'Local Data Salary Index 2026' },
      international: { junior: '$50,000 - $75,000 / yr', mid: '$95,000 - $145,000 / yr', senior: '$150,000+ / yr', source: 'Global Data Compensation Report 2026' }
    },
    stack: {
      Programming: ['Python', 'R', 'SQL'],
      DataScience: ['Pandas', 'NumPy', 'Scipy', 'Jupyter Notebooks'],
      Modeling: ['Scikit-learn', 'XGBoost', 'Statsmodels']
    },
    juniorMarket: {
      requirements: ['Strong Python programming skills', 'Understanding of regression and classification algorithms', 'Portfolio of predictive modeling projects'],
      certifications: ['IBM Data Science Professional Certificate', 'Microsoft Azure Data Scientist Associate'],
      degreeRequirement: 'Often preferred in quantitative disciplines (Statistics, Actuarial Science, Computer Science, Economics).',
      remoteAvailability: 'Moderate to high, especially with international remote analytics firms.',
      beginnerChallenges: 'Transitioning from textbook datasets to messy corporate data.'
    },
    faqs: [
      { q: 'Is a Master’s degree necessary for Data Science?', a: 'Not strictly required if you have a compelling GitHub portfolio and solid problem-solving skills.' }
    ]
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    icon: Server,
    desc: 'Design, construct, and maintain scalable data pipelines, storage systems, and enterprise data architectures.',
    techs: ['Python', 'SQL', 'Apache Spark', 'Airflow', 'dbt'],
    overview: {
      tagline: 'Building the robust data infrastructure and pipelines that feed analytics, BI, and machine learning systems.',
      jobTitles: ['Data Engineer', 'Analytics Engineer', 'Big Data Developer'],
      targetIndustries: ['Cloud Providers', 'Fintech', 'Enterprise SaaS', 'Telecommunications'],
      responsibilities: [
        'Designing ETL/ELT pipelines to ingest data from disparate sources into data lakes and warehouses.',
        'Optimizing SQL queries and database schemas for massive query performance.',
        'Ensuring data quality, reliability, and security compliance.'
      ]
    },
    ratings: {
      difficulty: { score: 8, detail: 'Requires strong software engineering principles, distributed systems knowledge, and advanced SQL.' },
      competition: { score: 5, detail: 'Fewer general applicants possess the required backend and pipeline engineering skills.' },
      juniorJobs: { score: 6, detail: 'Steady demand as companies realize data science is impossible without clean data infrastructure.' },
      accessibility: { score: 6, detail: 'Requires understanding cloud environments, command line tools, and software version control.' }
    },
    duration: {
      fundamentals: '4 Months',
      practicalLabs: '6 Months',
      entryReady: '10 to 12 Months',
      factors: ['Proficiency in Python and advanced SQL', 'Understanding of cloud data warehouses (Snowflake/BigQuery)', 'Containerization basics']
    },
    salary: {
      kenya: { junior: 'KES 100,000 - 170,000 / mo', mid: 'KES 220,000 - 380,000 / mo', senior: 'KES 420,000+ / mo', source: 'Local Data Salary Index 2026' },
      international: { junior: '$55,000 - $80,000 / yr', mid: '$110,000 - $160,000 / yr', senior: '$175,000+ / yr', source: 'Global Data Engineering Report 2026' }
    },
    stack: {
      Orchestration: ['Apache Airflow', 'Prefect', 'Dagster'],
      Transformation: ['dbt (data build tool)', 'SQL'],
      BigData: ['Apache Spark', 'Kafka', 'Snowflake', 'Google BigQuery']
    },
    juniorMarket: {
      requirements: ['Advanced SQL and Python scripting', 'Experience with cloud data tools', 'Understanding of data modeling concepts'],
      certifications: ['AWS Certified Data Analytics', 'Google Cloud Professional Data Engineer'],
      degreeRequirement: 'Computer Science or Software Engineering background is frequently helpful.',
      remoteAvailability: 'Very high; data infrastructure roles are predominantly remote-friendly.',
      beginnerChallenges: 'Setting up local pipeline environments and orchestrating multi-service dependencies.'
    },
    faqs: [
      { q: 'Should I learn Data Engineering before Data Science?', a: 'They are distinct tracks; choose Data Engineering if you enjoy backend systems, pipelines, and architecture.' }
    ]
  },
  {
    id: 'bi-analyst',
    title: 'Business Intelligence (BI) Analyst',
    icon: LineChart,
    desc: 'Empower leadership with strategic metrics, executive scorecards, and data-driven business intelligence.',
    techs: ['Power BI', 'Tableau', 'SQL', 'Excel', 'Looker'],
    overview: {
      tagline: 'Bridging technical data systems and executive decision-making through intuitive business reporting.',
      jobTitles: ['BI Analyst', 'Analytics Consultant', 'Performance Reporting Specialist'],
      targetIndustries: ['Retail', 'Banking', 'Consulting Firms', 'FMCG'],
      responsibilities: [
        'Developing enterprise-grade executive dashboards and recurring performance reports.',
        'Translating vague business questions into measurable data metrics.',
        'Conducting data audits to ensure reporting accuracy across departments.'
      ]
    },
    ratings: {
      difficulty: { score: 4, detail: 'Highly accessible entry point focusing on visualization tools and relational database querying.' },
      competition: { score: 7, detail: 'Popular career pivot for professionals from business, finance, and marketing.' },
      juniorJobs: { score: 7, detail: 'Abundant opportunities in corporate environments seeking structured reporting.' },
      accessibility: { score: 9, detail: 'Extensive free training documentation from Microsoft, Tableau, and Google.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '3 Months',
      entryReady: '5 Months',
      factors: ['Business acumen and domain knowledge', 'Proficiency in Power BI or Tableau', 'SQL querying skills']
    },
    salary: {
      kenya: { junior: 'KES 60,000 - 110,000 / mo', mid: 'KES 130,000 - 240,000 / mo', senior: 'KES 280,000+ / mo', source: 'Local Data Salary Index 2026' },
      international: { junior: '$40,000 - $60,000 / yr', mid: '$75,000 - $115,000 / yr', senior: '$130,000+ / yr', source: 'Global BI Compensation Index 2026' }
    },
    stack: {
      BIPlatforms: ['Power BI', 'Tableau', 'Looker'],
      Querying: ['SQL', 'DAX (Data Analysis Expressions)'],
      Spreadsheets: ['Advanced Excel', 'Google Sheets']
    },
    juniorMarket: {
      requirements: ['Strong Power BI or Tableau portfolio', 'Relational database fundamentals', 'Good communication skills'],
      certifications: ['Microsoft Certified: Power BI Data Analyst'],
      degreeRequirement: 'Open; Business, Finance, Statistics, or IT backgrounds are all welcomed.',
      remoteAvailability: 'High, compatible with remote corporate reporting teams.',
      beginnerChallenges: 'Balancing dashboard design aesthetics with data performance optimization.'
    },
    faqs: [
      { q: 'Is Power BI better than Tableau to start with?', a: 'Both are industry standards; Power BI is widely adopted in enterprise environments using Microsoft stacks.' }
    ]
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    icon: Cpu,
    desc: 'Design, build, and operationalize machine learning models into high-performance production systems.',
    techs: ['Python', 'PyTorch', 'TensorFlow', 'Docker', 'MLflow'],
    overview: {
      tagline: 'Bridging data science research and software engineering to deploy robust AI systems at scale.',
      jobTitles: ['ML Engineer', 'AI Systems Developer', 'Machine Learning Infrastructure Engineer'],
      targetIndustries: ['Fintech', 'SaaS', 'HealthTech', 'E-commerce'],
      responsibilities: [
        'Translating data science research prototypes into production-grade microservices.',
        'Optimizing model inference speed, memory footprint, and latency.',
        'Monitoring model performance and data drift in production environments.'
      ]
    },
    ratings: {
      difficulty: { score: 9, detail: 'Demands rigorous command of both advanced mathematics and robust software engineering.' },
      competition: { score: 7, detail: 'High interest from applicants, filtered by strict technical prerequisites.' },
      juniorJobs: { score: 5, detail: 'Junior roles are competitive; employers value practical deployment experience.' },
      accessibility: { score: 6, detail: 'Steep learning curve combining software engineering, DevOps, and machine learning theory.' }
    },
    duration: {
      fundamentals: '5 Months',
      practicalLabs: '7 Months',
      entryReady: '12 Months',
      factors: ['Strong software engineering foundations in Python', 'Understanding of calculus and linear algebra', 'Cloud and containerization knowledge']
    },
    salary: {
      kenya: { junior: 'KES 90,000 - 160,000 / mo', mid: 'KES 200,000 - 350,000 / mo', senior: 'KES 400,000+ / mo', source: 'Local Data Salary Index 2026' },
      international: { junior: '$45,000 - $75,000 / yr', mid: '$90,000 - $140,000 / yr', senior: '$150,000+ / yr', source: 'Global AI Compensation Report 2026' }
    },
    stack: {
      Frameworks: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
      Serving: ['FastAPI', 'Docker', 'Kubernetes'],
      Tracking: ['MLflow', 'Weights & Biases']
    },
    juniorMarket: {
      requirements: ['Strong Python coding skills', 'Familiarity with model training and evaluation metrics', 'Experience with Git and cloud APIs'],
      certifications: ['AWS Certified Machine Learning', 'Google Cloud Professional ML Engineer'],
      degreeRequirement: 'Preferred in Computer Science or Mathematics, though strong project portfolios are widely accepted.',
      remoteAvailability: 'Moderate to high for international remote contracts; growing remote tech hubs locally in Nairobi.',
      beginnerChallenges: 'Bridging theoretical algorithm knowledge with actual infrastructure scaling.'
    },
    faqs: [
      { q: 'Should I learn Data Science before Machine Learning Engineering?', a: 'Yes, understanding exploratory data analysis and basic stats is essential before jumping into model deployment.' }
    ]
  },
  {
    id: 'analytics-engineer',
    title: 'Data Analytics Engineer',
    icon: Workflow,
    desc: 'Transform raw data warehouses into clean, reliable, and well-tested data models ready for business consumption.',
    techs: ['dbt', 'SQL', 'Snowflake', 'BigQuery', 'Python'],
    overview: {
      tagline: 'Applying software engineering best practices to analytics codebases and data warehouse transformation.',
      jobTitles: ['Analytics Engineer', 'BI Data Engineer', 'Analytics Platform Engineer'],
      targetIndustries: ['Tech SaaS', 'Digital Agencies', 'Fintech', 'E-commerce'],
      responsibilities: [
        'Writing modular, version-controlled SQL transformations using dbt (data build tool).',
        'Implementing data testing, documentation, and lineage tracking.',
        'Partnering with data analysts to ensure semantic consistency across business metrics.'
      ]
    },
    ratings: {
      difficulty: { score: 7, detail: 'Combines advanced SQL querying, data modeling, and software engineering version control.' },
      competition: { score: 5, detail: 'Emerging specialized role with growing demand and moderate competition.' },
      juniorJobs: { score: 6, detail: 'Often filled by analysts transitioning into engineering or junior software devs.' },
      accessibility: { score: 7, detail: 'Clear, modern tooling ecosystem centered around dbt and cloud warehouses.' }
    },
    duration: {
      fundamentals: '3 Months',
      practicalLabs: '4 Months',
      entryReady: '8 Months',
      factors: ['Advanced SQL proficiency', 'Understanding of dimensional data modeling (Kimball methodology)', 'Git version control']
    },
    salary: {
      kenya: { junior: 'KES 80,000 - 140,000 / mo', mid: 'KES 180,000 - 300,000 / mo', senior: 'KES 350,000+ / mo', source: 'Local Data Salary Index 2026' },
      international: { junior: '$50,000 - $75,000 / yr', mid: '$95,000 - $140,000 / yr', senior: '$160,000+ / yr', source: 'Global Analytics Engineering Index 2026' }
    },
    stack: {
      Transformation: ['dbt Core', 'dbt Cloud', 'SQL'],
      Warehouses: ['Snowflake', 'Google BigQuery', 'Databricks'],
      Tooling: ['Git / GitHub', 'CI/CD Pipelines']
    },
    juniorMarket: {
      requirements: ['Expert-level SQL', 'Experience with dbt and version control', 'Understanding of data warehousing concepts'],
      certifications: ['dbt Fundamentals Certification'],
      degreeRequirement: 'Flexible; analytical or technical background preferred.',
      remoteAvailability: 'Very high; highly compatible with remote data teams.',
      beginnerChallenges: 'Mastering dimensional modeling and automated data testing.'
    },
    faqs: [
      { q: 'How is an Analytics Engineer different from a Data Engineer?', a: 'Analytics engineers focus on transforming data inside the warehouse using SQL/dbt, whereas data engineers build ingestion pipelines.' }
    ]
  },
  {
    id: 'quantitative-analyst',
    title: 'Quantitative Analyst',
    icon: Code2,
    desc: 'Apply mathematical and statistical models to financial markets, risk management, and investment strategies.',
    techs: ['Python', 'R', 'C++', 'SQL', 'Stata'],
    overview: {
      tagline: 'Using advanced mathematical modeling and algorithms to solve complex financial and risk management problems.',
      jobTitles: ['Quantitative Analyst', 'Quant Researcher', 'Financial Risk Modeler'],
      targetIndustries: ['Investment Banks', 'Asset Management', 'Fintech', 'Central Banks'],
      responsibilities: [
        'Developing quantitative pricing and risk assessment models.',
        'Analyzing financial market time-series data for trading algorithms.',
        'Backtesting financial strategies using historical market data.'
      ]
    },
    ratings: {
      difficulty: { score: 10, detail: 'Extremely rigorous mathematical and computational requirements.' },
      competition: { score: 6, detail: 'Niche field with specialized recruitment pipelines.' },
      juniorJobs: { score: 4, detail: 'Limited entry-level slots reserved for top quantitative graduates.' },
      accessibility: { score: 3, detail: 'Requires advanced university-level mathematics, probability, and stochastic calculus.' }
    },
    duration: {
      fundamentals: '12 Months',
      practicalLabs: '18 Months',
      entryReady: 'Advanced Degree (MSc / PhD)',
      factors: ['Advanced degree in quantitative field', 'Mastery of stochastic calculus and probability', 'Strong coding skills in C++ or Python']
    },
    salary: {
      kenya: { junior: 'KES 120,000 - 200,000 / mo', mid: 'KES 250,000 - 450,000 / mo', senior: 'KES 550,000+ / mo', source: 'Financial Sector Salary Survey 2026' },
      international: { junior: '$80,000 - $130,000 / yr', mid: '$150,000 - $250,000 / yr', senior: '$300,000+ / yr', source: 'Global Quantitative Finance Index 2026' }
    },
    stack: {
      Languages: ['C++', 'Python', 'R', 'MATLAB'],
      Math: ['Stochastic Calculus', 'Time Series Analysis', 'Probability Theory'],
      Tools: ['Bloomberg Terminal', 'SQL Databases']
    },
    juniorMarket: {
      requirements: ['Master’s or PhD in Financial Engineering, Actuarial Science, Physics, or Mathematics', 'Strong programming background'],
      certifications: ['FRM (Financial Risk Manager)', 'CFA (Chartered Financial Analyst)'],
      degreeRequirement: 'Strictly required (typically postgraduate degree in quantitative discipline).',
      remoteAvailability: 'Low to moderate; financial institutions often require hybrid or on-site presence.',
      beginnerChallenges: 'The intense theoretical barrier to entry.'
    },
    faqs: [
      { q: 'Can I become a Quant without a STEM degree?', a: 'It is exceedingly difficult due to the advanced mathematical requirements of financial modeling.' }
    ]
  },
  {
    id: 'database-admin',
    title: 'Database Administrator (DBA)',
    icon: Layers,
    desc: 'Ensure database availability, security, performance tuning, backup disaster recovery, and integrity.',
    techs: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'Linux'],
    overview: {
      tagline: 'Safeguarding enterprise database infrastructure, optimizing query performance, and ensuring data availability.',
      jobTitles: ['Database Administrator', 'DBA', 'Data Storage Specialist'],
      targetIndustries: ['Banking', 'Telecommunications', 'Enterprise IT', 'Government Agencies'],
      responsibilities: [
        'Managing database security, user access controls, and encryption protocols.',
        'Performing regular backups, disaster recovery drills, and system patching.',
        'Troubleshooting slow-running queries and optimizing database indexing.'
      ]
    },
    ratings: {
      difficulty: { score: 7, detail: 'Requires deep technical knowledge of relational database engines, OS administration, and networking.' },
      competition: { score: 5, detail: 'Stable, established career path with steady enterprise demand.' },
      juniorJobs: { score: 5, detail: 'Often accessed via IT support, system administration, or junior database engineering.' },
      accessibility: { score: 7, detail: 'Extensive documentation available for standard database management systems.' }
    },
    duration: {
      fundamentals: '3 Months',
      practicalLabs: '5 Months',
      entryReady: '8 to 10 Months',
      factors: ['Understanding of relational database architecture', 'Linux command-line familiarity', 'Security best practices']
    },
    salary: {
      kenya: { junior: 'KES 75,000 - 130,000 / mo', mid: 'KES 160,000 - 280,000 / mo', senior: 'KES 340,000+ / mo', source: 'Local IT Infrastructure Salary Survey 2026' },
      international: { junior: '$45,000 - $70,000 / yr', mid: '$85,000 - $130,000 / yr', senior: '$140,000+ / yr', source: 'Global DBA Compensation Index 2026' }
    },
    stack: {
      Databases: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Oracle DB'],
      OS: ['Linux (Ubuntu/RHEL)', 'Windows Server'],
      Tools: ['pgAdmin', 'SQL Server Management Studio (SSMS)', 'Backup Utilities']
    },
    juniorMarket: {
      requirements: ['Solid SQL querying and administration', 'Understanding of backup and recovery procedures', 'Basic Linux administration'],
      certifications: ['Oracle Database Administrator Certified Associate', 'Microsoft Certified: Azure Database Administrator'],
      degreeRequirement: 'Computer Science, IT, or related technical degree preferred.',
      remoteAvailability: 'Moderate; production database maintenance sometimes requires on-call or hybrid presence.',
      beginnerChallenges: 'High-stakes responsibility of managing live production database environments.'
    },
    faqs: [
      { q: 'Are traditional DBAs still needed in the cloud era?', a: 'Yes, cloud database managed services (RDS, Cloud SQL) change the workflow, but performance tuning and security remain vital.' }
    ]
  },
  {
    id: 'research-analyst',
    title: 'Research Analyst',
    icon: Search,
    desc: 'Conduct quantitative and qualitative market research, survey design, and statistical analysis for strategic studies.',
    techs: ['SPSS', 'R', 'Python', 'Excel', 'Qualtrics'],
    overview: {
      tagline: 'Gathering primary and secondary market data to generate comprehensive intelligence reports and strategic insights.',
      jobTitles: ['Market Research Analyst', 'Data Research Specialist', 'Quantitative Researcher'],
      targetIndustries: ['Market Research Firms', 'Policy Think Tanks', 'NGOs & International Orgs', 'Consulting'],
      responsibilities: [
        'Designing surveys, questionnaires, and sampling methodologies for primary research.',
        'Analyzing survey response datasets using statistical software (SPSS, R).',
        'Authoring detailed research reports and executive summaries.'
      ]
    },
    ratings: {
      difficulty: { score: 5, detail: 'Accessible blend of survey methodology, descriptive statistics, and reporting.' },
      competition: { score: 6, detail: 'Steady demand across research agencies and development organizations.' },
      juniorJobs: { score: 7, detail: 'Frequent entry-level openings in research agencies and think tanks.' },
      accessibility: { score: 8, detail: 'Straightforward entry for graduates in social sciences, statistics, or business.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '3 Months',
      entryReady: '5 Months',
      factors: ['Strong writing and analytical synthesis', 'Basic survey design and statistics', 'Familiarity with SPSS, R, or Excel']
    },
    salary: {
      kenya: { junior: 'KES 60,000 - 100,000 / mo', mid: 'KES 120,000 - 220,000 / mo', senior: 'KES 270,000+ / mo', source: 'Research Agency Salary Index 2026' },
      international: { junior: '$35,000 - $55,000 / yr', mid: '$70,000 - $105,000 / yr', senior: '$120,000+ / yr', source: 'Global Market Research Index 2026' }
    },
    stack: {
      StatisticalTools: ['SPSS', 'R', 'Stata', 'Excel'],
      SurveyPlatforms: ['Qualtrics', 'KoboToolbox', 'Google Forms', 'SurveyMonkey'],
      Reporting: ['PowerPoint', 'Word', 'Power BI']
    },
    juniorMarket: {
      requirements: ['Strong report writing and synthesis', 'Basic statistical analysis knowledge', 'Survey tool proficiency'],
      certifications: ['Insights Association Professional Researcher Certification'],
      degreeRequirement: 'Typically expected in Social Sciences, Statistics, Marketing, Economics, or Public Policy.',
      remoteAvailability: 'Moderate; fieldwork and client presentations often involve hybrid arrangements.',
      beginnerChallenges: 'Balancing qualitative narrative synthesis with quantitative statistical rigor.'
    },
    faqs: [
      { q: 'Is coding required for a Research Analyst?', a: 'Basic formulas and SPSS/Excel are standard; R or Python are helpful for advanced quantitative surveys.' }
    ]
  }
];

// ==========================================
// OPPORTUNITIES DATASET
// ==========================================
const DATA_OPPORTUNITIES = [
  {
    id: 'ds-opp-1',
    type: 'Course',
    title: 'Kaggle Learn: Data Science & ML',
    provider: 'Kaggle',
    price: 'Free',
    location: 'Online / Remote',
    deadline: 'Self-Paced',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://www.kaggle.com/learn',
    desc: 'Short, practical micro-courses covering Python, Pandas, SQL, Data Visualization, and Machine Learning with hands-on coding notebooks.'
  },
  {
    id: 'ds-opp-2',
    type: 'Bootcamp',
    title: 'DataCamp Career Tracks (Scholarship Access)',
    provider: 'DataCamp Donates',
    price: 'Scholarship Funded (Free)',
    location: 'Kenya & Remote',
    deadline: 'Rolling Admissions',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://www.datacamp.com/donates',
    desc: 'Comprehensive data analytics and data science skill tracks covering Python, SQL, and Power BI for eligible African learners.'
  },
  {
    id: 'ds-opp-3',
    type: 'Internship',
    title: 'Data Analytics & Insights Intern',
    provider: 'Safaricom PLC',
    price: 'Paid Stipend',
    location: 'Nairobi, Kenya',
    deadline: 'Open Until Filled',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://www.safaricom.co.ke/careers',
    desc: 'Join Safaricom’s enterprise analytics division to analyze customer usage trends, build dashboards, and support telecom reporting.'
  },
  {
    id: 'ds-opp-4',
    type: 'Scholarship',
    title: 'Mastercard Foundation Scholars Program in Data Science',
    provider: 'Mastercard Foundation & Partner Universities',
    price: 'Fully Funded',
    location: 'Kenya & Regional Universities',
    deadline: 'Annual Application Cycle',
    status: 'Upcoming',
    verifiedDate: 'Verified 2026',
    url: 'https://mastercardfdn.org/all-work/scholars-program/',
    desc: 'Full scholarships covering tuition, accommodation, and stipend for talented African students pursuing degrees in computing and data.'
  }
];

// ==========================================
// DATA TOOLS DATASET
// ==========================================
const DATA_TOOLS = [
  {
    category: 'Data Analysis',
    name: 'Microsoft Excel / Google Sheets',
    purpose: 'Spreadsheet software for tabular data manipulation, pivot tables, and basic formula analysis.',
    suitability: 'Beginner Friendly',
    availability: 'Paid / Free Tier',
    url: 'https://products.office.com/excel'
  },
  {
    category: 'Data Visualisation',
    name: 'Power BI',
    purpose: 'Business intelligence tool by Microsoft for interactive dashboards and corporate reporting.',
    suitability: 'Beginner to Intermediate',
    availability: 'Free Desktop Tier / Paid Cloud',
    url: 'https://powerbi.microsoft.com/'
  },
  {
    category: 'Statistical Analysis',
    name: 'R & RStudio',
    purpose: 'Statistical programming language built specifically for data analysis and academic research.',
    suitability: 'Intermediate',
    availability: 'Free & Open Source',
    url: 'https://www.r-project.org/'
  },
  {
    category: 'Database Management',
    name: 'PostgreSQL',
    purpose: 'Powerful, open-source relational database management system utilizing advanced SQL.',
    suitability: 'Intermediate',
    availability: 'Free & Open Source',
    url: 'https://www.postgresql.org/'
  },
  {
    category: 'Data Engineering',
    name: 'dbt (data build tool)',
    purpose: 'Transformation workflow that lets data engineers deploy modular SQL models in data warehouses.',
    suitability: 'Intermediate to Advanced',
    availability: 'Free Core / Paid Cloud',
    url: 'https://www.getdbt.com/'
  },
  {
    category: 'Machine Learning',
    name: 'Scikit-learn',
    purpose: 'Industry-standard Python library for classical machine learning algorithms and preprocessing.',
    suitability: 'Intermediate',
    availability: 'Free & Open Source',
    url: 'https://scikit-learn.org/'
  }
];

// ==========================================
// CERTIFICATIONS DATASET
// ==========================================
const DATA_CERTIFICATIONS = [
  {
    level: 'Foundational',
    cost: 'Free Course / $49 Certificate',
    name: 'Google Data Analytics Professional Certificate',
    org: 'Google (Coursera)',
    desc: 'Covers SQL, R programming, Tableau, and data cleaning methodologies with practical case studies.',
    prereqs: 'No prior experience required; beginner-friendly.',
    url: 'https://www.coursera.org/professional-certificates/google-data-analytics'
  },
  {
    level: 'Associate',
    cost: '$165 Exam Fee',
    name: 'Microsoft Certified: Power BI Data Analyst Associate',
    org: 'Microsoft',
    desc: 'Validates ability to design and build data models, clean data, and create actionable business intelligence reports.',
    prereqs: 'Proficiency in data analysis concepts and DAX formula language.',
    url: 'https://learn.microsoft.com/credentials/'
  },
  {
    level: 'Professional',
    cost: '$200 Exam Fee',
    name: 'Google Cloud Professional Data Engineer',
    org: 'Google Cloud',
    desc: 'Measures ability to design data processing systems, build pipelines, secure data, and operationalize machine learning models.',
    prereqs: '3+ years industry experience including 1+ years designing GCP data solutions.',
    url: 'https://cloud.google.com/certification/data-engineer'
  }
];

// ==========================================
// ROADMAP STEPS DATASET
// ==========================================
const DATA_ROADMAP = [
  { step: '01', category: 'Foundations', title: 'Spreadsheet & Computer Basics', desc: 'Learn file management, basic formulas, sorting, filtering, and pivot tables in Excel or Google Sheets.', project: 'Sales Summary Spreadsheet' },
  { step: '02', category: 'Databases', title: 'SQL & Relational Databases', desc: 'Master SELECT queries, joins, filtering, aggregations, and subqueries to pull data directly from databases.', project: 'E-Commerce Database Query Suite' },
  { step: '03', category: 'Visualisation', title: 'Dashboarding & BI Tools', desc: 'Connect data sources to Power BI or Tableau to build interactive executive charts and KPI scorecards.', project: 'Executive Company Performance Dashboard' },
  { step: '04', category: 'Programming', title: 'Python Programming', desc: 'Learn variables, loops, functions, data structures, and script writing for automation.', project: 'Automated Data Extraction Script' },
  { step: '05', category: 'Data Wrangling', title: 'Pandas & NumPy', desc: 'Master data cleaning, missing value imputation, grouping, and array manipulations in Python.', project: 'Customer Churn Data Cleaning Pipeline' },
  { step: '06', category: 'Statistics', title: 'Probability & Statistics', desc: 'Understand descriptive statistics, probability distributions, hypothesis testing, and A/B test evaluation.', project: 'Marketing Campaign A/B Test Analysis' },
  { step: '07', category: 'Machine Learning', title: 'Scikit-Learn & Modeling', desc: 'Build regression and classification models, split training data, and evaluate accuracy metrics.', project: 'House Price Prediction Model' },
  { step: '08', category: 'Portfolio', title: 'Capstone & Portfolio Publishing', desc: 'Document projects on GitHub, publish a professional portfolio website, and prepare for interviews.', project: 'Published End-to-End Data Portfolio' }
];

// ==========================================
// FAQ ACCORDION DATASET
// ==========================================
const DATA_FAQS = [
  { q: 'What exactly is data science?', a: 'Data science is an interdisciplinary field that uses scientific methods, algorithms, statistics, and systems to extract knowledge and insights from structured and unstructured data.' },
  { q: 'What is the difference between data analysis and data science?', a: 'Data analysis focuses on inspecting historical data to answer specific business questions and build dashboards. Data science builds upon analysis by applying machine learning and predictive modeling to forecast future trends.' },
  { q: 'Is data science difficult to learn?', a: 'It requires patience and consistent practice. While learning Excel and SQL is approachable for beginners, mastering advanced statistics, Python, and machine learning demands dedicated effort.' },
  { q: 'Do I need advanced mathematics?', a: 'Not for all roles! Data Analysts and BI Analysts focus primarily on SQL, business logic, and dashboards. Data Scientists and ML Engineers require stronger foundations in linear algebra, calculus, and statistics.' },
  { q: 'Is Python necessary?', a: 'Python is essential for Data Scientists and Data Engineers. However, Business Intelligence and Data Analysts can build successful careers using SQL, Excel, and Power BI without heavy coding.' },
  { q: 'Do I need to learn SQL?', a: 'Yes! SQL is the universal language of data. Regardless of whether you choose analytics, science, or engineering, you must know how to query relational databases.' },
  { q: 'Can I enter data analytics without a degree?', a: 'Absolutely. Many data analysts and BI professionals are self-taught or transitioned from other careers based on verified portfolio projects and practical SQL skills.' },
  { q: 'What is the difference between a data analyst and a data scientist?', a: 'Data analysts look at what happened and why using past data, while data scientists use predictive models and machine learning to estimate what is likely to happen next.' },
  { q: 'Can I learn data science for free?', a: 'Yes. Outstanding free resources include Kaggle Learn, Google Data Analytics certificate auditing on Coursera, freeCodeCamp, and YouTube tutorials.' },
  { q: 'Which data career is best for beginners?', a: 'Data Analyst or Business Intelligence Analyst are generally recommended as the most accessible entry points due to their clear focus on SQL, Excel, and visualization tools.' },
  { q: 'How important is statistics?', a: 'Statistics is the foundation of data interpretation. Understanding mean, median, standard deviation, and hypothesis testing prevents you from drawing false conclusions from random noise.' },
  { q: 'What projects should I include in my portfolio?', a: 'Include end-to-end projects: a clean SQL query suite, an interactive Power BI dashboard, and a Python exploratory data analysis notebook addressing a real-world problem.' },
  { q: 'Is the data science job market competitive?', a: 'Entry-level positions for data analysts and junior data scientists are competitive. Standing out requires a strong portfolio of practical projects rather than just certifications.' }
];

export default function DataSciencePage() {
  const [selectedCareerId, setSelectedCareerId] = useState('data-analyst');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [oppTab, setOppTab] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  // Selected Career Object
  const currentCareer = useMemo(() => {
    return DATA_CAREERS.find((c) => c.id === selectedCareerId) || DATA_CAREERS[0];
  }, [selectedCareerId]);

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    return DATA_OPPORTUNITIES.filter((opp) => {
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
      
      {/* 1. DATA SCIENCE HERO */}
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-600/10 dark:bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-teal-600/10 dark:bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <a href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Home</a>
            <span>/</span>
            <a href="/explore" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Explore</a>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Data Science</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-400/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Data & Analytics
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Data Science
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Data science transforms raw information into strategic business decisions, statistical models, and operational clarity. Master data visualization, SQL pipelines, and predictive analytics to launch a high-impact career.
              </p>

              {/* Statistics Row */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-emerald-600 dark:text-emerald-400">16+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Available Courses</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-teal-600 dark:text-teal-400">6+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Available Bootcamps</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-blue-600 dark:text-blue-400">10+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Internships</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-amber-600 dark:text-amber-400">5+</span>
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
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">pathfinder_data.analytics_engine</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">Data Analysis & BI Dashboards</p>
                      <p className="text-slate-500 dark:text-slate-400">SQL, Power BI, Tableau, Excel</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <PieChart className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">Statistical Modeling & Science</p>
                      <p className="text-slate-500 dark:text-slate-400">Python, Pandas, Scikit-learn, Statistics</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">Data Engineering & Pipelines</p>
                      <p className="text-slate-500 dark:text-slate-400">Airflow, dbt, Snowflake, Spark</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Verified Pathfinder Data Directory (2026)
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. EXPLORE DATA SCIENCE CAREER PATHS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore Data Science Career Paths
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Discover data-related careers, compare their requirements and understand where different skills can take you.
          </p>
        </div>

        {/* Clickable Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA_CAREERS.map((career) => {
            const IconComponent = career.icon;
            const isSelected = career.id === selectedCareerId;

            return (
              <button
                key={career.id}
                onClick={() => setSelectedCareerId(career.id)}
                className={`text-left p-5 rounded-2xl border transition flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 border-emerald-600 dark:border-emerald-500 shadow-md ring-2 ring-emerald-600/20 dark:ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                      isSelected ? 'bg-emerald-600 text-white' : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/50">
                        Active Selection
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
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
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Career Path Breakdown</span>
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

          <div className="bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 p-4 sm:p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> What a {currentCareer.title} Actually Does:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {currentCareer.overview.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl border border-emerald-100/60 dark:border-slate-700 shadow-2xs">
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
                { label: 'Learning Difficulty', score: currentCareer.ratings.difficulty.score, detail: currentCareer.ratings.difficulty.detail, color: 'bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400' },
                { label: 'Market Competition', score: currentCareer.ratings.competition.score, detail: currentCareer.ratings.competition.detail, color: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
                { label: 'Junior Job Availability', score: currentCareer.ratings.juniorJobs.score, detail: currentCareer.ratings.juniorJobs.detail, color: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400' },
                { label: 'Learning Accessibility', score: currentCareer.ratings.accessibility.score, detail: currentCareer.ratings.accessibility.detail, color: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400' }
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
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Estimated Learning Time
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400 block">Fundamentals:</span>
                  <span className="text-lg font-bold text-white">{currentCareer.duration.fundamentals}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Practical Labs:</span>
                  <span className="text-lg font-bold text-teal-400">{currentCareer.duration.practicalLabs}</span>
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
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0" />
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
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentCareer.salary.kenya.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400">{currentCareer.salary.kenya.senior}</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  Source: {currentCareer.salary.kenya.source}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-emerald-500" /> International / Remote
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
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentCareer.salary.international.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400">{currentCareer.salary.international.senior}</span>
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
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Important Information — Must Read
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Practical guidance and honest answers for learners entering the data science field.
          </p>
        </div>

        <div className="space-y-3">
          {DATA_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="border border-slate-200/90 dark:border-slate-700/80 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-4 font-semibold text-xs sm:text-sm text-slate-900 dark:text-white flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
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
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Curated Data Directory</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Find Data Science Opportunities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Verified data courses, bootcamps, internships, and scholarships for regional and global learners.
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
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
            >
              <option value="All">All Pricing Types</option>
              <option value="Free">Free / Fully Funded</option>
              <option value="Paid">Paid / Premium</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
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
                      <span className="font-bold px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
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
                      className="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1"
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
                  className="text-xs text-emerald-600 dark:text-emerald-400 underline font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 6. DATA TOOLS & PLATFORMS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Developer Tooling</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Explore Data Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Essential software, databases, and visualization suites used by data professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA_TOOLS.map((tool, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded">
                    {tool.availability}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">{tool.suitability}</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">{tool.category}</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{tool.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{tool.purpose}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center justify-between"
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
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Industry Credentials</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Data Science Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Recognized credentials from leading cloud providers and technology organisations. Note that certificates validate knowledge but do not guarantee employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DATA_CERTIFICATIONS.map((cert, idx) => (
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
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center justify-between"
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
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Step-by-Step Pathway</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Your Data Science Learning Path
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            The foundational sequence to build real-world data science competency from zero experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DATA_ROADMAP.map((step) => (
            <div key={step.step} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded">
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
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Explore Other Pathfinder Categories</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Compare data science with adjacent technical disciplines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href="/explore/web-development" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition group">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block">Frontend & Backend</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition">Web Development →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Build responsive UIs, full-stack apps, and server REST APIs.</p>
            </a>

            <a href="/explore/cyber-security" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition group">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block">Security & Defense</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition">Cybersecurity →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Network security, ethical hacking, and vulnerability testing.</p>
            </a>

            <a href="/explore/artificial-intelligence" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition group">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block">Intelligence & Innovation</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition">Artificial Intelligence →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Machine learning models, prompt engineering, and LLM APIs.</p>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}