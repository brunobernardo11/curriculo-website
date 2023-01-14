import React from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TestimonialSection, Row, TestiItem, Stars, ClientInfo } from "./style";
import Cassiano from "../../assets/Testimonial/cassiano.jpg";
import Felipe from "../../assets/Testimonial/machado.jpg";
import Fernanda from "../../assets/Testimonial/fernanda.jpg";
import Gabriela from "../../assets/Testimonial/gabriela.jpg";
import LeonardoD from "../../assets/Testimonial/leo.jpg";
import LeonardoT from "../../assets/Testimonial/leonardo.jpg";
import Luiza from "../../assets/Testimonial/luiza.jpg";
import Nelson from "../../assets/Testimonial/nelson.jpg";
import Sabrina from "../../assets/Testimonial/sabrina.jpg";
import Thaina from "../../assets/Testimonial/thaina.jpg";

export default function Testimonial(props) {
  const options = {
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div id={props.id || ""}>
      <ScreenHeading
        title={"Testemunhas"}
        subHeading={"O que meus colegas pensam sobre mim?"}
      />
      <TestimonialSection>
        <Row>
          <OwlCarousel className="owl-carousel" {...options}>
            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Demonstrou um elevado nível técnico, atuando em projetos de
                Front-End e Back-End, conseguindo implementar APIs em Node.js
                sem muita ajuda. Mesmo com tecnologias novas e desconhecidas, já
                provou que sabe se virar e procurar como resolver problemas e
                implementar soluções.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Cassiano} alt="Foto de Cassiano Taira." />
                <h5>Cassiano Taira</h5>
                <p>Software Architect 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                O Bruno, em Dados Clínicos, conseguiu produzir aplicações
                Back-End complexas, acessando diversos bancos e funcionalidades
                da AWS, tarefa complicada para alguém com pouca experiência.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img
                  src={Felipe}
                  alt="Foto de Felipe Augusto de Moraes Machado."
                />
                <h5>Felipe Augusto de Moraes Machado</h5>
                <p>Cientista de Dados 📌 Cielo</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Na Squad do Site, tive a oportunidade de trabalhar diretamente
                com o Bruno e notar o quanto ele é interessado e participativo.
                Ele pode vivenciar como funciona a rotina da Squad e aprender um
                pouco mais sobre desenvolvimento Front-End e Scrum.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Fernanda} alt="Foto de Fernanda Gruppi." />
                <h5>Fernanda Gruppi</h5>
                <p>
                  Gerente de Produtos Digitais 📌 Aché Laboratórios
                  Farmacêuticos
                </p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Profissional dedicado, determinado, proativo, comunicativo e
                detalhista. O trabalho é sempre feito de maneira satisfatória e
                eficiente, e é notório que ele dedica todo tempo possível para
                resolução de problemas independente da complexidade,
                principalmente por ter um viés de inovação.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Gabriela} alt="Foto de Gabriela Cordeiro." />
                <h5>Gabriela Cordeiro</h5>
                <p>Analista de Desenvolvimento 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Bruno é bem-humorado e companheiro, consegue motivar e unir a
                equipe, colaborando para um ambiente de trabalho acolhedor.
                Bastante racional e otimista, ele é um profissional que se
                motiva ao receber feedbacks construtivos e também toma a
                iniciativa para propor melhorias no projeto.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={LeonardoD} alt="Foto de Leonardo Dias Moreira." />
                <h5>Leonardo Dias Moreira</h5>
                <p>Associate Product Analyst 📌 Itaú</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Conheci o Bruno quando ele demonstrou interesse em aprender
                Front-End. Meu produto era desenvolvido com React e percebi que
                ali era o local correto pra ele aprender.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={LeonardoT} alt="Foto de Leonardo Tafarelo." />
                <h5>Leonardo Tafarelo</h5>
                <p>
                  Front End Engineer & Mobile Developer 📌 Hospital
                  Sírio-Libanês
                </p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Simpático, bem-humorado, dedicado, interessado, criativo, quando
                quer aprender algo não pensa duas vezes, é parceiro,
                comunicativo e multifunções. É o primeiro a concordar quando se
                trata de novas ideias e desafios, ele se empolga e vai atrás da
                melhor maneira de passar por esse desafio.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Luiza} alt="Foto de Luiza Leal." />
                <h5>Luiza Leal</h5>
                <p>Software Engineer 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Bruno, foi um prazer trabalhar com você, durante o tempo que
                tive a oportunidade de acompanhar as suas tarefas você deixou em
                evidência que é um ótimo profissional, está sempre buscando
                melhorar suas habilidades e não tem receio em perguntar.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Nelson} alt="Foto de Nelson Araújo." />
                <h5>Nelson Araújo</h5>
                <p>Front-end Developer 📌 NTT DATA Europe & Latam</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Seu perfil protagonista, inquieto e engajado já me chamou a
                atenção durante o Hackathon pois seu grupo estava desfalcado e
                isso só o deixou ainda mais motivado a apresentar um excelente
                projeto.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Sabrina} alt="Foto de Sabrina Nagata Nigro." />
                <h5>Sabrina Nagata Nigro</h5>
                <p>Gerente de RH 📌 Lavoro Agro</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Trabalhar com o Bruno é simplesmente espetacular! Ele é muito
                dedicado, esforçado e preocupado em melhorar sempre. Está sempre
                disposto a ajudar a todos que estão a sua volta.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Thaina} alt="Foto de Thainá Cruz." />
                <h5>Thainá Cruz</h5>
                <p>Estagiária de Produtos Digitais 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Extremamente organizado, consegue seguir padrões de projeto,
                além de buscar sempre por saber quais são as melhores práticas e
                como aplicá-las. É um profissional muito promissor!
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Cassiano} alt="Foto de Cassiano Taira." />
                <h5>Cassiano Taira</h5>
                <p>Software Architect 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Teve uma boa experiência com Ciência de Dados, trabalhando com
                Big Data, gerando no fim uma IA que realizava predição de
                mortalidade.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img
                  src={Felipe}
                  alt="Foto de Felipe Augusto de Moraes Machado."
                />
                <h5>Felipe Augusto de Moraes Machado</h5>
                <p>Cientista de Dados 📌 Cielo</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Em diversos momentos, aceitou o desafio e no meu entender ele
                conseguiu evoluir bastante como profissional. Também tem uma
                ótima comunicação. Obrigada Bruno pelo seu apoio nestes últimos
                2 meses.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Fernanda} alt="Foto de Fernanda Gruppi." />
                <h5>Fernanda Gruppi</h5>
                <p>
                  Gerente de Produtos Digitais 📌 Aché Laboratórios
                  Farmacêuticos
                </p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Aberto sempre a novos desafios e responsabilidades porque ele
                não fica parado. Além disso, Bruno incentiva a colaboração em
                equipe e sempre se mostra disposto a ajudar, mesmo que uma
                atividade não esteja dentro do que foi planejado para ele,
                visando sinergia.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Gabriela} alt="Foto de Gabriela Cordeiro." />
                <h5>Gabriela Cordeiro</h5>
                <p>Analista de Desenvolvimento 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Trabalhar com ele é ter a certeza de que o trabalho será feito
                com excelência e a jornada até a entrega será divertida e
                construtiva.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={LeonardoD} alt="Foto de Leonardo Dias Moreira." />
                <h5>Leonardo Dias Moreira</h5>
                <p>Associate Product Analyst 📌 Itaú</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Evoluiu muito em pouco tempo, iniciou com algumas correções de
                bugs e em pouco tempo já estava resolvendo problemas mais
                complexos.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={LeonardoT} alt="Foto de Leonardo Tafarelo." />
                <h5>Leonardo Tafarelo</h5>
                <p>
                  Front End Engineer & Mobile Developer 📌 Hospital
                  Sírio-Libanês
                </p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                É incrível trabalhar com o Bruno, ele faz você se perguntar se o
                dia dele tem 72 horas porque ele sempre está focado em concluir
                o que precisa, te ensina a ser paciente e não parar quanto aos
                desafios que a área proporciona.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Luiza} alt="Foto de Luiza Leal." />
                <h5>Luiza Leal</h5>
                <p>Software Engineer 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Possui facilidade para entender códigos e disposição para
                aprender novas tecnologias. Espero ter a oportunidade de voltar
                a trabalhar com você.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Nelson} alt="Foto de Nelson Araújo." />
                <h5>Nelson Araújo</h5>
                <p>Front-end Developer 📌 NTT DATA Europe & Latam</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                No dia a dia, Bruno é perspicaz, inteligente, antenado e
                participativo. Nas interações demostra empatia com os colegas,
                bom humor, simpatia e alegria.
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Sabrina} alt="Foto de Sabrina Nagata Nigro." />
                <h5>Sabrina Nagata Nigro</h5>
                <p>Gerente de RH 📌 Lavoro Agro</p>
              </ClientInfo>
            </TestiItem>

            <TestiItem>
              <p>
                <i className="fa fa-quote-left" />
                Bruno jamais se encontra parado, sempre está estudando,
                aprendendo coisas novas, se desafiando e nunca desistindo quando
                alguma dificuldade aparece. Além disso, é extremamente
                inteligente, comunicativo, persistente e muito bem humorado, o
                que o faz ser um ótimo colega de equipe!
                <i className="fa fa-quote-right" />
              </p>
              <Stars>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </Stars>
              <ClientInfo>
                <img src={Thaina} alt="Foto de Thainá Cruz." />
                <h5>Thainá Cruz</h5>
                <p>Estagiária de Produtos Digitais 📌 Hospital Sírio-Libanês</p>
              </ClientInfo>
            </TestiItem>
          </OwlCarousel>
        </Row>
      </TestimonialSection>
    </div>
  );
}
