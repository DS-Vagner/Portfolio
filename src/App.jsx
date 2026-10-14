import React, { useMemo, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness,
  Check, ChevronDown, Code2, Database, ExternalLink, Github, Linkedin, Mail,
  Menu, MessageCircle, Network, Search, Sparkles, X, Zap, Briefcase
} from 'lucide-react';

const GITHUB = 'https://github.com/DS-Vagner';
const LINKEDIN = 'https://www.linkedin.com/in/vagnermarques-dados/';

const projects = [
  {
    id: 1, category: 'BI & Dados', number: '01', icon: BarChart3,
    title: 'Dashboard de indicadores',
    subtitle: 'Business Intelligence · Projeto demonstrativo',
    description: 'Uma visão executiva para transformar dados operacionais em indicadores claros, identificar tendências e apoiar decisões.',
    tools: ['Power BI', 'Excel', 'Modelagem de dados'],
    problem: 'Como organizar diferentes indicadores em uma visão única e útil para quem precisa decidir?',
    approach: 'Preparação e padronização dos dados, definição de métricas, organização visual por perguntas de negócio e construção de filtros para explorar os resultados.',
    outcome: 'O projeto deve evidenciar clareza visual, lógica dos indicadores e capacidade de traduzir dados em recomendações.',
    repo: ''
  },
  {
    id: 2, category: 'Python', number: '02', icon: Code2,
    title: 'Análise exploratória de dados',
    subtitle: 'Data Analytics · Projeto demonstrativo',
    description: 'Exploração de uma base de dados para avaliar qualidade, entender distribuições, investigar padrões e comunicar descobertas.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    problem: 'Quais padrões, inconsistências e oportunidades podem estar escondidos em uma base de dados?',
    approach: 'Inspeção inicial, tratamento de valores ausentes, análise estatística descritiva, visualizações e registro das principais hipóteses.',
    outcome: 'Inclua as descobertas obtidas na sua execução, gráficos e conclusões sustentadas pelos dados.',
    repo: ''
  },
  {
    id: 3, category: 'SQL', number: '03', icon: Database,
    title: 'Consultas e análise com SQL',
    subtitle: 'Data Analytics · Projeto demonstrativo',
    description: 'Consultas para responder perguntas de negócio, cruzar tabelas e criar uma base confiável para relatórios e análises.',
    tools: ['SQL', 'CTEs', 'JOINs', 'Agregações'],
    problem: 'Como transformar tabelas relacionais em respostas consistentes para perguntas de negócio?',
    approach: 'Modelagem básica, consultas com JOIN, filtros, agregações, CTEs e validação dos resultados.',
    outcome: 'Adicione o esquema da base, as perguntas respondidas e exemplos de consultas com seus resultados reais.',
    repo: ''
  },
  {
    id: 4, category: 'Machine Learning', number: '04', icon: BrainCircuit,
    title: 'Modelo preditivo',
    subtitle: 'Machine Learning · Projeto demonstrativo',
    description: 'Fluxo de aprendizado de máquina para preparar dados, treinar um modelo e avaliar seu desempenho de forma responsável.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Estatística'],
    problem: 'É possível estimar um resultado futuro usando padrões presentes nos dados históricos?',
    approach: 'Definição da variável-alvo, separação treino/teste, criação de baseline, treinamento, validação e escolha de métricas adequadas.',
    outcome: 'Preencha com o conjunto de dados utilizado, métricas calculadas e limitações.',
    repo: ''
  },
  {
    id: 5, category: 'IA & Automação', number: '05', icon: Network,
    title: 'Agente de IA e automação',
    subtitle: 'Inteligência Artificial · Projeto demonstrativo',
    description: 'Protótipo de fluxo automatizado que combina instruções, ferramentas e dados para executar uma tarefa delimitada.',
    tools: ['Python', 'LangChain', 'APIs', 'Automação'],
    problem: 'Como reduzir tarefas repetitivas mantendo rastreabilidade, controle e validação humana?',
    approach: 'Definição de escopo, desenho do fluxo, integração com ferramentas e tratamento de erros.',
    outcome: 'Documente o comportamento esperado, os testes realizados e os limites do agente.',
    repo: ''
  },
  {
    id: 6, category: 'BI & Dados', number: '06', icon: BarChart3,
    title: 'Análise de custos e orçamento',
    subtitle: 'Engenharia + Dados · Projeto demonstrativo',
    description: 'Uma análise que conecta experiência em custos e engenharia à organização de dados, indicadores e apoio à decisão.',
    tools: ['Excel', 'Power BI', 'KPIs', 'Análise de custos'],
    problem: 'Como comparar orçamento, custo realizado e variações para apoiar decisões de gestão?',
    approach: 'Estruturação de dados de orçamento e realizado, classificação de custos, análise de desvios e criação de indicadores por categoria.',
    outcome: 'Use dados próprios anonimizados ou uma base pública/sintética claramente identificada.',
    repo: ''
  }
];

const skills = [
  { title: 'Análise & BI', items: ['Excel', 'Power BI', 'Indicadores e KPIs', 'Visualização de dados'], icon: BarChart3 },
  { title: 'Dados & Programação', items: ['Python', 'SQL', 'Pandas', 'Estatística'], icon: Code2 },
  { title: 'IA & Machine Learning', items: ['Fundamentos de ML', 'Modelos preditivos', 'RAG e agentes', 'Engenharia de prompts'], icon: BrainCircuit },
  { title: 'Cloud & Ferramentas', items: ['Fundamentos de Cloud', 'Git e GitHub', 'APIs', 'Automação'], icon: Zap }
];

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filters = ['Todos', 'BI & Dados', 'Python', 'SQL', 'Machine Learning', 'IA & Automação'];

  const filteredProjects = useMemo(() => projects.filter(project => {
    const matchesFilter = activeFilter === 'Todos' || project.category === activeFilter;
    const haystack = `${project.title} ${project.description} ${project.tools.join(' ')}`.toLowerCase();
    return matchesFilter && haystack.includes(query.toLowerCase());
  }), [activeFilter, query]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Vagner Marques, início">
          <span className="brand-mark">VM<span>.</span></span>
          <span className="brand-copy">VAGNER MARQUES<small>DATA · AI · INSIGHTS</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
          {[['Sobre', '#sobre'], ['Projetos', '#projetos'], ['Tecnologias', '#tecnologias'], ['Trajetória', '#trajetoria']].map(([label, href]) =>
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> EM CONSTRUÇÃO CONTÍNUA <span className="availability-divider">/</span> DADOS & IA
            </div>
            <h1>Transformando <span className="gradient-text">dados</span><br />em decisões.</h1>
            <p className="hero-lead">
              Sou Vagner Marques. Uno minha experiência em engenharia e custos à Ciência de Dados para investigar problemas, encontrar padrões e transformar análises em decisões melhores.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Explorar projetos <ArrowRight size={17} /></a>
              <a className="button button-ghost" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> Meu GitHub <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-footnote"><span className="tiny-line" /> Curiosidade analítica. Visão de negócio. Aprendizado constante.</div>
          </div>

          
          {/* PAINEL VISUAL DA FOTO DE PERFIL */}
          <div className="hero-visual" aria-label="Foto de perfil de Vagner Marques">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="visual-glow" />
            <div className="visual-grid" />
            
            {/* Chips Flutuantes */}
            <div className="floating-chip chip-python"><span className="chip-dot purple" /> Python</div>
            <div className="floating-chip chip-sql"><span className="chip-dot blue" /> SQL</div>
            <div className="floating-chip chip-ai"><Sparkles size={14} /> IA / ML</div>
            
            {/* Foto de Perfil em Formato de Card Arredondado */}
            <div className="photo-panel">
              <img 
                src="/minha-foto.jpg" 
                alt="Vagner Marques" 
                className="hero-photo-img" 
              />
            </div>

            {/* Ícones nas Órbitas */}
            <div className="orbit-node node-one"><Database size={17} /></div>
            <div className="orbit-node node-two"><BrainCircuit size={17} /></div>
            <div className="orbit-node node-three"><BarChart3 size={17} /></div>
            <div className="visual-caption">DO DADO AO INSIGHT <ArrowDown size={13} /></div>
          </div>


          <a href="#sobre" className="scroll-cue"><span /> Role para explorar <ChevronDown size={14} /></a>
        </section>

        {/* FAIXA DE DESTAQUE */}
        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">MEU FOCO</span>
            <span><BarChart3 size={17} /> Análise de dados</span>
            <span><Database size={17} /> Business Intelligence</span>
            <span><BrainCircuit size={17} /> IA & Machine Learning</span>
            <span><Zap size={17} /> Automação</span>
          </div>
        </section>

        {/* SOBRE MIM */}
        <section className="section-wrap section-block about-section" id="sobre">
          <div className="section-heading">
            <div><span className="eyebrow">01 / SOBRE MIM</span><h2>Uma trajetória que conecta <span className="gradient-text">negócio e tecnologia.</span></h2></div>
            <p>Dados ganham valor quando ajudam a responder perguntas importantes.</p>
          </div>
          <div className="about-grid">
            <div className="about-card about-main-card">
              <div className="card-icon"><BriefcaseBusiness size={20} /></div>
              <h3>Experiência prática.<br /><span>Olhar analítico.</span></h3>
              <p>Minha trajetória profissional foi construída em ambientes onde custos, prazos, planejamento e qualidade das informações fazem diferença. Agora, direciono essa experiência para a Ciência de Dados e a Inteligência Artificial.</p>
              <p>Meu objetivo é combinar visão de negócio, raciocínio estruturado e ferramentas tecnológicas para apoiar decisões com dados.</p>
              <a className="text-link" href="#trajetoria">Conheça minha trajetória <ArrowRight size={15} /></a>
            </div>
            <div className="about-side">
              <div className="mini-card">
                <span className="mini-index">A</span><div><h3>Visão de negócio</h3><p>Entender o problema antes de escolher a ferramenta.</p></div>
              </div>
              <div className="mini-card">
                <span className="mini-index">B</span><div><h3>Raciocínio analítico</h3><p>Investigar dados, validar hipóteses e comunicar descobertas.</p></div>
              </div>
              <div className="mini-card">
                <span className="mini-index">C</span><div><h3>Aprendizado contínuo</h3><p>Construir, testar, documentar e melhorar a cada projeto.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="section-wrap section-block projects-section" id="projetos">
          <div className="section-heading">
            <div><span className="eyebrow">02 / PROJETOS</span><h2>Aprendizado que vira <span className="gradient-text">prática.</span></h2></div>
            <p>Explore estudos e projetos em análise de dados, BI, programação e IA.</p>
          </div>

          <div className="project-controls">
            <div className="filter-list" role="group" aria-label="Filtrar projetos">
              {filters.map(filter => (
                <button key={filter} className={activeFilter === filter ? 'filter-chip active' : 'filter-chip'} onClick={() => setActiveFilter(filter)}>{filter}</button>
              ))}
            </div>
            <label className="search-box">
              <Search size={16} />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar projeto..." aria-label="Buscar projeto" />
              {query && <button onClick={() => setQuery('')} aria-label="Limpar busca"><X size={14} /></button>}
            </label>
          </div>

          <div className="project-grid">
            {filteredProjects.map(project => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.id}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number} / CASE</span>
                    <span className="project-icon"><Icon size={20} /></span>
                  </div>
                  <div className="project-art" aria-hidden="true">
                    <div className="art-grid" />
                    <div className={`art-shape shape-${project.id}`} />
                    <span className="art-orb orb-left" />
                    <span className="art-orb orb-right" />
                  </div>
                  <div className="project-body">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-list">
                      {project.tools.slice(0, 3).map(tool => <span key={tool}>{tool}</span>)}
                    </div>
                    <button className="project-open" onClick={() => setSelectedProject(project)}>Ver detalhes <ArrowUpRight size={16} /></button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && <div className="empty-state">Nenhum projeto encontrado. Tente outro termo ou categoria.</div>}
          
          <div className="projects-footer">
            <span>Mais projetos serão adicionados conforme forem desenvolvidos.</span>
            <a href={GITHUB} target="_blank" rel="noreferrer">Visitar GitHub <ExternalLink size={14} /></a>
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section className="skills-band" id="tecnologias">
          <div className="section-wrap section-block">
            <div className="section-heading">
              <div><span className="eyebrow">03 / TECNOLOGIAS</span><h2>Ferramentas para <span className="gradient-text">investigar e construir.</span></h2></div>
              <p>Uma visão organizada das áreas que fazem parte da minha jornada.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div className="skill-card" key={skill.title}>
                    <div className="skill-card-head">
                      <span className="skill-icon"><Icon size={20} /></span>
                      <span className="skill-index">0{index + 1}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <div className="skill-items">
                      {skill.items.map(item => <span key={item}><Check size={13} />{item}</span>)}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="skills-footnote"><span className="status-dot" /> Perfil em evolução: conhecimentos e ferramentas serão atualizados conforme projetos e estudos avançarem.</p>
          </div>
        </section>

        {/* TRAJETÓRIA COM CARD REDIRECIONANDO PARA LINKEDIN */}
        <section className="section-wrap section-block journey-section" id="trajetoria">
          <div className="section-heading">
            <div><span className="eyebrow">04 / TRAJETÓRIA</span><h2>Experiência que se transforma em <span className="gradient-text">perspectiva.</span></h2></div>
            <p>Uma transição construída com intenção: aproveitar o conhecimento em custos e negócios para a Ciência de Dados.</p>
          </div>

          {/* CARD DE DESTAQUE PARA O LINKEDIN */}
          <div className="education-card" style={{ marginBottom: '32px', background: 'linear-gradient(135deg, rgba(35, 27, 64, 0.95), rgba(10, 102, 194, 0.18))', border: '1px solid rgba(10, 102, 194, 0.4)' }}>
            <div className="education-icon" style={{ background: 'rgba(10, 102, 194, 0.2)', color: '#3a86ff' }}>
              <Briefcase size={22} />
            </div>
            <div>
              <span className="eyebrow" style={{ color: '#3a86ff' }}>HISTÓRICO EXECUTIVO COMPLETO</span>
              <h3>Mais de 15 anos em Engenharia, Orçamentos & Custos</h3>
              <p>Para consultar detalhes de empresas, cargos e realizações na minha trajetória profissional, visite meu perfil oficial no LinkedIn.</p>
            </div>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="button button-primary" style={{ background: '#0a66c2', border: 'none', textDecoration: 'none' }}>
              <Linkedin size={16} /> Ver no LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="education-card">
            <div className="education-icon"><BrainCircuit size={22} /></div>
            <div>
              <span className="eyebrow">FORMAÇÃO ATUAL</span>
              <h3>Ciência de Dados & Analytics</h3>
              <p>Formação contínua e aprendizado prático em análise de dados, estatística, Python, SQL, BI e inteligência artificial.</p>
            </div>
            <span className="education-badge">EM ANDAMENTO</span>
          </div>
        </section>

        {/* CONTATO */}
        <section className="contact-section" id="contato">
          <div className="contact-glow" />
          <div className="section-wrap contact-inner">
            <span className="eyebrow">05 / CONTATO</span>
            <h2>Vamos transformar<br /><span className="gradient-text">ideias em projetos?</span></h2>
            <p>Estou construindo minha trajetória em dados e IA e aberto a conexões, oportunidades de aprendizado e desafios profissionais.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> Conectar no LinkedIn <ArrowUpRight size={15} /></a>
              <a className="button button-ghost" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> Explorar GitHub <ArrowUpRight size={15} /></a>
            </div>
            <div className="contact-links">
              <span><Mail size={15} /> vagner.vmarques@gmail.com</span>
              <span><MessageCircle size={15} /> Aberto a novas conexões</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">VM<span>.</span></span><span className="brand-copy">VAGNER MARQUES<small>DATA · AI · INSIGHTS</small></span></a>
        <span>Construído com curiosidade e vontade de aprender.</span>
        <a href="#inicio" className="back-top">Voltar ao topo ↑</a>
        <small className="copyright">© {new Date().getFullYear()} Vagner Marques</small>
      </footer>

      {/* MODAL PARA DETALHES DO PROJETO */}
      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setSelectedProject(null); }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fechar detalhes"><X size={20} /></button>
            <span className="eyebrow">PROJETO / {selectedProject.number}</span>
            <span className="modal-category">{selectedProject.category}</span>
            <h2 id="modal-title">{selectedProject.title}</h2>
            <p className="modal-subtitle">{selectedProject.subtitle}</p>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-detail"><h3>Problema</h3><p>{selectedProject.problem}</p></div>
            <div className="modal-detail"><h3>Abordagem</h3><p>{selectedProject.approach}</p></div>
            <div className="modal-detail"><h3>O que documentar</h3><p>{selectedProject.outcome}</p></div>
            <div className="tag-list modal-tags">{selectedProject.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
            {selectedProject.repo ? (
              <a className="button button-primary modal-repo" href={selectedProject.repo} target="_blank" rel="noreferrer"><Github size={17} /> Ver repositório <ArrowUpRight size={15} /></a>
            ) : (
              <div className="repo-placeholder"><Github size={16} /><span>Adicione o link do repositório quando o projeto estiver publicado.</span></div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;