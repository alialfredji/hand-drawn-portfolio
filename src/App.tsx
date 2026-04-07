import { Button, Card, Badge, Avatar, Divider, Tooltip } from 'sketchbook-ui';

function App() {
  return (
    <div className="portfolio-container">
      {/* 1. Hero Section */}
      <section className="section hero-section">
        <h1 className="hero-name">Ali Alfredji</h1>
        <div className="hero-badges">
          <Badge>Senior Engineer</Badge>
          <Badge>AI-Native</Badge>
          <Badge>Cloud</Badge>
        </div>
        <p className="hero-bio">
          Senior software engineer. I build systems that make engineers faster. Writing about AI-native development, multiplier mindset, and cloud engineering.
        </p>
        <div className="hero-actions">
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            See my work ↓
          </Button>
          <Button onClick={() => window.open('https://linkedin.com/in/alialfredji', '_blank')}>
            LinkedIn →
          </Button>
        </div>
      </section>

      <Divider />

      {/* 2. About Section */}
      <section className="section about-section">
        <Card variant="notebook" className="about-card">
          <div className="about-content">
            <Avatar size="lg" className="about-avatar" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                10+ years building software. Currently at IKEA working on cloud infrastructure and CDK migration. Before that: built and shipped a startup. Now the person who makes teams faster, not the hero dev.
              </p>
              <p>
                Writing on LinkedIn about AI-native engineering — how engineers can stay relevant and work smarter with AI. Playing football when not shipping code.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="section projects-section">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          <Card variant="paper" showBorder className="project-card">
            <h3>aitop</h3>
            <p>Rust CLI for AI model switching and cost tracking</p>
            <div className="project-badge">
              <Badge>Rust</Badge>
            </div>
          </Card>
          
          <Card variant="paper" showBorder className="project-card">
            <h3>sketchbook-portfolio</h3>
            <p>This very site. Built with sketchbook-ui to explore hand-drawn React components</p>
            <div className="project-badge">
              <Badge>React</Badge>
            </div>
          </Card>
          
          <Card variant="paper" showBorder className="project-card">
            <h3>creator-research-tool</h3>
            <p>LinkedIn creator analysis pipeline — scrapes and analyzes creator patterns</p>
            <div className="project-badge">
              <Badge>Python</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* 4. Writing / Content Section */}
      <section className="section writing-section">
        <h2>What I write about</h2>
        <div className="writing-badges">
          <Badge>AI-native engineering</Badge>
          <Badge>Cloud & Infrastructure</Badge>
          <Badge>Multiplier mindset</Badge>
          <Badge>Developer tooling</Badge>
        </div>
        <p className="writing-text">
          Active on LinkedIn. Building toward 10K audience. Writing about the intersection of deep engineering and AI-amplified workflows.
        </p>
        <Button onClick={() => window.open('https://linkedin.com/in/alialfredji', '_blank')}>
          Follow on LinkedIn →
        </Button>
      </section>

      <Divider />

      {/* 5. Tools I Use Section */}
      <section className="section tools-section">
        <h2>Tools I Use</h2>
        <div className="tools-row">
          <Tooltip content="Strictly typed JavaScript"><Badge>TypeScript</Badge></Tooltip>
          <Tooltip content="Systems programming"><Badge>Rust</Badge></Tooltip>
          <Tooltip content="Scripting & AI"><Badge>Python</Badge></Tooltip>
          <Tooltip content="Infrastructure as Code"><Badge>AWS CDK</Badge></Tooltip>
          <Tooltip content="UI Framework"><Badge>React</Badge></Tooltip>
          <Tooltip content="Frontend Tooling"><Badge>Vite</Badge></Tooltip>
          <Tooltip content="AI Assistant"><Badge>Claude</Badge></Tooltip>
          <Tooltip content="Dev Environment"><Badge>OpenCode</Badge></Tooltip>
          <Tooltip content="Knowledge Vault"><Badge>Obsidian</Badge></Tooltip>
          <Tooltip content="Workflow Automation"><Badge>n8n</Badge></Tooltip>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="footer">
        <p>Built with <a href="https://github.com/SarthakRawat-1/sketchbook-ui" target="_blank" rel="noreferrer">sketchbook-ui</a> · Hand-drawn, not generated · alialfredji</p>
      </footer>
    </div>
  );
}

export default App;