import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const membrosData = [
    { name: "Áurea Cunha Prado", email: "aurea@bluefit.com.br", cargo: "Aluno"},
    { name: "Breno Furtado Rosado", email: "breno@bluefit.com.br", cargo: "Aluno" },
    { name: "João Victor Dias", email: "joaovictor.dias@bluefit.com.br", cargo: "Aluno"},
    { name: "Rayssa Amaral Gomes", email: "rayssa@bluefit.com.br", cargo: "Treinador" },
    { name: "Carlos Eduardo de Souza Mattos", email: "carloseduardo@bluefit.com.br", cargo: "Aluno" },
    { name: "Marlon Ruffo Nascimento", email: "marlon@bluefit.com.br", cargo: "Treinador" },
    { name: "João Paulo Macedo Fernandes", email: "joaopaulo.macedo@bluefit.com.br", cargo: "Aluno" },
    { name: "Lucas Henrique Arruda", email: "lucas.arruda@bluefit.com.br", cargo: "Treinador" },
    { name: "Felipe Gotelip Delgado", email: "felipe.gotelip@bluefit.com.br", cargo: "Aluno" },
    { name: "Gabriel de Oliveira Vieira", email: "gabriel.vieira@bluefit.com.br", cargo: "Treinador"},
    { name: "Quezia Emanuelly da Silva Oliveira", email: "quezia@bluefit.com.br", cargo: "Aluno"},
    { name: "Ricardo Ervilha Silva", email: "ricardo@bluefit.com.br", cargo: "Aluno" },
    { name: "Vitoria Nunes", email: "vitoria.nunes@bluefit.com.br", cargo: "Treinador" },
    { name: "Hugo Nogueira Carvalho", email: "hugo@bluefit.com.br", cargo: "Treinador"},
    { name: "Davi Almeida Pacheco", email: "davi.pacheco@bluefit.com.br", cargo: "Aluno" },
    { name: "Leandro Alvares de Carvalho", email: "leandro@bluefit.com.br", cargo: "Aluno"},
    { name: "Sara Ingrid Sousa Oliveira Afonso", email: "sara@bluefit.com.br", cargo: "Aluno"},
    { name: "Letícia Quintão Costa", email: "leticia@bluefit.com.br", cargo: "Aluno" },
    { name: "Felipe Lima Nogueira", email: "felipe.nogueira@bluefit.com.br", cargo: "Aluno"},
    { name: "Daniel Alves Thielmann", email: "daniel.thielmann@bluefit.com.br", cargo: "Aluno"},
    { name: "João Pedro Nascimento", email: "joaopedro@bluefit.com.br", cargo: "Aluno"},
    { name: "Saulo de Tarso Romano Surerus", email: "saulo@bluefit.com.br", cargo: "Aluno"},
    { name: "Taynara Carlos Ferraz", email: "taynara@bluefit.com.br", cargo: "Aluno"},
    { name: "Felipe Souza Magalhães Sant'Anna", email: "felipe.santanna@bluefit.com.br", cargo: "Treinador"},
    { name: "Pedro Henrique Pascoalino Marques", email: "pedro.marques@bluefit.com.br", cargo: "Treinador"},
    { name: "Lucas Gonçalves Rocha", email: "lucas.goncalves@bluefit.com.br", cargo: "Aluno"},
    { name: "Paulo Aquino", email: "paulo.aquino@bluefit.com.br", cargo: "Aluno" },
    { name: "Emmanuel Gomes Nassif", email: "emmanuel@bluefit.com.br", cargo: "Treinador" },
    { name: "Fabio do Vale Affonso", email: "fabio.vale@bluefit.com.br", cargo: "Aluno" },
    { name: "Gabriel de Faria Salles", email: "gabriel.faria@bluefit.com.br", cargo: "Aluno" },
    { name: "Rhara Ianna Barcelos Costa", email: "rhara@bluefit.com.br", cargo: "Treinador" },
    { name: "Carlos Gustavo Ferreira Rezende", email: "carlos.gustavo@bluefit.com.br", cargo: "Treinador"},
    { name: "Davi Kirchmaier Paiva", email: "davi.kirchmaier@bluefit.com.br", cargo: "Treinador"},
    { name: "Felipe de Oliveira Souza", email: "felipe.souza@bluefit.com.br", cargo: "Aluno" },
    { name: "João Vitor Fernandes Ribeiro Carneiro Ramos", email: "joaovitor@bluefit.com.br", cargo: "Aluno"},
  ];

  for (const membro of membrosData) {
    await prisma.membro.create({
      data: membro,
    });
  }

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });