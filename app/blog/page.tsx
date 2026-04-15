import FadeIn from '@/components/FadeIn'

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <FadeIn>
        <p className="overline mb-4">Portfolio</p>
        <h1 className="font-display text-5xl font-medium mb-4 max-w-2xl leading-tight">
          What I Came For, What I Got
        </h1>
        <p className="text-muted mb-4">Reflecting on two years in the MS Applied Data Science program at Syracuse University</p>
        <p className="overline mb-16">Udayan Gaikwad · May 2026 · ~3,000 words</p>
      </FadeIn>

      <hr className="rule mb-16" />

      <div className="flex flex-col lg:flex-row gap-16">

        <FadeIn delay={0.05} className="lg:w-56 shrink-0">
          <aside className="lg:sticky lg:top-24">
            <p className="overline mb-4">Contents</p>
            <nav className="space-y-2">
              {[
                ['#expectations', 'What I Expected'],
                ['#learned', 'What I Learned'],
                ['#outcomes', 'The Six Outcomes'],
                ['#projects', 'Three Projects'],
                ['#outside', 'Outside the Classroom'],
                ['#favorite', 'Favorite Course'],
                ['#best', 'Best Parts & Surprises'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block font-mono text-xs text-muted hover:text-ink transition-colors leading-relaxed"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>
        </FadeIn>

        <FadeIn delay={0.1} className="flex-1 min-w-0">
          <div className="prose-editorial max-w-none">

            <section id="expectations" className="scroll-mt-20 mb-14">
              <div className="border-t-2 border-ink pt-5 mb-6">
                <h2 className="font-display text-3xl font-medium">What I Expected</h2>
              </div>
              <p>
                When I applied to the MS Applied Data Science program at Syracuse University's iSchool, I had a fairly specific picture of what I was walking into. I'd done machine learning work in India — demand forecasting at Systech Solutions, patient event detection at Healtech, data analysis at Siddhi Chemicals. I knew how to write Python, train models, and ship code. What I thought I was buying with a graduate degree was depth: a more rigorous understanding of the mathematics underneath the tools I was already using, and a credential that would open doors in the US market.
              </p>
              <p>
                I expected lectures. I expected papers to read, problem sets to grind through, exams to pass. I expected to get better at the technical craft in a structured, academic way — learning why gradient descent converges, what makes a neural network generalize, how to think about statistical inference with more precision than I'd managed on my own.
              </p>
              <p>
                I did not expect to end up maintaining a production system used by real researchers. I did not expect to be building neuro-symbolic AI pipelines at a research lab, or making architectural decisions about PostgreSQL schemas and embedding strategies at midnight. I did not expect the most important lessons to come from shipping broken code and having to fix it.
              </p>
              <p>
                That gap between expectation and reality is what this essay is about.
              </p>
            </section>

            <section id="learned" className="scroll-mt-20 mb-14">
              <div className="border-t-2 border-ink pt-5 mb-6">
                <h2 className="font-display text-3xl font-medium">What I Actually Learned</h2>
              </div>
              <p>
                The honest answer is that I learned two separate things simultaneously, and they pulled in different directions for most of the program before eventually making sense together.
              </p>
              <p>
                The first thing I learned was technical depth. The coursework forced me to slow down and understand why things work, not just how to use them. IST 691 — the deep learning course — was the clearest example. I'd used neural networks before. I'd never really understood backpropagation, or what it means for a loss surface to be non-convex, or why batch normalization helps training stabilize. Working through those questions properly changed how I think about every model I've built since.
              </p>
              <p>
                The second thing I learned was production discipline. This came almost entirely from outside the classroom — from the lab work, from maintaining Preprint Bot, from having to make systems that stay running without my constant attention. Production is a different skill from modeling. You can build a model that achieves excellent accuracy in a notebook and still have no idea how to make it reliable, observable, or maintainable over time. The program, through the opportunities it created outside the formal curriculum, gave me both.
              </p>
              <p>
                The third thing — which I didn't realize I was learning until near the end — was how to communicate technical work to people who don't share my vocabulary. Every project writeup, every presentation, every conversation with a professor about what I'd built pushed me to translate. That skill is underrated and genuinely hard. I'm still working on it.
              </p>
            </section>

            <section id="outcomes" className="scroll-mt-20 mb-14">
              <div className="border-t-2 border-ink pt-5 mb-6">
                <h2 className="font-display text-3xl font-medium">The Six Learning Outcomes</h2>
              </div>
              <p>
                The program defines six student learning outcomes. Here's an honest account of how I engaged with each one.
              </p>

              <div className="space-y-8 mt-6">
                <div>
                  <p className="overline text-accent mb-2">SLO 1 — Data Collection, Storage & Access</p>
                  <p>
                    Preprint Bot is the clearest demonstration here. Building a system that ingests 800+ arXiv papers daily, parses PDFs with GROBID, generates embeddings, and stores everything in a PostgreSQL schema with pgvector — that's a serious data engineering problem, not a modeling problem. I had to think carefully about what to store, how to index it, how to handle duplicate papers, and how to keep the pipeline running when the arXiv API returned unexpected formats or the GROBID server timed out. The GitHub Repository Assistant added another dimension: pulling structured data from Git history and combining it with unstructured source code for semantic retrieval. Both projects taught me that data collection and storage are never trivial — they're where most real-world ML systems actually fail.
                  </p>
                </div>

                <div>
                  <p className="overline text-accent mb-2">SLO 2 — Actionable Insight Across Contexts</p>
                  <p>
                    The Rideshare Demand Forecasting project sits squarely here. Predicting zone-level ride demand at 5-minute intervals isn't academically interesting in isolation — it's only meaningful if the prediction drives a decision. In this case, the decision is surge pricing: how much to charge riders given predicted demand and current supply. Translating a regression output (4.82 RMSE at the 5-minute horizon) into a business policy (clamp surge between 1.0x and 3.0x based on demand ratio, weather, and event flags) required thinking about the full context, not just the model. The Fake News Detection project approached the same outcome from a different angle — the context there is societal, and the question of what it means to deploy a misinformation classifier responsibly is not a technical question at all.
                  </p>
                </div>

                <div>
                  <p className="overline text-accent mb-2">SLO 3 — Visualization & Predictive Modeling</p>
                  <p>
                    The Rideshare project's Streamlit dashboard — a live city grid colored by surge multiplier, with per-zone drill-downs and forecast vs. actual overlays — is the most direct demonstration. But the Music Album Narrative Analyzer pushed this in an unexpected direction: visualizing the emotional and thematic arc of an album across tracks requires thinking about how to represent qualitative, interpretive data in a way that's actually useful. That's a harder visualization problem than displaying a confusion matrix. The Flight Delay project contributed a more classical angle: careful exploratory data analysis, feature distribution plots, and evaluation across precision/recall/F1 curves for five algorithms on two dataset configurations.
                  </p>
                </div>

                <div>
                  <p className="overline text-accent mb-2">SLO 4 — Programming for Data Science</p>
                  <p>
                    Every project in this portfolio is Python. But SLO 4 isn't really about knowing Python — it's about using it effectively for data work. The distinction matters. Writing a FastAPI service that handles async database connections under load is different from writing a training script. Writing a LangChain ReAct agent that orchestrates multiple tools with bounded latency is different from writing a Jupyter notebook. The program pushed me across the full range: from exploratory analysis in notebooks to production APIs, from scikit-learn pipelines to Keras sequence models to sentence-transformer embeddings. I'm more confident in Python than I've ever been, not because I know more syntax, but because I've used it for more kinds of problems.
                  </p>
                </div>

                <div>
                  <p className="overline text-accent mb-2">SLO 5 — Communication of Insights</p>
                  <p>
                    The Rideshare dashboard is built for a non-technical audience — operators who need to understand surge conditions across a city at a glance, without knowing what LightGBM is. The Music Album Analyzer presents lyrical analysis in plain language, sourced from the actual lyrics, to anyone who cares about music. Both required thinking carefully about what the audience needs to know versus what I found technically interesting to build. These are often different things, and learning to suppress the latter in favor of the former took more effort than I expected. The program's consistent emphasis on writing up and presenting work — not just building it — was the thing that developed this skill.
                  </p>
                </div>

                <div>
                  <p className="overline text-accent mb-2">SLO 6 — Ethics in Data Science</p>
                  <p>
                    The Fake News Detection project is the most direct engagement with this outcome, and deliberately so. A model that classifies news articles as real or fake carries obvious risks: false positives suppress legitimate journalism, false negatives allow misinformation to propagate, and the training data itself reflects the biases of whoever labeled it. The project raises these questions explicitly — the final analysis asks whether high accuracy reflects genuine semantic understanding or surface-level pattern matching, and why that distinction matters when the system is deployed. Preprint Bot raises subtler ethical questions: whose research gets surfaced, how does the embedding space encode bias in the scientific literature, and what happens when personalization creates filter bubbles in academic reading. I don't have complete answers to either set of questions. But I know how to ask them now, which is the point.
                  </p>
                </div>
              </div>
            </section>

            <section id="projects" className="scroll-mt-20 mb-14">
              <div className="border-t-2 border-ink pt-5 mb-6">
                <h2 className="font-display text-3xl font-medium">Three Projects That Shaped My Thinking</h2>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="font-display text-xl font-medium mb-3">Preprint Bot — Learning What Ownership Feels Like</h3>
                  <p>
                    I've built projects before. Preprint Bot is the first system I've owned. There's a difference, and it's not subtle. When you own a system — when real users depend on it, when it runs every night whether or not you're paying attention — you develop a different relationship to the code. You stop optimizing for cleverness and start optimizing for clarity, reliability, and graceful failure. You learn that the interesting engineering problems are almost never in the model. They're in the pipeline scheduler, the retry logic, the embedding drift, the database connection pool that silently exhausts itself at 3am.
                  </p>
                  <p>
                    Preprint Bot processes 800+ arXiv papers daily, generates 8,000+ personalized monthly summaries, and runs on a production Linux VM with 24/7 uptime. I built it. I maintain it. I've broken it and fixed it more times than I can count. It's the project I'm most proud of, and the one I learned the most from — not because the technical problem was the hardest, but because the stakes were real.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-medium mb-3">Rideshare Demand Forecasting — Learning to Think End-to-End</h3>
                  <p>
                    Most ML projects I'd done before this one stopped at model evaluation. Train, evaluate, report accuracy, done. The Rideshare project forced me past that boundary. A demand forecast is only useful if it drives a decision. A decision is only useful if it's computed fast enough to act on. An API is only useful if it's reliable under load. A dashboard is only useful if the person looking at it can understand what they're seeing in under five seconds.
                  </p>
                  <p>
                    Working through the full stack — LightGBM model, Redis feature store, FastAPI inference service, Docker orchestration, Streamlit dashboard — gave me a systems-level view of ML that I'd been missing. The model itself (4.82 RMSE at the 5-minute horizon) is the least interesting part of the project. The interesting parts are the online feature aggregation that keeps the Redis state consistent, the surge policy that translates a regression output into a business decision, and the dashboard that makes a city-wide demand picture legible to someone who doesn't know what RMSE means.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-medium mb-3">Music Album Narrative Analyzer — Learning to Build for Curiosity</h3>
                  <p>
                    This project has no production users. It doesn't demonstrate cloud infrastructure or enterprise-scale data pipelines. What it demonstrates is something I think is equally important: the ability to start from a genuine question and build something that answers it.
                  </p>
                  <p>
                    The question was: can a locally-run 14-billion-parameter language model do meaningful creative analysis of album lyrics, with no cloud API and no data leaving the machine? The answer turned out to be yes, with the right retrieval setup. Qwen 2.5 14B via Ollama, combined with ChromaDB for local vector search and sentence-transformers for embedding, produces coherent and source-grounded lyrical analysis. The bottleneck isn't model capability — it's retrieval quality. Getting the chunking strategy right, managing context window constraints, and thinking carefully about what "a good answer" looks like for an interpretive question — those were the hard problems.
                  </p>
                  <p>
                    The project taught me that curiosity is a legitimate starting point for engineering work, and that some of the most interesting technical problems live in domains that don't obviously look like data science problems.
                  </p>
                </div>
              </div>
            </section>

            <section id="outside" className="scroll-mt-20 mb-14">
              <div className="border-t-2 border-ink pt-5 mb-6">
                <h2 className="font-display text-3xl font-medium">Outside the Classroom</h2>
              </div>
              <p>
                Two experiences outside formal coursework defined my time at Syracuse more than any class, and I want to be direct about that: if I had only done the coursework, I would have learned much less.
              </p>
              <p>
                The first is my role as ML Engineer at the Open-Source Program Office (OSPO). Building and maintaining Preprint Bot — a real system for real users, deployed and running 24/7 — gave me something no course assignment can replicate: accountability. When the system breaks, I fix it. When a researcher emails to say their digest is empty, I investigate. When the arXiv API changes its behavior, I update the ingestion pipeline. That kind of ownership changes how you think about software. You stop writing code for a grade and start writing code for durability.
              </p>
              <p>
                The second is my research position at Leibniz Lab under Professor Shakarian, building neuro-symbolic AI pipelines that combine large language models with PyReason — a formal logic reasoning engine. This work sits at a genuinely open frontier in AI research: the question of how to combine the fluency of neural models with the precision of symbolic systems doesn't have a settled answer yet. Working on it as a graduate student — reading papers, implementing pipelines, running experiments that don't always work — taught me what research actually feels like from the inside. It's less linear than coursework, more uncertain, and considerably more interesting.
              </p>
              <p>
                Together, these two experiences gave me a professional identity that I don't think I could have built through coursework alone: I'm an engineer who can do research, and a researcher who ships production code. That combination is what I'm bringing to the job market.
              </p>
            </section>

            <section id="favorite" className="scroll-mt-20 mb-14">
              <div className="border-t-2 border-ink pt-5 mb-6">
                <h2 className="font-display text-3xl font-medium">Favorite Course</h2>
              </div>
              <p>
                IST 691, Deep Learning, without hesitation.
              </p>
              <p>
                It was also the hardest course I took, and I think those two facts are connected. The course didn't treat deep learning as a collection of APIs to call or architectures to copy. It started from fundamentals: what is a neural network actually computing, why does backpropagation work, what is gradient descent optimizing and why doesn't it always find the global minimum, what does it mean for a model to generalize. Those questions — which I'd spent years working around rather than through — finally got real answers.
              </p>
              <p>
                The capstone project for the course was the work I'm most technically proud of from the entire program. I designed a cross-modal transfer learning pipeline for solar panel defect detection — detecting manufacturing defects across two imaging modalities (thermal infrared and electroluminescence) that have fundamentally different noise characteristics. Using EfficientNet-B1 as a backbone with bidirectional transfer configurations between the two domains, and integrating Grad-CAM visualizations to make predictions interpretable, the final model achieved 99.70% validation accuracy.
              </p>
              <p>
                More important than the accuracy number was what I understood about why it worked. I could explain every architectural decision — why EfficientNet-B1 over other backbones for this problem size, why bidirectional transfer outperformed unidirectional, what the Grad-CAM outputs were revealing about which image regions the model attended to. That depth of understanding is what the course gave me, and it's changed how I approach every modeling problem since.
              </p>
              <p>
                A close second is IST 615, Cloud Management on Azure. Less glamorous than deep learning, but the practical skills — designing a deployment architecture, managing compute costs, thinking about reliability and failure modes — turn out to be what actually matters when you're running a production system. Theory without deployment experience is incomplete. IST 615 completed it.
              </p>
            </section>

            <section id="best" className="scroll-mt-20 mb-14">
              <div className="border-t-2 border-ink pt-5 mb-6">
                <h2 className="font-display text-3xl font-medium">The Best Parts, and the Surprises</h2>
              </div>
              <p>
                The best part of the program was the access it created — to research infrastructure, to faculty doing genuinely interesting work, to a peer cohort that came from wildly different industries and brought completely different problem framings. In a room of data science students, you sit next to someone from healthcare, someone from finance, someone from government operations. Their problems are not your problems. Watching how they formulate questions — what they treat as given, what they treat as needing explanation — expanded how I think about data problems more than any single course did.
              </p>
              <p>
                The biggest surprise was how much the program emphasized communication. I came in treating writing and presentation as the soft overhead bolted onto real technical work — the part you do quickly so you can get back to the interesting stuff. I leave thinking it's half the job. A model that can't be explained to the people who use it is a model that won't be used well. A system that isn't documented is a system that will be abandoned. Writing clearly about technical work is a technical skill, and it's one I underestimated.
              </p>
              <p>
                The second surprise was how much I valued uncertainty. Research — especially at Leibniz Lab — regularly produced results I didn't expect. Experiments that didn't work. Models that failed in ways that were informative rather than conclusive. Learning to stay curious and methodical in the presence of that uncertainty, rather than anxious or impatient, was harder than any algorithm. It's also more transferable.
              </p>
              <p>
                The third surprise — uncomfortable to admit — was how much the job market humbled me. I applied to hundreds of roles. The silence was instructive. It forced me to think carefully about signal: what a resume communicates in the three seconds a recruiter actually looks at it, why a cover letter fails before anyone reads past the first line, what "relevant experience" means to someone who doesn't share my technical vocabulary. The technical skills were never the bottleneck. Presenting them clearly, confidently, and in the right register for the audience — that's where I had to grow, and where the program's emphasis on communication turned out to matter more than I'd expected.
              </p>
              <p>
                I graduate in May 2026 on OPT-STEM authorization, looking for full-time ML and AI Engineer roles. The work I want to do is the work I've already been doing: building production ML systems, contributing to LLM application development, sitting at the intersection of research and engineering where the Leibniz Lab taught me I belong.
              </p>
              <p>
                The program gave me a foundation. The lab and the OSPO gave me depth. The production systems gave me the confidence that comes from having broken something real and fixed it. I'm ready.
              </p>
            </section>

          </div>
        </FadeIn>
      </div>
    </div>
  )
}