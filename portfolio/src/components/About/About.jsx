import "./About.css";

export default function About() {
  return (
    <section className="about" id="apropos">
      <p className="about-label">À propos</p>
      <h2 className="about-title">Qui je suis</h2>

      <div className="about-grid">
        <div className="about-content">
          <p>
            Après une reconversion passionnante dans le développement web,
            j&apos;ai passé les dernières années à maîtriser{" "}
            <strong>React</strong> et son écosystème. J&apos;aime transformer
            des idées complexes en interfaces intuitives.
          </p>
          <p>
            Mon approche combine design soigné et architecture technique. Je
            travaille principalement avec <code>JavaScript</code>,{" "}
            <code>React.js</code> et <code>Scss</code>.
          </p>
          <p>
            Quand je ne code pas, vous me trouverez probablement en train
            d&apos;explorer de nouvelles librairies, contribuer à
            l&apos;open-source ou parfaire mes connaissances en{" "}
            <strong>UI/UX</strong>.
          </p>
        </div>

        <div className="about-window-wrap">
          <div className="about-window-shadow" aria-hidden="true" />
          <div className="about-window">
            <div className="about-window-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="about-window-file">developer.json</span>
            </div>
            <pre className="about-window-code">
              <code>
                <span className="tok-kw">const</span>{" "}
                <span className="tok-var">developer</span> = {"{"}
                {"\n"}
                {"  "}
                <span className="tok-key">&quot;nom&quot;</span>:{" "}
                <span className="tok-str">&quot;Tolotra Adrian&quot;</span>,
                {"\n"}
                {"  "}
                <span className="tok-key">&quot;role&quot;</span>:{" "}
                <span className="tok-str">&quot;Front-End Developer&quot;</span>
                ,{"\n"}
                {"  "}
                <span className="tok-key">&quot;stack&quot;</span>: [{"\n"}
                {"    "}
                <span className="tok-str">&quot;JavaScript&quot;</span>,{"\n"}
                {"    "}
                <span className="tok-str">&quot;React.js&quot;</span>,{"\n"}
                {"    "}
                <span className="tok-str">&quot;Scss&quot;</span>
                {"\n"}
                {"  "}],{"\n"}
                {"  "}
                <span className="tok-key">&quot;disponible&quot;</span>:{" "}
                <span className="tok-bool">true</span>,{"\n"}
                {"  "}
                <span className="tok-key">&quot;passion&quot;</span>:{" "}
                <span className="tok-str">&quot;UI/UX&quot;</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
