import { Link } from "react-router-dom";

export function Terms() {
  return (
    <>
      <main className="terms">
        <h2 style={{ textAlign: "center" }}>Política de Privacidade</h2>{" "}
        <h3 style={{ textAlign: "center" }}>Previsão do Tempo</h3>
        <br />
        <h2>1. Termos e Condições de Uso</h2>
        <p>
          Ao acessar ao site{" "}
          <a href="https://previsaodotempo.site">Previsão do Tempo</a>, você
          concorda em cumprir estes termos de serviço, todas as leis e
          regulamentos aplicáveis ​​e concorda que é responsável pelo
          cumprimento de todas as leis locais aplicáveis. Se você não concordar
          com algum desses termos, está proibido de usar ou acessar este site.
          Os materiais contidos neste site são protegidos pelas leis de direitos
          autorais e marcas comerciais aplicáveis.
        </p>{" "}
        <h2>2. Uso de Licença</h2>{" "}
        <ol>
          {" "}
          <li>
            tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site Previsão do Tempo; {" "}
          </li>{" "}
        </ol>{" "}
        <p>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por Previsão do Tempo a
          qualquer momento. Ao encerrar a visualização desses materiais ou após
          o término desta licença, você deve apagar todos os materiais baixados
          em sua posse, seja em formato eletrónico ou impresso.
        </p>{" "}
        <h2>3. Isenção de responsabilidade</h2>{" "}
        <ol>
          {" "}
          <li>
            Os materiais no site da Previsão do Tempo são fornecidos 'como
            estão'. Previsão do Tempo não oferece garantias, expressas ou
            implícitas, e, por este meio, isenta e nega todas as outras
            garantias, incluindo, sem limitação, garantias implícitas ou
            condições de comercialização, adequação a um fim específico ou não
            violação de propriedade intelectual ou outra violação de direitos.{" "}
          </li>{" "}
          <li>
            Além disso, o Previsão do Tempo não garante ou faz qualquer
            representação relativa à precisão, aos resultados prováveis ​​ou à
            confiabilidade do uso dos materiais em seu site ou de outra forma
            relacionado a esses materiais ou em sites vinculados a este site.
          </li>{" "}
        </ol>{" "}
        <h2>4. Limitações</h2>{" "}
        <p>
          Em nenhum caso o Previsão do Tempo ou seus fornecedores serão
          responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos
          por perda de dados ou lucro ou devido a interrupção dos negócios)
          decorrentes do uso ou da incapacidade de usar os materiais em Previsão
          do Tempo, mesmo que Previsão do Tempo ou um representante autorizado
          da Previsão do Tempo tenha sido notificado oralmente ou por escrito da
          possibilidade de tais danos. Como algumas jurisdições não permitem
          limitações em garantias implícitas, ou limitações de responsabilidade
          por danos conseqüentes ou incidentais, essas limitações podem não se
          aplicar a você.
        </p>{" "}
        <h2>5. Precisão dos materiais</h2>{" "}
        <p>
          Os materiais exibidos no site da Previsão do Tempo podem incluir erros
          técnicos, tipográficos ou fotográficos. Previsão do Tempo não garante
          que qualquer material em seu site seja preciso, completo ou atual.
          Previsão do Tempo pode fazer alterações nos materiais contidos em seu
          site a qualquer momento, sem aviso prévio. No entanto, Previsão do
          Tempo não se compromete a atualizar os materiais.
        </p>{" "}
        <h2>6. Links</h2>{" "}
        <p>
          O Previsão do Tempo não analisou todos os sites vinculados ao seu site
          e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
          de qualquer link não implica en nosso por Previsão do Tempo do site. O
          uso de qualquer site vinculado é por conta e risco do usuário.
        </p>{" "}
        <h3>Modificações</h3>{" "}
        <p>
          O Previsão do Tempo pode revisar estes termos de serviço do site a
          qualquer momento, sem aviso prévio. Ao usar este site, você concorda
          em ficar vinculado à versão atual desses termos de serviço.
        </p>{" "}
        <h3>Lei aplicável</h3>{" "}
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do Previsão do Tempo e você se submete irrevogavelmente à
          jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </p>
        <br />
        <br />
      </main>
      <Link className="linkHome" to="/">
          Ir para a<br /> Página Inicial
      </Link>
      <Link className="linkPolitica" to="/privacy">
        Política de
        <br /> Privacidade
      </Link>
      <Link className="linkTermos" to="/terms">
        Termos e<br /> Condições de Uso
      </Link>
    </>
  );
}
